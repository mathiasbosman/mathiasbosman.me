package be.mathiasbosman.cv.entity;

import java.time.LocalDateTime;
import java.util.UUID;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User extends IdentifiableEntity<UUID> {

  @Id
  @GeneratedValue
  private UUID id;
  private String username;
  @Column(name = "display_name")
  private String name;
  private String email;
  private LocalDateTime lastLogin;
  private UUID roleId;

  protected User() {
  }

  public User(String username, String name, String email) {
    this.username = username;
    this.name = name;
    this.email = email;
  }

  @Override
  public UUID getId() {
    return id;
  }

  public String getUsername() {
    return username;
  }

  public String getName() {
    return name;
  }

  public String getEmail() {
    return email;
  }

  public LocalDateTime getLastLogin() {
    return lastLogin;
  }

  public void setLastLogin(LocalDateTime lastLogin) {
    this.lastLogin = lastLogin;
  }

  public UUID getRoleId() {
    return roleId;
  }

}
