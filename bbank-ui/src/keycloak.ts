import Keycloak from 'keycloak-js';

<<<<<<< HEAD
const AUTH_URL= process.env.AUTH_URL || "https://keycloak-bbank-apps.apps.ocp4.ouachani.org/auth";
=======
const AUTH_URL= process.env.AUTH_URL || "http://localhost:8280/auth";
>>>>>>> v2
const AUTH_REALM=process.env.AUTH_REALM ||  "kogito" ; 
const AUTH_CLIENTID=process.env.AUTH_CLIENTID ||  "bbank-ui";

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak = Keycloak({
  url: AUTH_URL,
  realm: AUTH_REALM,
  clientId: AUTH_CLIENTID,
});


export default keycloak;