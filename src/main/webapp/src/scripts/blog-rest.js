import Rest from "./Rest";

class BLOGRest {
  validate(data) {
    return Rest.post('/rest/validate', data);
  }

  post(data) {
    return Rest.post('/rest/post', data);
  }

  delete(postId) {
    return Rest.delete(`/rest/post/${postId}`);
  }

  fetchPosts() {
    return Rest.get('/rest/public/posts');
  }

  fetchUserPosts(userId) {
    return Rest.get(`/rest/public/posts/${userId}`)
  }

  fetchOAuth2Providers() {
    return Rest.get('/oauth2/providers');
  }

  fetchUser() {
    return Rest.get('/oauth2/user');
  }

  logout() {
    return Rest.post('/oauth2/logout');
  }
}

export default new BLOGRest();