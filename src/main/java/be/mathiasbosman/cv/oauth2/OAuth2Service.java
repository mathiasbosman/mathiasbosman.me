package be.mathiasbosman.cv.oauth2;

import be.mathiasbosman.cv.entity.OAuth2Identifier;
import be.mathiasbosman.cv.entity.User;
import java.util.Map;
import java.util.Set;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;

public interface OAuth2Service {

  OAuth2Provider getProvider(OAuth2AuthenticationToken token);

  Object getAttribute(OAuth2AuthenticationToken authentication, OAuth2Attribute auth2Attribute);

  String getStringAttribute(OAuth2AuthenticationToken token, OAuth2Attribute attribute);

  Map<String, Object> getAttributes(OAuth2AuthenticationToken token);

  Set<OAuth2Provider> getRegisteredProviders();

  OAuth2Identifier findIdentifier(OAuth2AuthenticationToken token, String uid);

  OAuth2Identifier createIdentifier(User user, String uid, OAuth2Provider provider);
}
