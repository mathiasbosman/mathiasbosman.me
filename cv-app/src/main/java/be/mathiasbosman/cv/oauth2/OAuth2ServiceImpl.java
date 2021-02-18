package be.mathiasbosman.cv.oauth2;

import be.mathiasbosman.cv.util.WebUtils;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.stereotype.Service;

@Service
public class OAuth2ServiceImpl implements OAuth2Service {

  private final ClientRegistrationRepository clientRegistrationRepository;

  public OAuth2ServiceImpl(ClientRegistrationRepository clientRegistrationRepository) {
    this.clientRegistrationRepository = clientRegistrationRepository;
  }

  @Override
  public String getStringAttribute(OAuth2AuthenticationToken token, OAuth2Attribute attribute) {
    return (String) getAttribute(WebUtils.token(), attribute);
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

  @Override
  public Set<OAuth2Provider> getRegisteredProviders() {
    Set<OAuth2Provider> providers = new HashSet<>();
    for (OAuth2Provider provider : OAuth2Provider.values()) {
      ClientRegistration byRegistrationId = clientRegistrationRepository
          .findByRegistrationId(provider.getRegistrationId());
      if (byRegistrationId != null) {
        providers.add(provider);
      }
    }
    return providers;
  }
}
