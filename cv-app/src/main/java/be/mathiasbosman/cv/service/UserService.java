package be.mathiasbosman.cv.service;

import be.mathiasbosman.cv.dto.UserDto;
import be.mathiasbosman.cv.entity.User;
import java.util.UUID;

public interface UserService {

  UserDto getUser(UUID posterId);

  UserDto getUserByEmail(String email);

  boolean existsWithEmail(String email);

  void login(UUID id);

  UserDto save(User user);
}
