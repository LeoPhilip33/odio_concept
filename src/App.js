import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Importation des composants :
import RegistrationPage from './pages/Registration';
import LoginPage from './pages/Login';
import HomePage from './pages/Home/';
import FavorisPage from './pages/Favoris/';
import LivesPage from './pages/Lives/';
import PlaylistsPage from './pages/Playlists/';
import TelechargementPage from './pages/Telechargement/';
import ParametreComptePage from './pages/parametres/';







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
              <HomePage />
            </Route>
            <Route path="/favoris">
              <FavorisPage />
            </Route>
            <Route path="/playlists">
              <PlaylistsPage />
            </Route>
            <Route path="/lives">
              <LivesPage />
            </Route>
            <Route path="/telechargement">
              <TelechargementPage />
            </Route>
            <Route path="/parametre_compte">
              <ParametreComptePage />
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
