import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import $ from 'jquery';
import { PythonShell } from 'python-shell';

import roboto from './fonts/Roboto/Roboto-Light.ttf'

import Aatrox from './images/Aatrox.png'
import Ahri from './images/Ahri.png'
import Akali from './images/Akali.png'
import Alistar from './images/Alistar.png'
import Amumu from './images/Amumu.png'
import Anivia from './images/Anivia.png'
import Annie from './images/Annie.png'
import Ashe from './images/Ashe.png'
import AurelionSol from './images/AurelionSol.png'
import Azir from './images/Azir.png'
import Bard from './images/Bard.png'
import Blitzcrank from './images/Blitzcrank.png'
import Brand from './images/Brand.png'
import Braum from './images/Braum.png'
import Caitlyn from './images/Caitlyn.png'
import Camille from './images/Camille.png'
import Cassiopeia from './images/Cassiopeia.png'
import Chogath from './images/Chogath.png'
import Corki from './images/Corki.png'
import Darius from './images/Darius.png'
import Diana from './images/Diana.png'
import Draven from './images/Draven.png'
import DrMundo from './images/DrMundo.png'
import Ekko from './images/Ekko.png'
import Elise from './images/Elise.png'
import Evelynn from './images/Evelynn.png'
import Ezreal from './images/Ezreal.png'
import FiddleSticks from './images/FiddleSticks.png'
import Fiora from './images/Fiora.png'
import Fizz from './images/Fizz.png'
import Galio from './images/Galio.png'
import Gangplank from './images/Gangplank.png'
import Garen from './images/Garen.png'
import Gnar from './images/Gnar.png'
import Gragas from './images/Gragas.png'
import Graves from './images/Graves.png'
import Hecarim from './images/Hecarim.png'
import Heimerdinger from './images/Heimerdinger.png'
import Illaoi from './images/Illaoi.png'
import Irelia from './images/Irelia.png'
import Ivern from './images/Ivern.png'
import Janna from './images/Janna.png'
import JarvanIV from './images/JarvanIV.png'
import Jax from './images/Jax.png'
import Jayce from './images/Jayce.png'
import Jhin from './images/Jhin.png'
import Jinx from './images/Jinx.png'
import Kalista from './images/Kalista.png'
import Karma from './images/Karma.png'
import Karthus from './images/Karthus.png'
import Kassadin from './images/Kassadin.png'
import Katarina from './images/Katarina.png'
import Kayle from './images/Kayle.png'
import Kennen from './images/Kennen.png'
import Khazix from './images/Khazix.png'
import Kindred from './images/Kindred.png'
import Kled from './images/Kled.png'
import KogMaw from './images/KogMaw.png'
import Leblanc from './images/Leblanc.png'
import LeeSin from './images/LeeSin.png'
import Leona from './images/Leona.png'
import Lissandra from './images/Lissandra.png'
import Lucian from './images/Lucian.png'
import Lulu from './images/Lulu.png'
import Lux from './images/Lux.png'
import Malphite from './images/Malphite.png'
import Malzahar from './images/Malzahar.png'
import Maokai from './images/Maokai.png'
import MasterYi from './images/MasterYi.png'
import MissFortune from './images/MissFortune.png'
import MonkeyKing from './images/MonkeyKing.png'
import Mordekaiser from './images/Mordekaiser.png'
import Morgana from './images/Morgana.png'
import Nami from './images/Nami.png'
import Nasus from './images/Nasus.png'
import Nautilus from './images/Nautilus.png'
import Nidalee from './images/Nidalee.png'
import Nocturne from './images/Nocturne.png'
import Nunu from './images/Nunu.png'
import Olaf from './images/Olaf.png'
import Orianna from './images/Orianna.png'
import Pantheon from './images/Pantheon.png'
import Poppy from './images/Poppy.png'
import Quinn from './images/Quinn.png'
import Rammus from './images/Rammus.png'
import RekSai from './images/RekSai.png'
import Renekton from './images/Renekton.png'
import Rengar from './images/Rengar.png'
import Riven from './images/Riven.png'
import Rumble from './images/Rumble.png'
import Ryze from './images/Ryze.png'
import Sejuani from './images/Sejuani.png'
import Shaco from './images/Shaco.png'
import Shen from './images/Shen.png'
import Shyvana from './images/Shyvana.png'
import Singed from './images/Singed.png'
import Sion from './images/Sion.png'
import Sivir from './images/Sivir.png'
import Skarner from './images/Skarner.png'
import Sona from './images/Sona.png'
import Soraka from './images/Soraka.png'
import Swain from './images/Swain.png'
import Syndra from './images/Syndra.png'
import TahmKench from './images/TahmKench.png'
import Taliyah from './images/Taliyah.png'
import Talon from './images/Talon.png'
import Taric from './images/Taric.png'
import Teemo from './images/Teemo.png'
import Thresh from './images/Thresh.png'
import Tristana from './images/Tristana.png'
import Trundle from './images/Trundle.png'
import Tryndamere from './images/Tryndamere.png'
import TwistedFate from './images/TwistedFate.png'
import Twitch from './images/Twitch.png'
import Udyr from './images/Udyr.png'
import Urgot from './images/Urgot.png'
import Varus from './images/Varus.png'
import Vayne from './images/Vayne.png'
import Veigar from './images/Veigar.png'
import Velkoz from './images/Velkoz.png'
import Vi from './images/Vi.png'
import Viktor from './images/Viktor.png'
import Vladimir from './images/Vladimir.png'
import Volibear from './images/Volibear.png'
import Warwick from './images/Warwick.png'
import Xerath from './images/Xerath.png'
import XinZhao from './images/XinZhao.png'
import Yasuo from './images/Yasuo.png'
import Yorick from './images/Yorick.png'
import Zac from './images/Zac.png'
import Zed from './images/Zed.png'
import Ziggs from './images/Ziggs.png'
import Zilean from './images/Zilean.png'
import Zyra from './images/Zyra.png'

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
      currentSelection: 1,  //1 = left 1, 2 = left 2... 6 = right 1
    };

    this.championClicked = this.championClicked.bind(this);
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

  championClicked(e) {
    var currentList = [];
    var currentSelection = this.state.currentSelection;
    if (currentSelection <= 5) {
     	currentList = this.state.team_one_picks.slice();
    } else if (currentSelection <= 10) {
     	currentList = this.state.team_two_picks.slice();
      if (this.state.team_one_picks.indexOf(e.target.id) != -1) {
        return;
      }
    } else {
    	return;
    }

    if (currentList.indexOf(e.target.id) != -1) {
      return;
    }

    currentList[currentSelection % 6] = e.target.id;

    this.setState({
      currentSelection: this.state.currentSelection + 1,
    });

    if (currentSelection >= 6) {
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
        <Image className="champ-image" src={require('./images/' + pick + '.png')} alt={pick} id={(start_index + i)} onClick={this.championClicked}/>
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

  predict() {
    console.log(PythonShell)
    PythonShell.run('test.py', function (err, results) {
      if (err) throw err;
    // results is an array consisting of messages collected during execution
      console.log('results: %j', results);
    });
  }

  render() {
    let team_one_list = this.renderTeamOnePicks(this.state.team_one_picks);
    let team_two_list = this.renderTeamOnePicks(this.state.team_two_picks);

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
          <Button className="predict-button" color="success" onClick={this.predict}>Predict</Button>
        </div>
      </div>
      </div>
    );
  }
}

class Image extends Component {
  render() {
    return (
      <img className={this.props.className} width={this.props.width} src={this.props.src} alt={this.props.alt} id={this.props.id} onClick={this.props.onClick}/>
      );
  }
}

export default App;
