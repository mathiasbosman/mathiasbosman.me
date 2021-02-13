package be.mathiasbosman.cv.service;

import be.mathiasbosman.cv.dto.UserDto;
import be.mathiasbosman.cv.entity.User;
import be.mathiasbosman.cv.repo.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{

  private final UserRepository userRepository;

  public UserServiceImpl(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  @Override
  public UserDto getUserByEmail(String email) {
    return getUserDto(userRepository.findByEmail(email));
  }

  private UserDto getUserDto(User u) {
    return new UserDto(u.getId(), u.getEmail());
  }
}
