import React, { Component } from 'react';
import './App.css';

// Importation des composants :
import Inscription from './components/inscription/Inscription';
import Connexion from './components/connexion/Connexion';
import Main_app from './components/main_app/Main_app';


class App extends Component {

  state = {
    titre: 'Mon Catalogue Voitures'
  } // On peut mettre le state car on passe par une classe.

  render() {

    return (

      <div className="App">

        <Main_app />
        
        <Inscription title={this.state.titre} />

        <Connexion />

      </div>

    );

  }

}

export default App;
