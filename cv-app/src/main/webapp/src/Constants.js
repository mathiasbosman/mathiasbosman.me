import OAuth2Provider from "./objects/OAuth2Provider";
import {faGithub, faGoogle} from "@fortawesome/free-brands-svg-icons";

// OAuth2
export const OAUTH2_AUTHORIZE_URL = "http://localhost:8081/oauth2/authorize/";
export const OAUTH2_REDIRECT_URL = "http://localhost:3000/oauth2/callback/";
export const OAUTH2_PROVIDERS = {
  "GOOGLE": new OAuth2Provider("Google", faGoogle),
  "GITHUB": new OAuth2Provider("GitHub", faGithub)
}