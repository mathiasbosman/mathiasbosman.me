package be.mathiasbosman.cv.service;

import be.mathiasbosman.cv.dto.UserDto;

public interface UserService {

  UserDto getUser(int posterId);

  UserDto getUserByEmail(String email);
}
