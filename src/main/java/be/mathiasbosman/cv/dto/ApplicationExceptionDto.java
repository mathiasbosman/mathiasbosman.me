package be.mathiasbosman.cv.dto;

import be.mathiasbosman.cv.util.ApplicationException;

public class ApplicationExceptionDto {

  private final String code;
  private final String message;

  public ApplicationExceptionDto(ApplicationException e) {
    this.code = e.getError().getCode();
    this.message = e.getMessage();
  }

  public String getCode() {
    return code;
  }

  public String getMessage() {
    return message;
  }
}
