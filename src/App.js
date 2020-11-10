import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Importation des composants :
import RegistrationPage from './pages/Registration';
import LoginPage from './pages/Login';
import HomPage from './pages/Home/';

class App extends Component {

  state = {
    titre: 'Mon Catalogue Voitures'
  } // On peut mettre le state car on passe par une classe.

  render() {

      return (
          
      <div className="App">
        
        <BrowserRouter>
          <Switch>
            <Route path="/inscription">
              <RegistrationPage />
            </Route>
            <Route path="/connexion">
              <LoginPage />
            </Route>
            <Route path="/accueil">
              <HomPage />
            </Route>
            <Route path="/">
              <RegistrationPage />
            </Route>
          </Switch>
        </BrowserRouter>

       


      </div>

    );

  }

}

export default App;
