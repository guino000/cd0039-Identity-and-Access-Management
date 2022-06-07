/* @DONE replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5100', // the running FLASK api server url
  auth0: {
    url: 'dev-k3iu6ckt.us.auth0.com', // the auth0 domain prefix
    audience: 'http://127.0.0.1:5100', // the audience set for the auth0 app
    clientId: '6ll0Fh6wZaodKDEfSDVq3xnLgf8SG19P', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8100', // the base url of the running ionic application.
  }
};
