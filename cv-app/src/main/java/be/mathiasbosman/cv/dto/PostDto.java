package be.mathiasbosman.cv.dto;

import java.time.LocalDate;

public class PostDto {
  private final int id;
  private final LocalDate created;
  private final LocalDate updated;
  private final PostContentDto content;

  public PostDto(int id, String subject, String body, LocalDate created,
      LocalDate updated) {
    this.id = id;
    this.content = new PostContentDto(subject, body);
    this.created = created;
    this.updated = updated;
  }

  public int getId() {
    return id;
  }

  public PostContentDto getContent() {
    return content;
  }

  public LocalDate getCreated() {
    return created;
  }

  public LocalDate getUpdated() {
    return updated;
  }
}
