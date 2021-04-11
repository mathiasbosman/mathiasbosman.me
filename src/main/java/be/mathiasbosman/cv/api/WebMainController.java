package be.mathiasbosman.cv.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebMainController extends AbstractAppController implements ErrorController {

  private static final Logger log = LoggerFactory.getLogger(WebMainController.class);
  private static final String PATH_BASE = "/";

  @RequestMapping(value = "/{path:[^.]+}")
  public String index(@PathVariable("path") String path) {
    log.trace("Resolving path [{}]", path);
    return "forward:" + PATH_BASE;
  }

  // deeper paths neet to be declared serpately because of circular view issues
  @RequestMapping({"/blog/{**}"})
  public String blogPost() {
    return PATH_BASE;
  }

  @RequestMapping("/oauth2/callback/{**}")
  public String oauth2callback() {
    return PATH_BASE;
  }

  @Override
  public String getErrorPath() {
    return null;
  }
}
