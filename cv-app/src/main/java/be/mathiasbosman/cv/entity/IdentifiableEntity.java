package be.mathiasbosman.cv.entity;

import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;

@MappedSuperclass
public abstract class IdentifiableEntity<K> implements Identifiable<K> {

  @Column(name = "created")
  private LocalDateTime created;
  @Column(name = "updated")
  private LocalDateTime updated;

  @PrePersist
  void prePersist() {
    created = LocalDateTime.now();
    updated = created;
  }

  @PreUpdate
  void preUpdate() {
    updated = LocalDateTime.now();
  }

  public LocalDateTime getCreated() {
    return created;
  }

  public LocalDateTime getUpdated() {
    return updated;
  }
}
