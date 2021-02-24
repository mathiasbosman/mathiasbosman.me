package be.mathiasbosman.cv.repo;

import static org.assertj.core.api.Assertions.assertThat;

import be.mathiasbosman.cv.AbstractIntegrationTest;
import be.mathiasbosman.cv.entity.Post;
import be.mathiasbosman.cv.entity.User;
import be.mathiasbosman.cv.fixtures.UserFixture;
import java.time.LocalDate;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

class PostRepositoryTest extends AbstractIntegrationTest {
  @Autowired
  private PostRepository repository;

  @Test
  void findAllDefault() {
    assertThat(repository.findAll(false)).isEmpty();
    User user = create(UserFixture.newUser("johnDoe"));
    LocalDate date1 = LocalDate.now();
    Post post1 = new Post(user, false, date1, "subject1", "body1");
    repository.save(post1);
    assertThat(repository.findAll(false)).containsExactly(post1);
    assertThat(repository.findAll(true)).isEmpty();
    Post post2 = new Post(user, false, date1.plusDays(1), "subject2", "body2");
    repository.save(post2);
    repository.save(new Post(user, true, date1, "subject1", "body1"));
    assertThat(repository.findAll(false)).containsExactly(post2, post1);
  }
}
