package be.mathiasbosman.cv.dto;

import java.util.UUID;

public class UserDto {

  private final UUID userId;
  private final String email;
  private final String name;
  private final String username;

  public UserDto(UUID userId, String email, String name, String username) {
    this.userId = userId;
    this.email = email;
    this.name = name;
    this.username = username;
  }

  public UUID getUserId() {
    return userId;
  }

  public String getEmail() {
    return email;
  }

  public String getName() {
    return name;
  }

  public String getUsername() {
    return username;
  }
}
