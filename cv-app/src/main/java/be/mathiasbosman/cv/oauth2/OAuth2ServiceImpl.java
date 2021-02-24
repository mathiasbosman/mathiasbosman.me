package be.mathiasbosman.cv.oauth2;

import be.mathiasbosman.cv.dto.UserDto;
import be.mathiasbosman.cv.entity.OAuth2Identifier;
import be.mathiasbosman.cv.entity.User;
import be.mathiasbosman.cv.repo.OAuth2IdRepository;
import be.mathiasbosman.cv.service.UserService;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

@Service
public class OAuth2ServiceImpl implements OAuth2Service {

  private final ClientRegistrationRepository clientRegistrationRepository;
  private final OAuth2IdRepository oAuth2IdRepository;
  private final UserService userService;

  public OAuth2ServiceImpl(ClientRegistrationRepository clientRegistrationRepository,
      OAuth2IdRepository oAuth2IdRepository,
      UserService userService) {
    this.clientRegistrationRepository = clientRegistrationRepository;
    this.oAuth2IdRepository = oAuth2IdRepository;
    this.userService = userService;
  }

  @Override
  public String getStringAttribute(OAuth2AuthenticationToken token, OAuth2Attribute attribute) {
    return (String) getAttribute(token, attribute);
  }

  @Override
  public OAuth2Provider getProvider(OAuth2AuthenticationToken token) {
    return OAuth2Provider.forRegistrationId(token.getAuthorizedClientRegistrationId());
  }

  @Override
  public Object getAttribute(OAuth2AuthenticationToken token, OAuth2Attribute attribute) {
    String attributeKey = getProvider(token).getAttributesMap().get(attribute);
    if (StringUtils.hasLength(attributeKey)) {
      return token.getPrincipal().getAttributes().get(attributeKey);
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

  @Override
  @Transactional(readOnly = true)
  public OAuth2Identifier findIdentifier(OAuth2AuthenticationToken token, String uid) {
    return oAuth2IdRepository.getByUidAndProvider(uid, getProvider(token));
  }

  @Override
  @Transactional
  public OAuth2Identifier createIdentifier(User user, String uid, OAuth2Provider provider) {
    UserDto userDto = userService.save(user);
    return oAuth2IdRepository.save(new OAuth2Identifier(provider, uid, userDto.getUserId()));
  }
}
