package be.mathiasbosman.cv.dto;

import java.util.UUID;

public class UserDto {

  private final UUID userId;
  private final String email;
  private final String firstName;
  private final String lastName;
  private final String username;

  public UserDto(UUID userId, String email, String firstName, String lastName, String username) {
    this.userId = userId;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
  }

  public UUID getUserId() {
    return userId;
  }

  public String getEmail() {
    return email;
  }

  public String getFirstName() {
    return firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public String getUsername() {
    return username;
  }
}
