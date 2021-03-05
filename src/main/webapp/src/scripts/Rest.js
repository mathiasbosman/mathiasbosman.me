import {URL_BASE} from "../Constants";

class Rest {
  post(url, data) {
    const config = {
      method: 'POST',
      body: data ? JSON.stringify(data) : '',
      headers: {'content-type': 'application/json; charset=UTF-8'}
    };
    return this._fetch({url: url, config: config});
  }

  get(url) {
    const config = {
      method: 'GET',
    };
    return this._fetch({url: url, config: config});
  }

  delete(url) {
    const config = {
      method: 'DELETE',
    };
    return this._fetch({url: url, config: config});
  }

  _fetch({url, config}) {
    return fetch(url, config)
    .then(this._handleErrors)
    .then((response) => {
      response.json().then(r => {
        return r;
      }).catch(() => {
        return false
      });
    }).catch(() => {
      return false
    });
  }

  _handleErrors(response) {
    if (response.ok) {
      return response;
    }
    response.json().then(r => {
      window.location.href = URL_BASE + "/error/" + response.status + "/"
          + r.code;
    })
  }
}

export default new Rest();