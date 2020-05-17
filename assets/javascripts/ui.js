class Ui {
  static setScheduleCard(matches) {
    const matchesElement = document.querySelector('.matches');
    let template = '';

    matches.forEach(match => {
      template += `<div class="card-panel">
          <div class="row">
            <div class="col s12 center-text">
              <span>${match.utcDate}</span>
            </div>
          </div>
          <div class="row no-margin">
            <div class="col s5 center-text">
              
              <p>${match.homeTeam.name}</p>
            </div>
            <div class="col s2 center-text">VS</div>
            <div class="col s5 center-text">
              
              <p>${match.awayTeam.name}</p>
            </div>
          </div>
        </div>`;
    });

    matchesElement.innerHTML = template;
  }

  static setStandingTemplate(standings) {
    const standingElement = document.querySelector('.standings');
    let template = '';

    standings.forEach(standing => {
      template += `
        <p class="left">${standing.stage.replace('_', ' ')}</p>
        <p class="right">${standing.type}</p>
        <table class="striped">
        <tbody>
      `;
      standing.table.forEach(table => {
        template += `
          <tr>
            <td><img src="${table.team.crestUrl}"
                class="responsive-img"></td>
            <td>${table.team.name}</td>
            <td>${table.position}</td>
            <td><i class="material-icons">favorite</i></td>
          </tr>`;
      });
      template += `
        </tbody>
        </table>
      `;
    });
    standingElement.innerHTML = template;
  }

  static setCompetitionTemplate(competitions) {
    const competitionsElement = document.querySelector('.competitions');
    competitionsElement.innerHTML = '';
    competitions.forEach(competition => {
      competitionsElement.innerHTML += `
        <div class="col s12">
          <div class="card-panel center-text">
            <span><b>${competition.name}</b></span>
            <br/>
            <label>${competition.area.name}</label>
          </div>
        </div>
      `;
    })
  }

  static loading() {
    return `<div class="loading">
        <div class="preloader-wrapper small active">
          <div class="spinner-layer spinner-green-only">
            <div class="circle-clipper left">
              <div class="circle"></div>
            </div><div class="gap-patch">
              <div class="circle"></div>
            </div><div class="circle-clipper right">
              <div class="circle"></div>
            </div>
          </div>
        </div>
      </div>`;
  }
}

export default Ui;