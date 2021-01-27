package be.mathiasbosman.cv.entity;

import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;

@MappedSuperclass
public abstract class Entity<K> implements Identifiable<K>{
  @Column(name = "created")
  private LocalDate created;
  @Column(name = "updated")
  private LocalDate updated;

  @PrePersist
  void prePersist() {
    created = LocalDate.now();
    updated = created;
  }

  @PreUpdate
  void preUpdate() {
    updated = LocalDate.now();
  }

  public LocalDate getCreated() {
    return created;
  }

  public LocalDate getUpdated() {
    return updated;
  }
}
