package be.mathiasbosman.cv.service;

import be.mathiasbosman.cv.dto.UserDto;
import be.mathiasbosman.cv.entity.User;
import be.mathiasbosman.cv.repo.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(propagation = Propagation.NEVER)
public class UserServiceImpl implements UserService {

  private final UserRepository userRepository;

  public UserServiceImpl(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  @Override
  @Transactional(readOnly = true)
  public UserDto getUser(int posterId) {
    return getUserDto(userRepository.getOne(posterId));
  }

  @Override
  @Transactional(readOnly = true)
  public UserDto getUserByEmail(String email) {
    return getUserDto(userRepository.findByEmail(email));
  }

  private UserDto getUserDto(User u) {
    return u != null ?
        new UserDto(u.getId(), u.getEmail(), u.getFirstName(), u.getLastName(), u.getUsername())
        : null;
  }
}
