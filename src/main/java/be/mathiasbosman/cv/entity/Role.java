package be.mathiasbosman.cv.entity;

import java.util.UUID;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "roles")
public class Role extends IdentifiableEntity<UUID> {

  @Id
  @GeneratedValue
  private UUID id;
  private String code;
  private String description;
  private int level;

  protected Role() {
  }

  @Override
  public UUID getId() {
    return id;
  }

  public String getCode() {
    return code;
  }

  public String getDescription() {
    return description;
  }

  public int getLevel() {
    return level;
  }
}
