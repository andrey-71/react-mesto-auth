class Auth {
  constructor(options) {
    this._serverAuthUrl = options.serverAuthUrl;
    this._headers = options.headers;
  }

  register(data) {
    return fetch(`${this._serverAuthUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        email: data.email,
        password: data.password
      })
    })
      .then(res => this._handleResult(res))
  }

  // Обработчик результата запроса
  _handleResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`"${res.status} ${res.statusText}"`);

    // const err = res.json();
    // return res.json()
  }
}

const auth = new Auth({
  serverAuthUrl: 'https://auth.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json'
  }
});
export default auth;