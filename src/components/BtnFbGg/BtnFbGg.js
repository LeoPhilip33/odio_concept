import React, { Component } from 'react';
import "./BtnFbGg.css";
import icon_fb from '../img/icon_fb.svg';
import icon_google from '../img/icon_google.svg';


class BtnFbGg extends Component {
  render () {
    return (
    <div className="flex_inscription">
        <div className="fle_btn_facebook_logo">
          <div className="BtnFBGg">
            <img className="icon_fb" src={icon_fb.svg}/>
            <div>Facebook</div>
          </div>
        </div>
        <div className="fle_btn_facebook_logo">
          <div className="BtnFBGg">
            <img className="icon_google" src={icon_google.svg}/>
            <div>Google</div>
          </div>
        </div>
    </div>
    );
  }
}

export default BtnFbGg;
