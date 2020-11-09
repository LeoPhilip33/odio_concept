import React, { Component } from 'react';

class Btn_fb_gg extends Component {
  render () {
    return (
    <div className="flex_inscription">
        <div className="fle_btn_facebook_logo">
          <div className="bouton_inscription_fb_gg">
            <img className="icon_fb" src={icon_fb}/>
            <div>Facebook</div>
          </div>
        </div>
        <div className="fle_btn_facebook_logo">
          <div className="bouton_inscription_fb_gg">
            <img className="icon_google" src={icon_google}/>
            <div>Google</div>
          </div>
        </div>
    </div>
    );
  }
}

export default Btn_bf_gg;
