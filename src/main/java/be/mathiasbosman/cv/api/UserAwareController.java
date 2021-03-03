package be.mathiasbosman.cv.api;

import be.mathiasbosman.cv.dto.UserDto;
import be.mathiasbosman.cv.service.UserService;
import be.mathiasbosman.cv.util.WebUtils;

public abstract class UserAwareController extends AbstractAppControler {

  private final UserService userService;

  protected UserAwareController(UserService userService) {
    this.userService = userService;
  }

  UserDto getUser() {
    return userService.getUser(WebUtils.token());
  }
}
