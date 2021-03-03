package be.mathiasbosman.cv.util;

public class ApplicationException extends RuntimeException {

  public ApplicationException(String s) {
    super(s);
  }

  public ApplicationException(String message, Throwable cause) {
    super(message, cause);
  }

  public ApplicationException(Throwable cause) {
    super(cause);
  }
}
