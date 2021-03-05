import OAuth2Provider from "./objects/OAuth2Provider";
import {MarkGithubIcon} from "@primer/octicons-react";
import {getServerPort} from "./scripts/util";

// Some global constants
export const URL_BASE = "/#";
export const URL_FLANDERS = "https://www.vlaanderen.be/en";
export const TITLE_BASE = "Mathias Bosman";
export const TITLE_SEPERATOR = "-";

// OAuth2
export const HOST = window.location.protocol + "//" + window.location.hostname;
export const OAUTH2_AUTHORIZE_URL = HOST + ":" + getServerPort(8081)
    + "/oauth2/authorize/";
export const OAUTH2_REDIRECT_URL = HOST + ":" + window.location.port
    + URL_BASE + "/oauth2/callback/";
export const OAUTH2_PROVIDERS = {
  "GITHUB": new OAuth2Provider("GitHub", MarkGithubIcon)
}

// Layout
export const LAYOUT_WIDTH = "large";