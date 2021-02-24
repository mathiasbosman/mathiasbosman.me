package be.mathiasbosman.cv.service;

import be.mathiasbosman.cv.dto.UserDto;
import java.util.UUID;

public interface UserService {

  UserDto getUser(UUID posterId);

  UserDto getUserByEmail(String email);
}
