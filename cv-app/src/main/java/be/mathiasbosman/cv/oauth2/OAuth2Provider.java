package be.mathiasbosman.cv.oauth2;

import java.util.Arrays;
import java.util.List;

public enum OAuth2Provider {
  FACEBOOK("facebook"),
  GOOGLE("google", OAuth2Attribute.values()),
  GITHUB("github");

  private final String registrationId;
  private final List<OAuth2Attribute> attributeList;

  OAuth2Provider(String registrationId, OAuth2Attribute... attributes) {
    this.registrationId = registrationId;
    this.attributeList = Arrays.asList(attributes);
  }

  public static OAuth2Provider forRegistrationId(String registrationId) {
    for (OAuth2Provider provider : values()) {
      if (provider.name().equalsIgnoreCase(registrationId)) {
        return provider;
      }
    }
    throw new IllegalArgumentException("No provider defined for registration id: " + registrationId);
  }

  public String getRegistrationId() {
    return registrationId;
  }

  public List<OAuth2Attribute> getAttributeList() {
    return attributeList;
  }
}
