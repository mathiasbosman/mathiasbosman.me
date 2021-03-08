package be.mathiasbosman.cv.dto;

import java.time.LocalDateTime;
import java.util.UUID;

public class PostDto {

  private final UUID id;
  private final UserDto poster;
  private final LocalDateTime postDate;
  private final LocalDateTime updated;
  private final PostContentDto content;

  public PostDto(UUID id, String subject, String excerpt, String body, UserDto poster,
      LocalDateTime postDate,
      LocalDateTime updated) {
    this.id = id;
    this.content = new PostContentDto(subject, excerpt, body);
    this.poster = poster;
    this.postDate = postDate;
    this.updated = updated;
  }

  public UUID getId() {
    return id;
  }

  public PostContentDto getContent() {
    return content;
  }

  public LocalDateTime getPostDate() {
    return postDate;
  }

  public LocalDateTime getUpdated() {
    return updated;
  }

  public UserDto getPoster() {
    return poster;
  }
}
