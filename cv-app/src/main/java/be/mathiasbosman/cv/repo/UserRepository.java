package be.mathiasbosman.cv.repo;

import be.mathiasbosman.cv.entity.User;
import java.util.List;

public interface UserRepository extends EntityRepository<User> {

  List<User> findAllByUsernameLike(String username);
}
