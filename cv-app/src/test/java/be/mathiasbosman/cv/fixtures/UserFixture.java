package be.mathiasbosman.cv.fixtures;

import be.mathiasbosman.cv.entity.User;

public abstract class UserFixture {

  public static User newUser(String username) {
    return new User(username, username + "_firstName", username + "_lastName");
  }
}
