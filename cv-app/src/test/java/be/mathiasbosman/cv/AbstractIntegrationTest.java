package be.mathiasbosman.cv;

import be.mathiasbosman.cv.TestApplication;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.AutoConfigureTestEntityManager;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.TransactionCallback;
import org.springframework.transaction.support.TransactionCallbackWithoutResult;
import org.springframework.transaction.support.TransactionTemplate;

@RunWith(SpringRunner.class)
@Transactional
@AutoConfigureTestEntityManager
@SpringBootTest(classes = {TestApplication.class})
@ActiveProfiles(profiles = "test")
public abstract class AbstractIntegrationTest {

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
