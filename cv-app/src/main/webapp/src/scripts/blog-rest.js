class BLOGRest {
  validate(data) {
    return this._post('/rest/validate', data);
  }

  post(data) {
    return this._post('/rest/post', data);
  }

  delete(postId) {
    return this._delete(`/rest/post/${postId}`);
  }

  fetchPosts() {
    return this._get('/rest/public/posts');
  }

  fetchUserPosts(userId) {
    return this._get(`/rest/public/posts/${userId}`)
  }

  fetchOAuth2Providers() {
    return this._get('/oauth2/providers');
  }

  fetchUser() {
    return this._get('/oauth2/user');
  }

  logout() {
    //TODO
    return this._get('/api/oauth2/logout');
  }

  _post(url, data) {
    const config = {
      method: 'POST',
      body: data ? JSON.stringify(data) : '',
      headers: {'content-type': 'application/json; charset=UTF-8'}
    };
    return this._fetch({url: url, config: config});
  }

  _get(url) {
    const config = {
      method: 'GET',
    };
    return this._fetch({url: url, config: config});
  }

  _delete(url) {
    const config = {
      method: 'DELETE',
    };
    return this._fetch({url: url, config: config});
  }

  //TODO fix so that all these error pages actually work
  _fetch({url, config}) {
    return fetch(url, config).then((response) => {
      if (!response.ok) {
        console.error("Response error, status: " + response.status);
        window.location.href = `/error`;
      } else {
        return response.json().catch(() => false);
      }
    }).catch(() => window.location.href = '/error');
  }
}

export default new BLOGRest();