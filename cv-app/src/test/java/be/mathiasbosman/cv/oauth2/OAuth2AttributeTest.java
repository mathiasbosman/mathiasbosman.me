package be.mathiasbosman.cv.oauth2;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;

public class OAuth2AttributeTest {

  @Test
  void checkUIDAttributePresence() {
    for (OAuth2Provider value : OAuth2Provider.values()) {
      assertThat(value.getAttributesMap()).containsKey(OAuth2Attribute.UID);
    }
  }
}
