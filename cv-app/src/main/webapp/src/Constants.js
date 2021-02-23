import OAuth2Provider from "./objects/OAuth2Provider";
import {MarkGithubIcon} from "@primer/octicons-react";

// Some global constants
export const URL_FLANDERS = "https://www.vlaanderen.be/en";

// OAuth2
export const OAUTH2_AUTHORIZE_URL = "http://localhost:8081/oauth2/authorize/";
export const OAUTH2_REDIRECT_URL = "http://localhost:3000/oauth2/callback/";
export const OAUTH2_PROVIDERS = {
  "GITHUB": new OAuth2Provider("GitHub", MarkGithubIcon)
}

// Layout
export const LAYOUT_WIDTH = "large";