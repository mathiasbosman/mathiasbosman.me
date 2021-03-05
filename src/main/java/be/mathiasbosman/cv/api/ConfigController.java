package be.mathiasbosman.cv.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ConfigController {

  private static final Logger log = LoggerFactory.getLogger(ConfigController.class);

  @GetMapping("/_ah/warmup")
  public boolean warmup() {
    log.info("Warmup called.");
    return true;
  }

}
