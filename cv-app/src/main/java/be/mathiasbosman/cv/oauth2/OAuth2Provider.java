package be.mathiasbosman.cv.oauth2;

import be.mathiasbosman.cv.util.WebUtils;
import java.util.Map;

public enum OAuth2Provider {

  GOOGLE("google", WebUtils.openIdAttributesMap),
  GITHUB("github", Map.of(
      OAuth2Attribute.EMAIL, "email",
      OAuth2Attribute.USERNAME, "login",
      OAuth2Attribute.PICTURE, "avatar_url",
      OAuth2Attribute.NAME, "name",
      OAuth2Attribute.UID, "id"
  ));

  private final String registrationId;
  private final Map<OAuth2Attribute, String> attributesMap;

  OAuth2Provider(String registrationId, Map<OAuth2Attribute, String> attributesMap) {
    this.registrationId = registrationId;
    this.attributesMap = attributesMap;
  }

  public static OAuth2Provider forRegistrationId(String registrationId) {
    for (OAuth2Provider provider : values()) {
      if (provider.toString().equalsIgnoreCase(registrationId)) {
        return provider;
      }
    }
    throw new IllegalArgumentException(
        "No provider defined for registration id: " + registrationId);
  }

  public String getRegistrationId() {
    return registrationId;
  }

  public Map<OAuth2Attribute, String> getAttributesMap() {
    return attributesMap;
  }

  @Override
  public String toString() {
    return name().toUpperCase();
  }
}
