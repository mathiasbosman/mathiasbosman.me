package be.mathiasbosman.cv.repo;

import be.mathiasbosman.cv.entity.User;

public interface UserRepository extends EntityRepository<User> {

  User getByEmail(String email);

  boolean existsByEmail(String email);

  boolean existsByUsername(String username);
}
