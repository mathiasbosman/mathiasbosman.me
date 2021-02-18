package be.mathiasbosman.cv.api;

import be.mathiasbosman.cv.oauth2.OAuth2Provider;
import be.mathiasbosman.cv.oauth2.OAuth2Service;
import java.util.Map;
import java.util.Set;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/oauth2")
public class AuthController {

  private final OAuth2Service oAuth2Service;

  public AuthController(OAuth2Service oAuth2Service) {
    this.oAuth2Service = oAuth2Service;
  }

  @GetMapping("/providers")
  public Set<OAuth2Provider> providers() {
    return oAuth2Service.getRegisteredProviders();
  }

  @GetMapping("/user")
  public Map<String, Object> getUser(@AuthenticationPrincipal OAuth2User user) {
    return user == null ? null : user.getAttributes();
  }
}
