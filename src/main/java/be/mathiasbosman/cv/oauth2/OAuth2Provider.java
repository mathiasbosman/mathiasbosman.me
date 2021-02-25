package be.mathiasbosman.cv.oauth2;

public enum OAuth2Provider {

  GOOGLE,
  GITHUB;

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
    return name().toLowerCase();
  }

  @Override
  public String toString() {
    return name().toUpperCase();
  }
}
