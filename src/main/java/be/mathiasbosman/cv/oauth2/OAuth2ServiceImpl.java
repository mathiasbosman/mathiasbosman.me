package be.mathiasbosman.cv.oauth2;

import be.mathiasbosman.cv.entity.OAuth2Identifier;
import be.mathiasbosman.cv.repo.OAuth2IdRepository;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.UUID;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;

@Service
public class OAuth2ServiceImpl implements OAuth2Service {

  private final ClientRegistrationRepository clientRegistrationRepository;
  private final OAuth2IdRepository oAuth2IdRepository;
  private final OAuth2Config oAuth2Config;

  public OAuth2ServiceImpl(ClientRegistrationRepository clientRegistrationRepository,
      OAuth2IdRepository oAuth2IdRepository, OAuth2Config oAuth2Config) {
    this.clientRegistrationRepository = clientRegistrationRepository;
    this.oAuth2IdRepository = oAuth2IdRepository;
    this.oAuth2Config = oAuth2Config;
  }

  @Override
  public OAuth2Provider getProvider(OAuth2AuthenticationToken token) {
    return OAuth2Provider.forRegistrationId(token.getAuthorizedClientRegistrationId());
  }

  @Override
  public String getAttribute(OAuth2AuthenticationToken token, OAuth2Attribute attribute) {
    String attributeKey = getAttributeKey(getProvider(token), attribute);
    if (StringUtils.hasLength(attributeKey)) {
      Map<String, Object> attributes = token.getPrincipal().getAttributes();
      return CollectionUtils.isEmpty(attributes) ? null : (String) attributes.get(attributeKey);
    }
    return null;
  }

  @Override
  public String getAttributeKey(OAuth2Provider provider, OAuth2Attribute attribute) {
    Map<OAuth2Attribute, String> attributesMap = oAuth2Config.getAttributes(provider);
    if (!CollectionUtils.isEmpty(attributesMap)) {
      return attributesMap.getOrDefault(attribute, null);
    }
    return null;
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

  @Override
  @Transactional(readOnly = true)
  public OAuth2Identifier findIdentifier(OAuth2AuthenticationToken token) {
    String uid = getAttribute(token, OAuth2Attribute.UID);
    return oAuth2IdRepository.getByUidAndProvider(uid, getProvider(token));
  }

  @Override
  @Transactional
  public OAuth2Identifier createIdentifier(OAuth2AuthenticationToken token, UUID userId) {
    return oAuth2IdRepository.save(
        new OAuth2Identifier(getProvider(token), getAttribute(token, OAuth2Attribute.UID), userId));
  }
}
