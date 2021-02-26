package be.mathiasbosman.cv.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ConfigController {

  @GetMapping("/_ah/warmup")
  public boolean warmup() {
    return true;
  }

}
