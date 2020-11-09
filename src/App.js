import React, { Component } from 'react';
import './App.css';

// Importation des composants :
import Inscription from './components/inscription/Inscription';

class App extends Component {

  state = {
    titre: 'Mon Catalogue Voitures'
  } // On peut mettre le state car on passe par une classe.

  render() {

    return (

      <div className="App">
        
        <Inscription title={this.state.titre} />

      </div>

    );

  }

}

export default App;
