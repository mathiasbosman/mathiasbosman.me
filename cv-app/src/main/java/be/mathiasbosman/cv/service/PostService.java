package be.mathiasbosman.cv.service;

import be.mathiasbosman.cv.dto.PostContentDto;
import be.mathiasbosman.cv.dto.PostDto;
import java.util.List;

public interface PostService {

  PostDto delete(int postId);

  List<PostDto> getPosts();

  List<PostDto> getPosts(int posterId);

  List<PostDto> getPosts(int posterId, boolean deleted);

  PostDto post(PostContentDto contentDto);

  boolean validate(PostContentDto contentDto);
}
