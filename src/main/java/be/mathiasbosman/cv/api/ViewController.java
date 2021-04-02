package be.mathiasbosman.cv.api;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController extends AbstractAppControler implements ErrorController {

  private static final String FRONTEND_PATH = "forward:";
  private static final String ERROR_PATH = "/error";
  private static final String ERROR_FRONTEND_PATH = "/404";


  @GetMapping({"/blog", "/signin", "/login", "/oauth2/redirect/**", ERROR_FRONTEND_PATH})
  public String index() {
    return FRONTEND_PATH;
  }


  @RequestMapping(value = ERROR_PATH)
  public String handleError(HttpServletRequest request) {
    Object status = request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);
    if (status != null) {
      return FRONTEND_PATH + "/" + status.toString();
    }
    return null;
  }


  @Override
  public String getErrorPath() {
    return ERROR_PATH;
  }
}
