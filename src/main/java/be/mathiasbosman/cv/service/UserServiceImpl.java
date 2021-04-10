package be.mathiasbosman.cv.service;

import be.mathiasbosman.cv.dto.UserDto;
import be.mathiasbosman.cv.entity.OAuth2Identifier;
import be.mathiasbosman.cv.entity.User;
import be.mathiasbosman.cv.oauth2.OAuth2Attribute;
import be.mathiasbosman.cv.oauth2.OAuth2Service;
import be.mathiasbosman.cv.repo.UserRepository;
import be.mathiasbosman.cv.util.ApplicationError;
import be.mathiasbosman.cv.util.ApplicationException;
import java.time.LocalDateTime;
import java.util.UUID;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(propagation = Propagation.NEVER)
public class UserServiceImpl implements UserService {

  private static final Logger log = LoggerFactory.getLogger(UserServiceImpl.class);
  private final UserRepository userRepository;
  private final OAuth2Service oAuth2Service;

  public UserServiceImpl(UserRepository userRepository, OAuth2Service oAuth2Service) {
    this.userRepository = userRepository;
    this.oAuth2Service = oAuth2Service;
  }

  @Override
  @Transactional(readOnly = true)
  public UserDto getUser(UUID posterId) {
    return getUserDto(userRepository.getOne(posterId));
  }

  @Override
  @Transactional(readOnly = true)
  public UserDto getUser(OAuth2AuthenticationToken token) {
    if (token == null) {
      return null;
    }
    OAuth2Identifier identifier = oAuth2Service.findIdentifier(token);
    if (identifier != null) {
      return getUser(identifier.getUserId());
    }
    String email = oAuth2Service.getAttribute(token, OAuth2Attribute.EMAIL);
    return existsWithEmail(email) ? getUserByEmail(email) : null;
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

  private boolean existsWithUsername(String username) {
    return userRepository.existsByUsername(username);
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

  @Override
  @Transactional
  public OAuth2Identifier linkOrCreateUser(OAuth2AuthenticationToken token, boolean shouldExist,
      boolean link) {
    UserDto user = getUser(token);
    if (user == null) {
      if (shouldExist) {
        log.warn("OAuth2 token [{}] has no user and should exist due to configuration",
            token.getName());
        return null;
      }
      log.debug("Creating new user from OAuth2 token [{}]", token.getName());
      String validUsername;
      String usernameFromToken = oAuth2Service.getAttribute(token, OAuth2Attribute.USERNAME);
      String emailFromToken = oAuth2Service.getAttribute(token, OAuth2Attribute.EMAIL);
      if (existsWithEmail(emailFromToken)) {
        throw new ApplicationException(ApplicationError.AUTH_USER_MAIL_KNOWN);
      }
      if (existsWithUsername(usernameFromToken)) {
        log.debug("Username [{}] already exists, creating new one", usernameFromToken);
        validUsername = usernameFromToken + "_" +
            oAuth2Service.getAttribute(token, OAuth2Attribute.UID).substring(0, 5);
      } else {
        validUsername = usernameFromToken;
      }
      UserDto newUser = save(new User(
          validUsername,
          oAuth2Service.getAttribute(token, OAuth2Attribute.NAME),
          emailFromToken
      ));
      return oAuth2Service.createIdentifier(token, newUser.getUserId());
    }

    OAuth2Identifier identifier = oAuth2Service.findIdentifier(token);
    return identifier != null ? identifier :
        link ? oAuth2Service.createIdentifier(token, user.getUserId()) : null;
  }

  private UserDto getUserDto(User u) {
    return u != null ? new UserDto(u.getId(), u.getEmail(), u.getName(), u.getUsername())
        : null;
  }
}
