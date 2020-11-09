import React from 'react';

const Cars = ({children, color }) => {

  const colorInfo = color ? (<p> Couleur : { color } </p>) : (<p> Couleur : Pas de couleur !</p>) // On test voir si couleur existe sinon on dit qu'ils n'y a pas de couleur

  if(children) {
    return (
      <div>
          <p> Marque : { children } </p>
          { colorInfo }
      </div>
    )
  } else{

    return (
      <div>
        <p> Marque : Pas de marque !</p>
      </div>
    )
  }

}

export default Cars;
