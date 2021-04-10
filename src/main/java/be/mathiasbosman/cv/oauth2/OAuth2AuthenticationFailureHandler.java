package be.mathiasbosman.cv.oauth2;

import be.mathiasbosman.cv.api.AbstractAppController;
import be.mathiasbosman.cv.util.WebUtils;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

@Component
public class OAuth2AuthenticationFailureHandler extends SimpleUrlAuthenticationFailureHandler {

  private static final Logger log = LoggerFactory
      .getLogger(OAuth2AuthenticationFailureHandler.class);
  final
  HttpCookieOAuth2AuthorizationRequestRepository httpCookieOAuth2AuthorizationRequestRepository;

  public OAuth2AuthenticationFailureHandler(
      HttpCookieOAuth2AuthorizationRequestRepository httpCookieOAuth2AuthorizationRequestRepository) {
    this.httpCookieOAuth2AuthorizationRequestRepository = httpCookieOAuth2AuthorizationRequestRepository;
  }

  @Override
  public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
      AuthenticationException exception) throws IOException, ServletException {
    String targetUrl = WebUtils.getCookie(request,
        HttpCookieOAuth2AuthorizationRequestRepository.REDIRECT_URI_PARAM_COOKIE_NAME)
        .map(Cookie::getValue)
        .orElse((AbstractAppController.PATH_ERROR));
    log.warn(exception.getLocalizedMessage());
    String targetUri = UriComponentsBuilder.fromUriString(targetUrl).build().toUriString();
    httpCookieOAuth2AuthorizationRequestRepository
        .removeAuthorizationRequestCookies(request, response);
    getRedirectStrategy().sendRedirect(request, response, targetUri);
  }
}
