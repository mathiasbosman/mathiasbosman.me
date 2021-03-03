package be.mathiasbosman.cv.service;

import be.mathiasbosman.cv.dto.UserDto;
import be.mathiasbosman.cv.entity.OAuth2Identifier;
import be.mathiasbosman.cv.entity.User;
import java.util.UUID;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;

public interface UserService {

  UserDto getUser(UUID posterId);

  UserDto getUser(OAuth2AuthenticationToken token);

  UserDto getUserByEmail(String email);

  boolean existsWithEmail(String email);

  void login(UUID id);

  UserDto save(User user);

  OAuth2Identifier linkOrCreateUser(OAuth2AuthenticationToken token, boolean shouldExist,
      boolean link);
}
