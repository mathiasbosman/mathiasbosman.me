package be.mathiasbosman.cv.oauth2;

import java.util.Map;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.stereotype.Service;

@Service
public class OAuth2ServiceImpl implements OAuth2Service {

  @Override
  public String getStringAttribute(OAuth2AuthenticationToken token, OAuth2Attribute attribute) {
    return (String) getAttribute(AuthUtil.token(), attribute);
  }

  @Override
  public Object getAttribute(OAuth2AuthenticationToken token, OAuth2Attribute attribute) {
    String clientRegistrationId = token.getAuthorizedClientRegistrationId();
    OAuth2Provider oAuth2Provider = OAuth2Provider.forRegistrationId(clientRegistrationId);
    if (oAuth2Provider.getAttributeList().contains(attribute)) {
      return token.getPrincipal().getAttributes().get(attribute.name().toLowerCase());
    }
    return null;
  }

  @Override
  public Map<String, Object> getAttributes(OAuth2AuthenticationToken token) {
    return token.getPrincipal().getAttributes();
  }

}
