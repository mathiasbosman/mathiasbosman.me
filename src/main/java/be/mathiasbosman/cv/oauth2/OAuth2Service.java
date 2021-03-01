package be.mathiasbosman.cv.oauth2;

import be.mathiasbosman.cv.entity.OAuth2Identifier;
import be.mathiasbosman.cv.entity.User;
import java.util.Map;
import java.util.Set;
import java.util.UUID;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;

public interface OAuth2Service {

  OAuth2Provider getProvider(OAuth2AuthenticationToken token);

  String getAttribute(OAuth2AuthenticationToken authentication, OAuth2Attribute auth2Attribute);

  String getAttributeKey(OAuth2Provider provider, OAuth2Attribute attribute);

  Set<OAuth2Provider> getRegisteredProviders();

  OAuth2Identifier findIdentifier(OAuth2AuthenticationToken token);

  OAuth2Identifier createIdentifier(OAuth2AuthenticationToken token, UUID userId);
}
