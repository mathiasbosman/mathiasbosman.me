package be.mathiasbosman.cv.api;

import be.mathiasbosman.cv.dto.ApplicationExceptionDto;
import be.mathiasbosman.cv.util.ApplicationException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public abstract class AbstractAppController {

  public static final String INDEX = "index.html";
  public static final String PATH_ERROR = "/error";


  @ExceptionHandler(ApplicationException.class)
  public ResponseEntity<ApplicationExceptionDto> handleApplicationException(
      ApplicationException e) {
    return new ResponseEntity<>(
        new ApplicationExceptionDto(e),
        e.getError().getHttpStatus()
    );
  }
}
