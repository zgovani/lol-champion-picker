import axios from 'axios';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import $ from 'jquery';
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

class App extends Component {

  constructor() {
    super();
    this.state = {
      team_one_picks: Array(5).fill(null),
      team_two_picks: Array(5).fill(null)
    };
  }

  componentWillMount() {
    axios.get('http://jsonplaceholder.typicode.com/posts/1', {
      headers: {'Access-Control-Allow-Origin': '*'}
    })
    .then(function(response) {
      //alert(JSON.stringify(response.data));
    })
    .catch(function(error) {
      alert("Error: " + error.status);
    });

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
      error: function(error) { alert(JSON.stringify(error)); },
      dataType: 'json'
    });

    /*axios.get('https://na1.api.riotgames.com/lol/platform/v3/champions?freeToPlay=false', {
      headers: {'X-Riot-Token': 'RGAPI-56b52ba5-cec7-41ba-953b-a49ac9ef3a8f',
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
            'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token, Origin',
            "contentType": "application/json"}
    })
    .then(function(response) {
      alert(response.data);
    })
    .catch(function(error) {
      alert("Error: " + error.status);
    })*/
  }

  championClicked(e) {
    //alert(e.target.id);
  }

  render() {
    var championNames = ["Aatrox", "Ahri"];
    //alert(championNames);
    return (
      <div className="App">
      <div className="fuck">
        <table>
          <tbody>
            <tr>
              <td>
                <img className="champ-image" width="80px" src={Aatrox} alt={"Aatrox"} id="Aatrox" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Ahri} alt={"Ahri"} id="Ahri" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Akali} alt={"Akali"} id="Akali" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Alistar} alt={"Alistar"} id="Alistar" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Amumu} alt={"Amumu"} id="Amumu" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Anivia} alt={"Anivia"} id="Anivia" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Annie} alt={"Annie"} id="Annie" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Ashe} alt={"Ashe"} id="Ashe" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={AurelionSol} alt={"AurelionSol"} id="AurelionSol" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Azir} alt={"Azir"} id="Azir" onClick={this.championClicked}/>
              </td>
            </tr>

            <tr>
              <td>
                <img className="champ-image" width="80px" src={Bard} alt={"Bard"} id="Bard" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Blitzcrank} alt={"Blitzcrank"} id="Blitzcrank" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Brand} alt={"Brand"} id="Brand" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Braum} alt={"Braum"} id="Braum" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Caitlyn} alt={"Caitlyn"} id="Caitlyn" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Camille} alt={"Camille"} id="Camille" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Cassiopeia} alt={"Cassiopeia"} id="Cassiopeia" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Chogath} alt={"Chogath"} id="Chogath" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Corki} alt={"Corki"} id="Corki" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Darius} alt={"Darius"} id="Darius" onClick={this.championClicked}/>
              </td>
            </tr>

            <tr>
              <td>
                <img className="champ-image" width="80px" src={Diana} alt={"Diana"} id="Diana" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Draven} alt={"Draven"} id="Draven" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={DrMundo} alt={"DrMundo"} id="DrMundo" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Ekko} alt={"Ekko"} id="Ekko" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Elise} alt={"Elise"} id="Elise" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Evelynn} alt={"Evelynn"} id="Evelynn" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Ezreal} alt={"Ezreal"} id="Ezreal" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={FiddleSticks} alt={"FiddleSticks"} id="FiddleSticks" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Fiora} alt={"Fiora"} id="Fiora" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Fizz} alt={"Fizz"} id="Fizz" onClick={this.championClicked}/>
              </td>
            </tr>

            <tr>
              <td>
                <img className="champ-image" width="80px" src={Galio} alt={"Galio"} id="Galio" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Gangplank} alt={"Gangplank"} id="Gangplank" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Garen} alt={"Garen"} id="Garen" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Gnar} alt={"Gnar"} id="Gnar" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Gragas} alt={"Gragas"} id="Gragas" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Graves} alt={"Graves"} id="Graves" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Hecarim} alt={"Hecarim"} id="Hecarim" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Heimerdinger} alt={"Heimerdinger"} id="Heimerdinger" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Illaoi} alt={"Illaoi"} id="Illaoi" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Irelia} alt={"Irelia"} id="Irelia" onClick={this.championClicked}/>
              </td>
            </tr>

            <tr>
              <td>
                <img className="champ-image" width="80px" src={Ivern} alt={"Ivern"} id="Ivern" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Janna} alt={"Janna"} id="Janna" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={JarvanIV} alt={"JarvanIV"} id="JarvanIV" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Jax} alt={"Jax"} id="Jax" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Jayce} alt={"Jayce"} id="Jayce" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Jhin} alt={"Jhin"} id="Jhin" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Jinx} alt={"Jinx"} id="Jinx" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Kalista} alt={"Kalista"} id="Kalista" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Karma} alt={"Karma"} id="Karma" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Karthus} alt={"Karthus"} id="Karthus" onClick={this.championClicked}/>
              </td>
            </tr>

            <tr>
              <td>
                <img className="champ-image" width="80px" src={Kassadin} alt={"Kassadin"} id="Kassadin" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Katarina} alt={"Katarina"} id="Katarina" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Kayle} alt={"Kayle"} id="Kayle" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Kennen} alt={"Kennen"} id="Kennen" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Khazix} alt={"Khazix"} id="Khazix" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Kindred} alt={"Kindred"} id="Kindred" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Kled} alt={"Kled"} id="Kled" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={KogMaw} alt={"KogMaw"} id="KogMaw" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Leblanc} alt={"Leblanc"} id="Leblanc" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={LeeSin} alt={"LeeSin"} id="LeeSin" onClick={this.championClicked}/>
              </td>
            </tr>

            <tr>
              <td>
                <img className="champ-image" width="80px" src={Leona} alt={"Leona"} id="Leona" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Lissandra} alt={"Lissandra"} id="Lissandra" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Lucian} alt={"Lucian"} id="Lucian" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Lulu} alt={"Lulu"} id="Lulu" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Lux} alt={"Lux"} id="Lux" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Malphite} alt={"Malphite"} id="Malphite" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Malzahar} alt={"Malzahar"} id="Malzahar" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Maokai} alt={"Maokai"} id="Maokai" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={MasterYi} alt={"MasterYi"} id="MasterYi" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={MissFortune} alt={"MissFortune"} id="MissFortune" onClick={this.championClicked}/>
              </td>
            </tr>

            <tr>
              <td>
                <img className="champ-image" width="80px" src={MonkeyKing} alt={"MonkeyKing"} id="MonkeyKing" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Mordekaiser} alt={"Mordekaiser"} id="Mordekaiser" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Morgana} alt={"Morgana"} id="Morgana" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Nami} alt={"Nami"} id="Nami" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Nasus} alt={"Nasus"} id="Nasus" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Nautilus} alt={"Nautilus"} id="Nautilus" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Nidalee} alt={"Nidalee"} id="Nidalee" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Nocturne} alt={"Nocturne"} id="Nocturne" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Nunu} alt={"Nunu"} id="Nunu" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Olaf} alt={"Olaf"} id="Olaf" onClick={this.championClicked}/>
              </td>
            </tr>

            <tr>
              <td>
                <img className="champ-image" width="80px" src={Orianna} alt={"Orianna"} id="Orianna" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Pantheon} alt={"Pantheon"} id="Pantheon" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Poppy} alt={"Poppy"} id="Poppy" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Quinn} alt={"Quinn"} id="Quinn" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Rammus} alt={"Rammus"} id="Rammus" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={RekSai} alt={"RekSai"} id="RekSai" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Renekton} alt={"Renekton"} id="Renekton" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Rengar} alt={"Rengar"} id="Rengar" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Riven} alt={"Riven"} id="Riven" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Rumble} alt={"Rumble"} id="Rumble" onClick={this.championClicked}/>
              </td>
            </tr>

            <tr>
              <td>
                <img className="champ-image" width="80px" src={Ryze} alt={"Ryze"} id="Ryze" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Sejuani} alt={"Sejuani"} id="Sejuani" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Shaco} alt={"Shaco"} id="Shaco" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Shen} alt={"Shen"} id="Shen" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Shyvana} alt={"Shyvana"} id="Shyvana" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Singed} alt={"Singed"} id="Singed" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Sion} alt={"Sion"} id="Sion" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Sivir} alt={"Sivir"} id="Sivir" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Skarner} alt={"Skarner"} id="Skarner" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Sona} alt={"Sona"} id="Sona" onClick={this.championClicked}/>
              </td>
            </tr>

            <tr>
              <td>
                <img className="champ-image" width="80px" src={Soraka} alt={"Soraka"} id="Soraka" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Swain} alt={"Swain"} id="Swain" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Syndra} alt={"Syndra"} id="Syndra" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={TahmKench} alt={"TahmKench"} id="TahmKench" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Taliyah} alt={"Taliyah"} id="Taliyah" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Talon} alt={"Talon"} id="Talon" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Taric} alt={"Taric"} id="Taric" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Teemo} alt={"Teemo"} id="Teemo" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Thresh} alt={"Thresh"} id="Thresh" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Tristana} alt={"Tristana"} id="Tristana" onClick={this.championClicked}/>
              </td>
            </tr>

            <tr>
              <td>
                <img className="champ-image" width="80px" src={Trundle} alt={"Trundle"} id="Trundle" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Tryndamere} alt={"Tryndamere"} id="Tryndamere" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={TwistedFate} alt={"TwistedFate"} id="TwistedFate" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Twitch} alt={"Twitch"} id="Twitch" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Udyr} alt={"Udyr"} id="Udyr" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Urgot} alt={"Urgot"} id="Urgot" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Varus} alt={"Varus"} id="Varus" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Vayne} alt={"Vayne"} id="Vayne" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Veigar} alt={"Veigar"} id="Veigar" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Velkoz} alt={"Velkoz"} id="Velkoz" onClick={this.championClicked}/>
              </td>
            </tr>

            <tr>
              <td>
                <img className="champ-image" width="80px" src={Vi} alt={"Vi"} id="Vi" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Viktor} alt={"Viktor"} id="Viktor" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Vladimir} alt={"Vladimir"} id="Vladimir" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Volibear} alt={"Volibear"} id="Volibear" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Warwick} alt={"Warwick"} id="Warwick" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Xerath} alt={"Xerath"} id="Xerath" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={XinZhao} alt={"XinZhao"} id="XinZhao" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Yasuo} alt={"Yasuo"} id="Yasuo" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Yorick} alt={"Yorick"} id="Yorick" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Zac} alt={"Zac"} id="Zac" onClick={this.championClicked}/>
              </td>
            </tr>

            <tr>
              <td>
                <img className="champ-image" width="80px" src={Zed} alt={"Zed"} id="Zed" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Ziggs} alt={"Ziggs"} id="Ziggs" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Zilean} alt={"Zilean"} id="Zilean" onClick={this.championClicked}/>
              </td>
              <td>
                <img className="champ-image" width="80px" src={Zyra} alt={"Zyra"} id="Zyra" onClick={this.championClicked}/>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    );
  }
}

export default App;
