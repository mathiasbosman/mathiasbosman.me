package be.mathiasbosman.cv.api;

import static org.assertj.core.api.Assertions.assertThat;

import be.mathiasbosman.cv.dto.PostDto;
import com.fasterxml.jackson.core.JsonProcessingException;
import java.time.LocalDate;
import org.junit.jupiter.api.Test;

class PostDtoTestAbstract extends AbstractJsonMapperTest {

  @Test
  @Override
  void serializeDeserializeTest() throws JsonProcessingException {
    PostDto post = new PostDto(0,
        "subject",
        "body",
        null,
        LocalDate.parse("2000-02-03"),
        LocalDate.parse("2000-05-04"));
    String json = jsonMapper().writeValueAsString(post);
    assertThat(json).isEqualTo(
        "{\"content\":{\"body\":\"body\",\"subject\":\"subject\"},\"created\":\"03/02/2000\",\"id\":0,\"updated\":\"04/05/2000\"}");
  }
}
