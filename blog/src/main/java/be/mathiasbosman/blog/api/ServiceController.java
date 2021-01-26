package be.mathiasbosman.blog.api;

import be.mathiasbosman.blog.dto.PostContentDto;
import be.mathiasbosman.blog.dto.PostDto;
import be.mathiasbosman.blog.services.PostService;
import java.util.List;
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

  public ServiceController(PostService postService) {
    this.postService = postService;
  }

  @GetMapping(value = "/posts")
  public List<PostDto> posts() {
    return postService.getPosts();
  }

  @GetMapping(value = "/posts/{userId}")
  //TODO: also returns deleted ones at the moment
  public List<PostDto> postsByUsername(@PathVariable("userId") int userId) {
    return postService.getPosts(userId);
  }

  @PostMapping(value = "/validate")
  public @ResponseBody
  boolean validate(@RequestBody PostContentDto contentDto) {
    return postService.validate(contentDto);
  }

  @PostMapping(value = "/post")
  public @ResponseBody
  PostDto post(@RequestBody PostContentDto contentDto) {
    return postService.post(contentDto);
  }
}
