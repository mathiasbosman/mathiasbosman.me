package be.mathiasbosman.cv.dto;

import org.springframework.util.StringUtils;

public class PostContentDto {

  private final String subject;
  private final String excerpt;
  private final String body;

  public PostContentDto(String subject, String excerpt, String body) {
    this.subject = StringUtils.trimWhitespace(subject);
    this.excerpt = excerpt;
    this.body = body;
  }

  public PostContentDto(String subject, String body) {
    this(subject, null, body);
  }

  public String getSubject() {
    return subject;
  }

  public String getExcerpt() {
    return excerpt;
  }

  public String getBody() {
    return body;
  }
}
