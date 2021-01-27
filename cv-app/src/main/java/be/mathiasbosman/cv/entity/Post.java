package be.mathiasbosman.cv.entity;

import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@javax.persistence.Entity
@Table(name = "posts")
public class Post extends Entity<Integer> {

  @Id
  @SequenceGenerator(name = "post_gen", sequenceName = "posts_seq", allocationSize = 1)
  @GeneratedValue(generator = "post_gen")
  private Integer id;
  @Column(name = "poster_id")
  private int posterId;
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
  public Integer getId() {
    return id;
  }

  public int getPosterId() {
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
}
