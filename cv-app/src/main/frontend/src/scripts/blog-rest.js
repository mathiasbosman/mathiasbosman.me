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
    return this._get('/rest/posts');
  }

  fetchUserPosts(userId) {
    return this._get(`/rest/posts/${userId}`)
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
        switch (response.status) {
          case 401:
          case 403:
          case 404:
          case 500:
            window.location.href = `/${response.status}.html`;
            break;
          default:
            window.location.href = '/500.html';
            break;
        }
      } else {
        return response.json().catch(() => true);
      }
    }).catch(() => window.location.href = '/500.html');
  }
}

export default new BLOGRest();