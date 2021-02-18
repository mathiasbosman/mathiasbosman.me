package be.mathiasbosman.cv.oauth2;

import java.util.Map;
import java.util.Set;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;

public interface OAuth2Service {

  Object getAttribute(OAuth2AuthenticationToken authentication, OAuth2Attribute auth2Attribute);

  String getStringAttribute(OAuth2AuthenticationToken token, OAuth2Attribute attribute);

  Map<String, Object> getAttributes(OAuth2AuthenticationToken token);

  Set<OAuth2Provider> getRegisteredProviders();

}
