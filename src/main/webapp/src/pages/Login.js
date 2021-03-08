import React from "react";
import {Redirect} from "react-router-dom";
import BLOGRest from "../scripts/blog-rest";
import {
  OAUTH2_AUTHORIZE_URL,
  OAUTH2_PROVIDERS,
  OAUTH2_REDIRECT_URL,
  PREFERED_THEME
} from "../Constants";
import Error from "../components/Error";
import {
  BorderBox,
  Box,
  Button,
  ButtonPrimary,
  FormGroup,
  Heading,
  StyledOcticon,
  TextInput
} from "@primer/components";
import "../styles/authForm.scss";

export default class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      providers: []
    }
    this._renderError = this._renderError.bind(this);
    this._renderProviders = this._renderProviders.bind(this);
  }

  componentDidMount() {
    // If the OAuth2 login encounters an error, the user is redirected to the /signin page with an error
    // Here we display the error and then remove the error query parameter from the location.
    if (this.props.location.state && this.props.location.state.error) {
      setTimeout(() => {
        this.props.history.replace({
          pathname: this.props.location.pathname,
          state: {
            error: this.props.location.state.error
          }
        });
      }, 100);
    }

    BLOGRest.fetchOAuth2Providers().then((providers) => {
      this.setState({providers: providers});
    });
  }

  _renderError() {
    if (this.props.location.state && this.props.location.state.error) {
      return <Error message={this.props.location.state.error} level="error"/>
    }
  }

  _renderProviders() {
    if (this.state.providers) {
      return this.state.providers.map(p => this._renderProvider(p));
    }
  }

  _renderProvider(provider) {
    const href = OAUTH2_AUTHORIZE_URL + provider.toLowerCase()
        + "?redirect_uri=" + OAUTH2_REDIRECT_URL + provider.toLowerCase();
    const providerClass = OAUTH2_PROVIDERS[provider];
    if (providerClass) {
      return <Button key={provider} display="block" variant="small" mt={1}
                     as="a" href={href}>
        <StyledOcticon icon={providerClass.icon} mr={1}/>
        Login with {providerClass.name}
      </Button>;
    } else {
      console.debug(
          "No provider configured in the frontend for id= " + provider);
    }
  }

  render() {
    if (this.props.authenticated) {
      return <Redirect to={{
        pathname: "/",
        state: {from: this.props.location}
      }}/>;
    }
    return (
        <Box mx="auto" mt={3} p={3} className="auth-form">
          <Heading fontWeight="normal" as="h1">Sign in</Heading>
          {this._renderError()}
          <BorderBox px={3} py={1} as="main"
                     bg="canvas"
                     boxShadow={PREFERED_THEME.shadows.medium}>
            <FormGroup>
              <FormGroup.Label htmlFor="txtUsername">Username or email
                address</FormGroup.Label>
              <TextInput block backgroundColor="white" variant="small"
                         id="txtUsername"/>
            </FormGroup>

            <FormGroup>
              <FormGroup.Label htmlFor="txtPassword">Password</FormGroup.Label>
              <TextInput block backgroundColor="white" variant="small"
                         id="txtPassword" type="password"/>
            </FormGroup>

            <ButtonPrimary mb={1} display="block" width="100%">Sign
              in</ButtonPrimary>
            {this._renderProviders()}
          </BorderBox>
        </Box>
    );
  }
}