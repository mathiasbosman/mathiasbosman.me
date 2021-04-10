package be.mathiasbosman.cv.api;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebMainController extends AbstractAppController implements ErrorController {

  private static final String PATH_BASE = "/";

  // first level paths, the server will in all other cases fallback to the error path
  // we define every "correct" path here for clarity
  @RequestMapping({PATH_BASE, "/404", "/signin", "/blog", PATH_ERROR})
  public String main() {
    return INDEX;
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
