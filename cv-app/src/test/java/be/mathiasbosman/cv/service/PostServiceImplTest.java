package be.mathiasbosman.cv.service;

import static org.assertj.core.api.Assertions.assertThat;

import be.mathiasbosman.cv.AbstractIntegrationTest;
import be.mathiasbosman.cv.dto.PostContentDto;
import be.mathiasbosman.cv.entity.Post;
import be.mathiasbosman.cv.entity.User;
import be.mathiasbosman.cv.fixtures.PostFixture;
import be.mathiasbosman.cv.fixtures.UserFixture;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

public class PostServiceImplTest extends AbstractIntegrationTest {

  @Autowired
  private PostService postService;

  @Test
  public void delete() {
    User u = create(UserFixture.newUser("john"));
    Post p = create(PostFixture.newPost(u));
    assertThat(p.isDeleted()).isFalse();
    postService.delete(p.getId());
    assertThat(p.isDeleted()).isTrue();
  }

  @Test
  public void validate() {
    assertThat(postService.validate(new PostContentDto("subject", "body"))).isTrue();
    assertThat(postService.validate(new PostContentDto("", "body"))).isFalse();
    assertThat(postService.validate(new PostContentDto("subject", ""))).isFalse();
    assertThat(postService.validate(new PostContentDto("", ""))).isFalse();
    assertThat(postService.validate(new PostContentDto(null, "body"))).isFalse();
    assertThat(postService.validate(new PostContentDto("subject", null))).isFalse();
    assertThat(postService.validate(new PostContentDto(null, null))).isFalse();
  }
}
