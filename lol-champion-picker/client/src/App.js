import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const champions_list = ["Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Ashe", "AurelionSol", "Azir",
    "Bard", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "Chogath", "Corki", "Darius",
    "Diana", "Draven", "DrMundo", "Ekko", "Elise", "Evelynn", "Ezreal", "FiddleSticks", "Fiora", "Fizz", "Galio",
    "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern",
    "Janna", "JarvanIV", "Jax", "Jayce", "Jhin", "Jinx", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle",
    "Kennen", "Khazix", "Kindred", "Kled", "KogMaw", "Leblanc", "LeeSin", "Leona", "Lissandra", "Lucian", "Lulu",
    "Lux", "Malphite", "Malzahar", "Maokai", "MasterYi", "MissFortune", "MonkeyKing", "Mordekaiser", "Morgana",
    "Nami", "Nasus", "Nautilus", "Nidalee", "Nocturne", "Nunu", "Olaf", "Orianna", "Pantheon", "Poppy", "Quinn",
    "Rammus", "RekSai", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Sejuani", "Shaco", "Shen", "Shyvana",
    "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Syndra", "TahmKench", "Taliyah", "Talon",
    "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "TwistedFate", "Twitch", "Udyr", "Urgot",
    "Varus", "Vayne", "Veigar", "Velkoz", "Vi", "Viktor", "Vladimir", "Volibear", "Warwick", "Xerath", "XinZhao",
    "Yasuo", "Yorick", "Zac", "Zed", "Ziggs", "Zilean", "Zyra"];

class App extends Component {

  constructor() {
    super();
    this.state = {
      team_one_picks: Array(0),
      team_two_picks: Array(0),
      currentSelection: 0,  //1 = left 1, 2 = left 2... 6 = right 1
      currentLabel: null,
      currentWinner: null,
      calculating: null
    };

    this.championClicked = this.championClicked.bind(this);
    this.predict = this.predict.bind(this)
    this.onHover = this.onHover.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.toggle = this.toggle.bind(this);
    this.reset = this.reset.bind(this);
  }

  toggle() {

  }

  componentWillMount() {
    function setHeader(xhr) {
      xhr.setRequestHeader('X-Riot-Token', 'RGAPI-210f1e27-46d3-41b9-a5e9-907d79fdeb85');
    }

    $.ajaxPrefilter( function (options) {
      if (options.crossDomain && $.support.cors) {
        var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
        options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
        //options.url = "http://cors.corsproxy.io/url=" + options.url;
      }
    });

    $.ajax({
      beforeSend: setHeader,
      url: 'https://na1.api.riotgames.com/lol/platform/v3/champions?freeToPlay=false',
      type: 'GET',
      success: function(data) {
        //alert(JSON.stringify(data));
      },
      error: function(error) { //alert(JSON.stringify(error));
      },
      dataType: 'json'
    });
  }

  renderLabelText(text) {
    if (text == null || this.state.currentWinner != null) {
      return null;
    }
    return (<p className="champ-label-2">{text}</p>);
  }

  onHover(e) {
    this.setState({
      currentLabel: champions_list[e.target.id]
    })
  }

  onMouseOut(e) {
    this.setState({
      currentLabel: null
    })
  }

  championClicked(e) {
    var currentList = [];
    var currentSelection = this.state.currentSelection;
    if (currentSelection <= 4) {
      currentList = this.state.team_one_picks.slice();
    } else if (currentSelection <= 9) {
      currentList = this.state.team_two_picks.slice();
    } else {
      return;
    }

    if (this.state.team_one_picks.indexOf(e.target.id) != -1) {
        return;
    } else if (this.state.team_two_picks.indexOf(e.target.id) != -1) {
        return;
    }

    if (currentList.indexOf(e.target.id) != -1) {
      return;
    }

    currentList[currentSelection % 5] = e.target.id;

    this.setState({
      currentSelection: this.state.currentSelection + 1,
    });

    if (currentSelection >= 5) {
      this.setState({
        team_two_picks: currentList
      });
    } else {
      this.setState({
        team_one_picks: currentList
      });
    }
  }

  renderChampions(champion_names, start_index) {
    const listItems = champion_names.map((pick, i) =>
      <td>
        <Image className="champ-image" src={require('./images/' + pick + '.png')} alt={pick} id={(start_index + i)} onClick={this.championClicked} onMouseOut={this.onMouseOut} onMouseOver={this.onHover}/>
      </td>
    );

    return listItems;
  }

