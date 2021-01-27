package be.mathiasbosman.cv.services;

import be.mathiasbosman.cv.dto.PostContentDto;
import be.mathiasbosman.cv.dto.PostDto;
import be.mathiasbosman.cv.entity.Post;
import be.mathiasbosman.cv.repo.PostRepository;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

@Service
@Transactional(propagation = Propagation.NEVER)
public class PostServiceImpl implements PostService {

  private static final Logger log = LoggerFactory.getLogger(PostServiceImpl.class);
  private final PostRepository postRepository;

  public PostServiceImpl(PostRepository postRepository) {
    this.postRepository = postRepository;
  }

  @Override
  @Transactional(readOnly = true)
  public List<PostDto> getPosts() {
    return postRepository.findAll(false).stream().map(this::getPostDto)
        .collect(Collectors.toList());
  }

  @Override
  @Transactional(readOnly = true)
  public List<PostDto> getPosts(int posterId) {
    return postRepository.findAllByPosterId(posterId).stream().map(this::getPostDto).collect(
        Collectors.toList());
  }

  @Override
  public PostDto post(PostContentDto contentDto) {
    throw new UnsupportedOperationException("not yet implemented");
    //return getPostDto(post);
  }

  @Override
  public boolean validate(PostContentDto contentDto) {
    return StringUtils.hasLength(contentDto.getBody()) && StringUtils
        .hasLength(contentDto.getSubject());
  }


  private PostDto getPostDto(Post p) {
    return new PostDto(p.getId(), p.getSubject(), p.getBody(), p.getCreated(), p.getUpdated());
  }
}
