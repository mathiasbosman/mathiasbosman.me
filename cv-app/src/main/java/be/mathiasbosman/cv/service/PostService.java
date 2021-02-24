package be.mathiasbosman.cv.service;

import be.mathiasbosman.cv.dto.PostContentDto;
import be.mathiasbosman.cv.dto.PostDto;
import java.util.List;
import java.util.UUID;

public interface PostService {

  PostDto delete(UUID postId);

  List<PostDto> getPosts();

  List<PostDto> getPosts(UUID posterId);

  List<PostDto> getPosts(UUID posterId, boolean deleted);

  PostDto post(PostContentDto contentDto, UUID posterId);

  boolean validate(PostContentDto contentDto);
}
