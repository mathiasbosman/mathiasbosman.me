package be.mathiasbosman.blog.repo;

import be.mathiasbosman.blog.entity.Post;
import java.util.List;

public interface PostRepository extends BlogRepository<Post> {

  List<Post> findAllByPosterId(int posterId);

  List<Post> findAllByDeletedFalseOrderByCreatedDesc();
}
