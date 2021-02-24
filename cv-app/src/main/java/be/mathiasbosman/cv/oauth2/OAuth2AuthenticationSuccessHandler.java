package be.mathiasbosman.cv.oauth2;

import be.mathiasbosman.cv.entity.OAuth2Identifier;
import be.mathiasbosman.cv.entity.User;
import be.mathiasbosman.cv.service.UserService;
import be.mathiasbosman.cv.util.WebUtils;
import java.io.IOException;
import java.util.Optional;
import java.util.UUID;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

@Component
public class OAuth2AuthenticationSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

  private static final Logger logger = LoggerFactory
      .getLogger(OAuth2AuthenticationSuccessHandler.class);

  private final UserService userService;
  private final OAuth2Service oAuth2Service;
  private final HttpCookieOAuth2AuthorizationRequestRepository cookieOAuth2AuthorizationRequestRepository;

  OAuth2AuthenticationSuccessHandler(UserService userService, OAuth2Service oAuth2Service,
      HttpCookieOAuth2AuthorizationRequestRepository cookieOAuth2AuthorizationRequestRepository) {
    this.userService = userService;
    this.oAuth2Service = oAuth2Service;
    this.cookieOAuth2AuthorizationRequestRepository = cookieOAuth2AuthorizationRequestRepository;
  }

  @Override
  public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
      Authentication authentication) throws IOException {
    String targetUrl = determineTargetUrl(request, response, authentication);
    if (response.isCommitted()) {
      logger.debug("Response has already been committed. Unable to redirect to {}", targetUrl);
      return;
    }
    OAuth2AuthenticationToken token = WebUtils.token();
    final String uid = oAuth2Service.getAttribute(token, OAuth2Attribute.UID).toString();
    if (uid == null) {
      throw new IllegalStateException("A unique identifier has to be provided.");
    }
    OAuth2Identifier identifier = oAuth2Service.findIdentifier(token, uid);
    UUID userId;
    if (identifier != null) {
      userId = identifier.getUserId();
    } else {
      // create user & identifier
      User user = new User(
          oAuth2Service.getStringAttribute(token, OAuth2Attribute.USERNAME),
          oAuth2Service.getStringAttribute(token, OAuth2Attribute.NAME),
          oAuth2Service.getStringAttribute(token, OAuth2Attribute.EMAIL)
      );
      OAuth2Identifier newIdentifier = oAuth2Service
          .createIdentifier(user, uid, oAuth2Service.getProvider(token));
      userId = newIdentifier.getUserId();
    }
    userService.login(userId);
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
