package be.mathiasbosman.cv.service;

import be.mathiasbosman.cv.dto.UserDto;

public interface UserService {

  UserDto getUserByEmail(String email);
}
