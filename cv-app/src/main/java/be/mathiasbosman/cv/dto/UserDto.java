package be.mathiasbosman.cv.dto;

public class UserDto {
  private final int userId;
  private final String email;

  public UserDto(int userId, String email) {
    this.userId = userId;
    this.email = email;
  }

  public int getUserId() {
    return userId;
  }

  public String getEmail() {
    return email;
  }
}
