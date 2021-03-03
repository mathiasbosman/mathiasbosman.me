package be.mathiasbosman.cv.oauth2;

import be.mathiasbosman.cv.entity.OAuth2Identifier;
import be.mathiasbosman.cv.service.UserService;
import be.mathiasbosman.cv.util.ApplicationException;
import be.mathiasbosman.cv.util.WebUtils;
import java.io.IOException;
import java.util.Optional;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class OAuth2AuthenticationSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

  private static final Logger logger = LoggerFactory
      .getLogger(OAuth2AuthenticationSuccessHandler.class);

  private final UserService userService;
  private final OAuth2Config oAuth2Config;
  private final HttpCookieOAuth2AuthorizationRequestRepository cookieOAuth2AuthorizationRequestRepository;

  OAuth2AuthenticationSuccessHandler(UserService userService, OAuth2Config oAuth2Config,
      HttpCookieOAuth2AuthorizationRequestRepository cookieOAuth2AuthorizationRequestRepository) {
    this.userService = userService;
    this.oAuth2Config = oAuth2Config;
    this.cookieOAuth2AuthorizationRequestRepository = cookieOAuth2AuthorizationRequestRepository;
  }

  @Override
  @Transactional
  public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
      Authentication authentication) throws IOException {
    String targetUrl = determineTargetUrl(request, response, authentication);
    if (response.isCommitted()) {
      logger.debug("Response has already been committed. Unable to redirect to {}", targetUrl);
      return;
    }
    OAuth2AuthenticationToken token = WebUtils.token();
    if (token == null) {
      throw new IllegalStateException("A token has to be provided");
    }
    OAuth2Identifier identifier = userService
        .linkOrCreateUser(token, oAuth2Config.isUsersShouldBeKnown(), true);
    if (identifier == null) {
      logger.debug("No OAuth2Identifier was created for " + token.getPrincipal());
      if (oAuth2Config.isUsersShouldBeKnown()) {
        throw new ApplicationException("User is not registered");
      }
      throw new IllegalStateException("OAuth2Identifier was not created.");
    }
    userService.login(identifier.getUserId());
    clearAuthenticationAttributes(request, response);
    getRedirectStrategy().sendRedirect(request, response, targetUrl);
  }

  protected String determineTargetUrl(HttpServletRequest request, HttpServletResponse response,
      Authentication authentication) {
    Optional<String> redirectUri = WebUtils.getCookie(request,
        HttpCookieOAuth2AuthorizationRequestRepository.REDIRECT_URI_PARAM_COOKIE_NAME)
        .map(Cookie::getValue);
    String targetUrl = redirectUri.orElse(getDefaultTargetUrl());
    return UriComponentsBuilder.fromUriString(targetUrl).build().toUriString();
  }

  protected void clearAuthenticationAttributes(HttpServletRequest request,
      HttpServletResponse response) {
    super.clearAuthenticationAttributes(request);
    cookieOAuth2AuthorizationRequestRepository.removeAuthorizationRequestCookies(request, response);
  }
}
