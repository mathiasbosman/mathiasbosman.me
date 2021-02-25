package be.mathiasbosman.cv;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.AutoConfigureTestEntityManager;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.security.test.context.support.WithAnonymousUser;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.TransactionCallback;
import org.springframework.transaction.support.TransactionCallbackWithoutResult;
import org.springframework.transaction.support.TransactionTemplate;

@Transactional
@AutoConfigureTestEntityManager
@WithAnonymousUser
public abstract class AbstractIntegrationTest extends ApplicationTest{

  @Autowired
  private TestEntityManager entityManager;
  @Autowired
  private TransactionTemplate transactionTemplate;

  protected void store(Object entity) {
    @SuppressWarnings("unused")
    Object result = create(entity);
  }

  protected <E> E create(E entity) {
    return entityManager.persist(entity);
  }

  protected <T> T inTx(TransactionCallback<T> callback) {
    return transactionTemplate.execute(callback);
  }

  protected void inTx(TransactionCallbackWithoutResult callback) {
    transactionTemplate.execute(callback);
  }
}
