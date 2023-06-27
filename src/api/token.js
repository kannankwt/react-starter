import axios from "./axios";

const LOGIN_URL = '/token/';

const headers = {
    'Content-Type': 'application/json'
}

export function token(loginData) {

    return axios
      .post(LOGIN_URL, loginData, {headers})
}
