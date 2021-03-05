package be.mathiasbosman.cv.service;

import static org.assertj.core.api.Assertions.assertThat;

import be.mathiasbosman.cv.AbstractIntegrationTest;
import be.mathiasbosman.cv.entity.OAuth2Identifier;
import be.mathiasbosman.cv.entity.User;
import be.mathiasbosman.cv.fixtures.UserFixture;
import be.mathiasbosman.cv.oauth2.OAuth2Attribute;
import be.mathiasbosman.cv.oauth2.OAuth2Provider;
import be.mathiasbosman.cv.oauth2.OAuth2Service;
import java.util.Collection;
import java.util.Map;
import java.util.Set;
import java.util.UUID;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.user.OAuth2User;

public class OAuth2ServiceImplTest extends AbstractIntegrationTest {

  @Autowired
  OAuth2Service oAuth2Service;


  private OAuth2AuthenticationToken mockToken(String uid) {
    String uidAttribute = uid != null ? uid : UUID.randomUUID().toString();
    OAuth2User principal = new OAuth2User() {
      @Override
      public Map<String, Object> getAttributes() {
        return Map.of(
            "name", "John Doe",
            "id", uidAttribute
        );
      }

      @Override
      public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
      }

      @Override
      public String getName() {
        return null;
      }
    };

    return new OAuth2AuthenticationToken(principal, null,
        OAuth2Provider.GITHUB.getRegistrationId());
  }

  @Test
  void getAttributeKey() {
    assertThat(oAuth2Service.getAttributeKey(OAuth2Provider.GITHUB, OAuth2Attribute.NAME))
        .isNotEmpty();
  }

  @Test
  void getProvider() {
    assertThat(oAuth2Service.getProvider(mockToken(null))).isEqualTo(OAuth2Provider.GITHUB);
  }

  @Test
  void getStringAttribute() {
    assertThat(oAuth2Service.getAttribute(mockToken(null), OAuth2Attribute.NAME))
        .isEqualTo("John Doe");
  }

  @Test
  void getRegisteredProviders() {
    Set<OAuth2Provider> registeredProviders = oAuth2Service.getRegisteredProviders();
    assertThat(registeredProviders).containsExactly(OAuth2Provider.GITHUB);
  }

  @Test
  void createIdentifier() {
    assertThat(oAuth2Service.createIdentifier(mockToken(null), UUID.randomUUID())).isNotNull();
  }

  @Test
  void findIdentifier() {
    User user = create(UserFixture.newUser("johnDoe"));
    store(new OAuth2Identifier(OAuth2Provider.GITHUB, "123", user.getId()));
    assertThat(oAuth2Service.findIdentifier(mockToken("123")).getUserId()).isEqualTo(user.getId());
  }
}
