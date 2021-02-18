package be.mathiasbosman.cv.api;

import be.mathiasbosman.cv.dto.PostContentDto;
import be.mathiasbosman.cv.dto.PostDto;
import be.mathiasbosman.cv.dto.UserDto;
import be.mathiasbosman.cv.oauth2.OAuth2Attribute;
import be.mathiasbosman.cv.oauth2.OAuth2Service;
import be.mathiasbosman.cv.service.PostService;
import be.mathiasbosman.cv.service.UserService;
import be.mathiasbosman.cv.util.WebUtils;
import java.util.List;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest")
public class ServiceController {

  private final PostService postService;
  private final UserService userService;
  private final OAuth2Service oAuth2Service;

  public ServiceController(PostService postService, OAuth2Service oAuth2Service,
      UserService userService) {
    this.postService = postService;
    this.oAuth2Service = oAuth2Service;
    this.userService = userService;
  }

  @GetMapping(value = "/public/posts")
  public List<PostDto> posts() {
    return postService.getPosts();
  }

  @GetMapping(value = "/public/posts/{userId}")
  public List<PostDto> postsByUsername(@PathVariable("userId") int userId) {
    return postService.getPosts(userId);
  }

  @DeleteMapping(value = "/post/{id}")
  public @ResponseBody
  PostDto deletePost(@PathVariable int id) {
    return postService.delete(id);
  }

  @PostMapping(value = "/validate")
  public @ResponseBody
  boolean validate(@RequestBody PostContentDto contentDto) {
    return postService.validate(contentDto);
  }

  @PostMapping(value = "/post")
  public @ResponseBody
  PostDto post(@RequestBody PostContentDto contentDto) {
    String email = oAuth2Service.getStringAttribute(WebUtils.token(), OAuth2Attribute.EMAIL);
    UserDto userDto = userService.getUserByEmail(email);
    return postService.post(contentDto, userDto.getUserId());
  }
}
