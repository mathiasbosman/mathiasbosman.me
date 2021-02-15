package be.mathiasbosman.cv.oauth2;

import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;

public abstract class AuthUtil {

  static Authentication authentication() {
    return SecurityContextHolder.getContext().getAuthentication();
  }

  static boolean isAnonymous(Authentication authentication) {
    return authentication instanceof AnonymousAuthenticationToken;
  }

  public static OAuth2AuthenticationToken token() {
    Authentication auth = authentication();
    if (isAnonymous(auth)) {
      throw new IllegalArgumentException("Trying to get token for anonymous authentication.");
    }
    return (OAuth2AuthenticationToken) authentication();
  }
}
