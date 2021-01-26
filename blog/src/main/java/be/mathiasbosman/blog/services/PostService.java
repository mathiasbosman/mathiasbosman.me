package be.mathiasbosman.blog.services;

import be.mathiasbosman.blog.dto.PostContentDto;
import be.mathiasbosman.blog.dto.PostDto;
import java.util.List;

public interface PostService {

  List<PostDto> getPosts();

  List<PostDto> getPosts(int posterId);

  PostDto post(PostContentDto contentDto);

  boolean validate(PostContentDto contentDto);
}
