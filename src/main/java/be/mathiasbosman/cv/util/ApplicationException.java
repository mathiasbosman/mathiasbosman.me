package be.mathiasbosman.cv.util;

public class ApplicationException extends RuntimeException {

  private final ApplicationError error;

  public ApplicationException(ApplicationError e, Throwable cause) {
    super(e.getCode(), cause);
    this.error = e;
  }

  public ApplicationException(ApplicationError e) {
    this(e, null);
  }

  public ApplicationError getError() {
    return error;
  }
}
