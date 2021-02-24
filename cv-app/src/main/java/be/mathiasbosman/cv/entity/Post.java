package be.mathiasbosman.cv.entity;

import java.time.LocalDate;
import java.util.UUID;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "posts")
public class Post extends IdentifiableEntity<UUID> {

  @Id
  @GeneratedValue
  private UUID id;
  @Column(name = "poster_id")
  private UUID posterId;
  @Column(name = "is_deleted")
  private boolean deleted;
  private LocalDate postdate;
  private String subject;
  private String body;

  protected Post() {
  }

  public Post(User poster, boolean deleted, LocalDate postdate, String subject, String body) {
    this.posterId = poster.getId();
    this.deleted = deleted;
    this.postdate = postdate;
    this.subject = subject;
    this.body = body;
  }

  @Override
  public UUID getId() {
    return id;
  }

  public UUID getPosterId() {
    return posterId;
  }

  public boolean isDeleted() {
    return deleted;
  }

  public String getSubject() {
    return subject;
  }

  public String getBody() {
    return body;
  }

  public LocalDate getPostdate() {
    return postdate;
  }

  public void setDeleted(boolean deleted) {
    this.deleted = deleted;
  }
}
