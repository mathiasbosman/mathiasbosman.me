package be.mathiasbosman.cv.util;

import org.springframework.http.HttpStatus;

public enum ApplicationError {
  AUTH_USER_NOT_REGISTERED("auth-001"),
  AUTH_USER_MAIL_KNOWN("auth-002");

  private final String code;
  private final HttpStatus httpStatus;

  ApplicationError(String code, HttpStatus httpStatus) {
    this.code = code;
    this.httpStatus = httpStatus;
  }

  ApplicationError(String code) {
    this(code, HttpStatus.FORBIDDEN);
  }

  public String getCode() {
    return code;
  }

  public HttpStatus getHttpStatus() {
    return httpStatus;
  }
}
