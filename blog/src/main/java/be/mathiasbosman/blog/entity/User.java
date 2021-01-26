package be.mathiasbosman.blog.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User extends BlogEntity<Integer>{
  @Id
  @SequenceGenerator(name = "user_gen", sequenceName = "users_seq", allocationSize = 1)
  @GeneratedValue(generator = "user_gen")
  private Integer id;
  private String username;
  @Column(name = "first_name")
  private String firstName;
  @Column(name = "last_name")
  private String lastName;

  protected User() {}

  public User(String username, String firstName, String lastName) {
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  @Override
  public Integer getId() {
    return id;
  }

  public String getUsername() {
    return username;
  }

  public String getFirstName() {
    return firstName;
  }

  public String getLastName() {
    return lastName;
  }
}
