package be.mathiasbosman.cv.entity;

import be.mathiasbosman.cv.oauth2.OAuth2Provider;
import java.util.UUID;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "oauth2_identifiers")
public class OAuth2Identifier extends IdentifiableEntity<UUID> {

  @Id
  @GeneratedValue
  private UUID id;
  @Enumerated(EnumType.STRING)
  private OAuth2Provider provider;
  private String uid;
  private UUID userId;

  protected OAuth2Identifier() {
  }

  public OAuth2Identifier(OAuth2Provider provider, String uid, UUID userId) {
    this.provider = provider;
    this.uid = uid;
    this.userId = userId;
  }

  @Override
  public UUID getId() {
    return null;
  }

  public OAuth2Provider getProvider() {
    return provider;
  }

  public String getUid() {
    return uid;
  }

  public UUID getUserId() {
    return userId;
  }
}
