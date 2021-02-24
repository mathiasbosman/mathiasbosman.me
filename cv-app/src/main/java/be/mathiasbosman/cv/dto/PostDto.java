package be.mathiasbosman.cv.dto;

import java.time.LocalDate;
import java.util.UUID;

public class PostDto {

  private final UUID id;
  private final UserDto poster;
  private final LocalDate created;
  private final LocalDate updated;
  private final PostContentDto content;

  public PostDto(UUID id, String subject, String body, UserDto poster, LocalDate created,
      LocalDate updated) {
    this.id = id;
    this.content = new PostContentDto(subject, body);
    this.poster = poster;
    this.created = created;
    this.updated = updated;
  }

  public UUID getId() {
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

  public UserDto getPoster() {
    return poster;
  }
}
