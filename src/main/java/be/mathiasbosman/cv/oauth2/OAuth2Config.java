package be.mathiasbosman.cv.oauth2;

import java.util.Map;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties("oauth2")
public class OAuth2Config {

  /**
   * If users need to be known in the local database before they are allowed to login
   */
  private boolean usersShouldBeKnown;

  private Map<OAuth2Provider, Map<OAuth2Attribute, String>> providerAttributes;

  public Map<OAuth2Provider, Map<OAuth2Attribute, String>> getProviderAttributes() {
    return providerAttributes;
  }

  public void setProviderAttributes(
      Map<OAuth2Provider, Map<OAuth2Attribute, String>> providerAttributes) {
    this.providerAttributes = providerAttributes;
  }

  public Map<OAuth2Attribute, String> getAttributes(OAuth2Provider provider) {
    return providerAttributes.get(provider);
  }

  public boolean isUsersShouldBeKnown() {
    return usersShouldBeKnown;
  }

  public void setUsersShouldBeKnown(boolean usersShouldBeKnown) {
    this.usersShouldBeKnown = usersShouldBeKnown;
  }
}