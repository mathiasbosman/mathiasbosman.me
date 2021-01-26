package be.mathiasbosman.blog.repo;

import be.mathiasbosman.blog.entity.BlogEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface BlogRepository<E extends BlogEntity<Integer>> extends JpaRepository<E, Integer> {

  static <E extends BlogEntity<Integer>> E getById(BlogRepository<E> repository, int id) {
    return repository.findById(id).orElseThrow(
        () -> new IllegalArgumentException(
            "No results for id=" + id + " and repo: " + repository.getClass()));
  }
}
