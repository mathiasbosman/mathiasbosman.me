package be.mathiasbosman.cv.repo;

import be.mathiasbosman.cv.entity.IdentifiableEntity;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface EntityRepository<E extends IdentifiableEntity<UUID>> extends
    JpaRepository<E, UUID> {

  static <E extends IdentifiableEntity<UUID>> E getById(EntityRepository<E> repository, UUID id) {
    return repository.findById(id).orElseThrow(
        () -> new IllegalArgumentException(
            "No results for id=" + id + " and repo: " + repository.getClass()));
  }
}
