package be.mathiasbosman.blog.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "posts")
public class Post extends BlogEntity<Integer>{
  @Id
  @SequenceGenerator(name = "post_gen", sequenceName = "posts_seq", allocationSize = 1)
  @GeneratedValue(generator = "post_gen")
  private Integer id;
  @Column(name = "poster_id")
  private int posterId;
  @Column(name = "is_deleted")
  private boolean isDeleted;
  private String subject;
  private String body;

  protected Post() {}

  public Post(User poster, String subject, String body) {
    this.posterId = poster.getId();
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
    return isDeleted;
  }

  public String getSubject() {
    return subject;
  }

  public String getBody() {
    return body;
  }
}
