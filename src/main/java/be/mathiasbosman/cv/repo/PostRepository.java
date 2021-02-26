package be.mathiasbosman.cv.repo;

import be.mathiasbosman.cv.entity.Post;
import java.util.List;
import java.util.UUID;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PostRepository extends EntityRepository<Post> {

  List<Post> findAllByPosterIdAndDeleted(UUID posterId, boolean deleted);

  @Query("select p from Post p where p.deleted = :deleted order by p.created desc")
  List<Post> findAll(@Param("deleted") boolean deleted);
}
