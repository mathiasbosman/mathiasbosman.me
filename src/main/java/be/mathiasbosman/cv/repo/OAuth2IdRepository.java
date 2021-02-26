package be.mathiasbosman.cv.repo;

import be.mathiasbosman.cv.entity.OAuth2Identifier;
import be.mathiasbosman.cv.oauth2.OAuth2Provider;

public interface OAuth2IdRepository extends EntityRepository<OAuth2Identifier> {

  OAuth2Identifier getByUidAndProvider(String uid, OAuth2Provider provider);
}
