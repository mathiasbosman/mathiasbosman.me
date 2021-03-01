package be.mathiasbosman.cv.api;

import be.mathiasbosman.cv.dto.UserDto;
import be.mathiasbosman.cv.entity.OAuth2Identifier;
import be.mathiasbosman.cv.oauth2.OAuth2Attribute;
import be.mathiasbosman.cv.oauth2.OAuth2Provider;
import be.mathiasbosman.cv.oauth2.OAuth2Service;
import be.mathiasbosman.cv.service.UserService;
import be.mathiasbosman.cv.util.WebUtils;
import java.util.Set;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/oauth2")
public class AuthController extends UserAwareController{

  private final OAuth2Service oAuth2Service;

  public AuthController(OAuth2Service oAuth2Service, UserService userService) {
    super(userService);
    this.oAuth2Service = oAuth2Service;
  }

  @GetMapping("/providers")
  public Set<OAuth2Provider> providers() {
    return oAuth2Service.getRegisteredProviders();
  }

  @GetMapping("/user")
  public UserDto getUser(@AuthenticationPrincipal OAuth2User user) {
    if (user == null) {
      return null;
    }
    return getUser();
  }
}
