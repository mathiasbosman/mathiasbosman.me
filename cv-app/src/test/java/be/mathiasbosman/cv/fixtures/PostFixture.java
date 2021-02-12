package be.mathiasbosman.cv.fixtures;

import be.mathiasbosman.cv.entity.Post;
import be.mathiasbosman.cv.entity.User;
import java.time.LocalDate;

public abstract class PostFixture {

  public static Post newPost(User poster) {
    return new Post(poster, false, LocalDate.now(), "subject", "body");
  }

}
