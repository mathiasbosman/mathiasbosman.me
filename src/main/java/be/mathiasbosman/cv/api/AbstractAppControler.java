package be.mathiasbosman.cv.api;

import be.mathiasbosman.cv.util.ApplicationException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

public abstract class AbstractAppControler {

  @ExceptionHandler(ApplicationException.class)
  @ResponseStatus(HttpStatus.BAD_REQUEST)
  public ApplicationException handleApplicationException(ApplicationException e) {
    return e;
  }

}
