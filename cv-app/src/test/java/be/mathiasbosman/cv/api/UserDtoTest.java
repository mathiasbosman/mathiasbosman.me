package be.mathiasbosman.cv.api;

import static org.assertj.core.api.Assertions.assertThat;

import be.mathiasbosman.cv.dto.UserDto;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.junit.jupiter.api.Test;

public class UserDtoTest extends AbstractJsonMapperTest{

  @Test
  @Override
  void serializeDeserializeTest() throws JsonProcessingException {
    UserDto user = new UserDto(1, "john@web.com");
    String json = jsonMapper().writeValueAsString(user);
    assertThat(json).isEqualTo("{\"email\":\"john@web.com\",\"userId\":1}");
  }
}
