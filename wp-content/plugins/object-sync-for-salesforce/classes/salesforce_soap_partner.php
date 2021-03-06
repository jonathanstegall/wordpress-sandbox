<?php
/**
 * Class file for the Object_Sync_Sf_Salesforce_Soap_Partner class.
 *
 * @file
 */

if ( ! class_exists( 'Object_Sync_Salesforce' ) ) {
	die();
}

/**
 * Expose the partner SOAP API by extending SforcePartnerClient and configuring
 * it with the OAUTH credentials and endpoints from the Salesforce API class.
 */
class Object_Sync_Sf_Salesforce_Soap_Partner extends SforcePartnerClient {

	protected $salesforce_api;
	protected $is_authorized;
	private $refreshed;

	public $wsdl;

	/**
	* Constructor which loads the SOAP client
	*
	*/
	public function __construct( Object_Sync_Sf_Salesforce $sfapi, $wsdl = null ) {
		if ( null === $this->salesforce_api ) {
			return;
		}
		if ( false === $this->salesforce_api['soap_available'] ) {
			return;
		}
		if ( ! class_exists( 'SforceBaseClient' ) && file_exists( plugin_dir_path( __FILE__ ) . '../vendor/autoload.php' ) ) {
			require_once plugin_dir_path( __FILE__ ) . '../vendor/developerforce/force.com-toolkit-for-php/soapclient/SforcePartnerClient.php';
		}
		parent::__construct();
		if ( empty( $wsdl ) ) {
			$wsdl = plugin_dir_path( __FILE__ ) . '../vendor/developerforce/force.com-toolkit-for-php/soapclient/partner.wsdl.xml';
		}
		$this->set_authorized( false );
		$this->createConnection( $wsdl );
		$this->salesforce_api = $sfapi;

		if ( $this->salesforce_api->is_authorized() ) {
			$token = $this->salesforce_api->get_access_token();
			if ( ! $token ) {
				$token = $this->salesforce_api->refresh_token();
			}
			$this->setSessionHeader( $token );
			$this->setEndPoint( $this->salesforce_api->get_api_endpoint( 'partner' ) );
			$this->set_authorized( true );
		} else {
			error_log( 'salesforce is not authorized so we cannot use soap' );
			$this->set_authorized( false );
		}
	}

	protected function set_authorized( $is_authorized ) {
		$this->is_authorized = $is_authorized;
	}

	public function is_authorized() {
		return $this->is_authorized;
	}

	public function try_soap( $function ) {
		$args = func_get_args();
		array_shift( $args );
		try {
			$results = call_user_func_array( array( $this, $function ), $args );
			// If returned without exceptions, reset the refreshed flag.
			$this->refreshed = false;
			return $results;
		} catch ( SoapFault $e ) {
			// sf:INVALID_SESSION_ID is thrown on expired login (and other reasons).
			// Our only recourse is to try refreshing our auth token. If we get any
			// other exception, bubble it up.
			if ( 'sf:INVALID_SESSION_ID' !== $e->faultcode ) {
				throw $e;
			}

			if ( ! $this->refreshed ) {
				// If we got an invalid session exception, try to refresh the auth
				// token through REST API. The "refreshed" flag will make sure we retry
				// only once.
				$this->refreshed = true;
				$this->salesforce_api->refresh_token();
				return $this->try_soap( $function, $args );
			}

			// If we've already tried a refresh, this refresh token is probably
			// invalid. Kill it, log, and bubble the exception.
			$this->set_authorized( false );
			error_log( 'website is not authorized to connect to salesforce. visit authorize page.' );
			throw $e;

		}

	}

}
