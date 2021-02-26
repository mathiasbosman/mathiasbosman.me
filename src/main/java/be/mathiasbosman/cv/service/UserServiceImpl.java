package be.mathiasbosman.cv.service;

import be.mathiasbosman.cv.dto.UserDto;
import be.mathiasbosman.cv.entity.User;
import be.mathiasbosman.cv.repo.UserRepository;
import java.time.LocalDateTime;
import java.util.UUID;
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
  public UserDto getUser(UUID posterId) {
    return getUserDto(userRepository.getOne(posterId));
  }

  @Override
  @Transactional(readOnly = true)
  public UserDto getUserByEmail(String email) {
    return getUserDto(userRepository.getByEmail(email));
  }

  @Override
  @Transactional(readOnly = true)
  public boolean existsWithEmail(String email) {
    return userRepository.existsByEmail(email);
  }

  @Override
  @Transactional
  public void login(UUID id) {
    User user = userRepository.getOne(id);
    user.setLastLogin(LocalDateTime.now());
  }

  @Override
  @Transactional
  public UserDto save(User user) {
    return getUserDto(userRepository.save(user));
  }

  private UserDto getUserDto(User u) {
    return u != null ? new UserDto(u.getId(), u.getEmail(), u.getName(), u.getUsername())
        : null;
  }
}