  renderTeamOnePicks(team_one_picks) {
    for (var i = 0; i < team_one_picks.length; i++) {
      console.log(team_one_picks[i]);
    }

    const listItems = team_one_picks.map((pick) =>
      <tr text-align="center">
        <td text-align="center" width="200px">
          <img className="selected-image" src={require('./images/' + champions_list[pick] + '.png')} />
        </td>
      </tr>
    );

    return listItems;
  }

  renderTableFromRows(rows) {
    const r = rows.map((pick) =>
      <tr>
        {pick}
      </tr>
    );

    return r;
  }

  renderWinLossText(winningTeam) {  //winningTeam = 0 or 1
    if (winningTeam == null) {
      return null;
    }

    if (winningTeam == 0) {
      return (<h3 className="champ-label">Your team is predicted to win!</h3>);
    } else {
      return (<h3 className="champ-label">Enemy team is predicted to win!</h3>);
    }
  }

  predict(e) {

    this.setState({
      calculating: true
    });

    var your_picks = this.state.team_one_picks;
    var enemy_picks = this.state.team_two_picks;
    var input = Array.apply(null, Array(276)).map(Number.prototype.valueOf, 0);

    your_picks.forEach(function(item) {
      input[parseInt(item)] = 1
    });

    enemy_picks.forEach(function(item) {
      input[138 + parseInt(item)] = 1
    });

    console.log(your_picks)
    console.log(enemy_picks)
    console.log(input)
    fetch('/tensorflow', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "input": input,
      })
    })
    .then(response => response.json())
    .then(response => {
      console.log(response.payload.value)
      var result = response.payload.value
      //console.log(response.json().Promise.get("[[PromiseValue]]").payload.value);
      //console.log(response.json().payload.value)
      //var num = Math.round(Math.random())
      this.setState({
        currentWinner: result,
        calculating: null
      })
    })
  }

  renderPredictButton() {
    if (this.state.calculating != null) {
      return (<div className="loader"></div>)
    }
    if (this.state.currentWinner == null) {
      return (<Button className="predict-button" color="success" onClick={this.predict}>Predict</Button>);
    } else {
      return null;
    }
  }

  reset() {
    this.setState({
      team_one_picks: Array(0),
      team_two_picks: Array(0),
      currentSelection: 0,  //1 = left 1, 2 = left 2... 6 = right 1
      currentLabel: null,
      currentWinner: null,
    })
  }

  renderResetButton() {
    if (this.state.currentWinner != null) {
      return (<Button className="reset-button" onClick={this.reset}>Reset</Button>)
    } else {
      return null;
    }
  }

  render() {
    let team_one_list = this.renderTeamOnePicks(this.state.team_one_picks);
    let team_two_list = this.renderTeamOnePicks(this.state.team_two_picks);

    let labelText = this.renderLabelText(this.state.currentLabel);

    let winningTeam = this.renderWinLossText(this.state.currentWinner);

    let predictButton = this.renderPredictButton();
    let resetButton = this.renderResetButton();

    var rows = [];

    for (var i = 0; i < champions_list.length; i += 10) {
      rows.push(this.renderChampions(champions_list.slice(i, i + 10), i));
    }

    //let row_one = this.renderChampions(champions_list.splice(0, 10));
    let renderedTable = this.renderTableFromRows(rows);

    //alert(this.state.team_one_picks + " - " + this.state.team_two_picks);

    return (
      //{this.renderTeamOnePicks(this.state.team_one_picks)}
      <div className="App">
        <h1 className="header-text">League of Legends Match Predictor</h1>
        {labelText}
        <div className="content">
        <div className="left-column">
          <h3 className="column-header">Your Team</h3>

          <table width="100%" height="100%" text-align="center">
            <tbody text-align="center">
              {team_one_list}
            </tbody>
          </table>
        </div>

      <div className="champ-select-box">
        <table>
          <tbody>
            {renderedTable}
          </tbody>
        </table>
        </div>

        <div className="right-column">
          <h3 className="column-header">Enemy Team</h3>

          <table width="100%" height="100%" text-align="center">
            <tbody text-align="center">
              {team_two_list}
            </tbody>
          </table>
        </div>

        <div position="relative">
          {predictButton}
          {winningTeam}
          {resetButton}
        </div>
      </div>
      </div>
    );
  }
}

class Image extends Component {
  render() {
    return (
      <div><img className={this.props.className} width={this.props.width} src={this.props.src} alt={this.props.alt} id={this.props.id} onMouseOut={this.props.onMouseOut} onClick={this.props.onClick} onMouseOver={this.props.onMouseOver}/></div>
      );
  }
}

export default App;
