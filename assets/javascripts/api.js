import {
  baseUrl,
  headers
} from './api-configuration.js';

class Api {
  static fetchApi(endpoint) {
    return fetch(`${baseUrl}${endpoint}`, {
      headers: headers
    });
  }

  static getCompetitions() {
    return this.fetchApi('competitions')
      .then(response => response.json())
      .then(results => {
        if (results.competitions) {
          console.log(results.competitions);
        }
      });
  }
}

export default Api;