package be.mathiasbosman.cv.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController extends AbstractAppControler {

  @GetMapping({"/blog", "/signin", "/login", "/oauth2/redirect/**"})
  public String index() {
    return "forward:";
  }
}
