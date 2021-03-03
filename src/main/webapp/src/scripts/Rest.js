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
    .then(this._handleFetchError)
    .then((response) => {
      return response.json().catch(() => false);
    }).catch(error => {
      console.error(error);
      return false;
    });
  }

  _handleFetchError(response) {
    if (!response.ok) {
      window.location.href = URL_BASE + "/" + response.status;
    }
    return response;
  }
}

export default new Rest();