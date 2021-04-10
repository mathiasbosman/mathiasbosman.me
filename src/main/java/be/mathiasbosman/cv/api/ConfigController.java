package be.mathiasbosman.cv.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/_ah")
public class ConfigController {

  private static final Logger log = LoggerFactory.getLogger(ConfigController.class);

  @GetMapping("/warmup")
  public boolean warmup() {
    log.info("Warmup called.");
    return true;
  }
}
