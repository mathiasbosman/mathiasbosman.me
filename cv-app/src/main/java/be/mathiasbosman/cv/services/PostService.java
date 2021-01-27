package be.mathiasbosman.cv.services;

import be.mathiasbosman.cv.dto.PostContentDto;
import be.mathiasbosman.cv.dto.PostDto;
import java.util.List;

public interface PostService {

  List<PostDto> getPosts();

  List<PostDto> getPosts(int posterId);

  PostDto post(PostContentDto contentDto);

  boolean validate(PostContentDto contentDto);
}
