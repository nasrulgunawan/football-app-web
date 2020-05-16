import {
  baseUrl,
  headers
} from './api-configuration.js';
import Ui from './ui.js';

class Api {
  static fetchApi(endpoint) {
    return fetch(`${baseUrl}${endpoint}`, {
      headers: headers
    }).then(response => response.json());
  }

  static getCompetitions() {
    document.querySelector('.standings').innerHTML = Ui.loading();
    return this.fetchApi('competitions/2021/standings')
      .then(result => {
        if (result.standings) {
          Ui.setStandingTemplate(result.standings)
        }
      });
  }

  static getMatches() {
    document.querySelector('.matches').innerHTML = Ui.loading();
    return this.fetchApi('competitions/2003/matches')
      .then(result => {
        Ui.setScheduleCard(result.matches);
      })
  }
}

export default Api;