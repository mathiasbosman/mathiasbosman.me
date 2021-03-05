package be.mathiasbosman.cv.util;

import org.springframework.http.HttpStatus;

public enum ApplicationError {
  AUTH_USER_NOT_REGISTERED("auth-001", HttpStatus.FORBIDDEN);

  private final String code;
  private final HttpStatus httpStatus;

  ApplicationError(String code, HttpStatus httpStatus) {
    this.code = code;
    this.httpStatus = httpStatus;
  }

  ApplicationError(String code) {
    this(code, HttpStatus.NOT_FOUND);
  }

  public String getCode() {
    return code;
  }

  public HttpStatus getHttpStatus() {
    return httpStatus;
  }
}
