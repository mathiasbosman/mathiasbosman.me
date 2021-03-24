import OAuth2Provider from "./objects/OAuth2Provider";
import {MarkGithubIcon} from "@primer/octicons-react";
import {getServerPort} from "./scripts/util";

// Some global constants
export const URL_BASE = "/";
export const URL_FLANDERS = "https://www.vlaanderen.be/en";
export const TITLE_BASE = "Mathias Bosman";
export const TITLE_SEPERATOR = " - ";

// Locale
export const LOCALE = "en-US";
export const DATE_FORMAT_OPTIONS = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

// OAuth2
export const HOST = window.location.protocol + "//" + window.location.hostname;
export const OAUTH2_AUTHORIZE_URL = HOST + ":" + getServerPort(8081)
    + "/oauth2/authorize/";
export const OAUTH2_REDIRECT_URL = HOST + ":" + window.location.port
    + "/oauth2/redirect/";
export const OAUTH2_PROVIDERS = {
  "GITHUB": new OAuth2Provider("GitHub", MarkGithubIcon)
}

// Layout
export const LAYOUT_WIDTH = "large";
export const LAYOUT_WIDTH_LARGER = "xlarge"