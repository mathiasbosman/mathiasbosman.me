package be.mathiasbosman.cv.repo;

import be.mathiasbosman.cv.entity.Entity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface EntityRepository<E extends Entity<Integer>> extends JpaRepository<E, Integer> {

  static <E extends Entity<Integer>> E getById(EntityRepository<E> repository, int id) {
    return repository.findById(id).orElseThrow(
        () -> new IllegalArgumentException(
            "No results for id=" + id + " and repo: " + repository.getClass()));
  }
}
