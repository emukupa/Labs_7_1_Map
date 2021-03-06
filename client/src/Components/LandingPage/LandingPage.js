import React from 'react';

import LogInBay from './LogInBay';
import FailedLoginPopUp from './FailedLoginPopUp';
import Footer from '../Footer/Footer';

import Logo from '../../logo.png';
import './LandingPage.css';

const LandingPage = props => {
  var PopUp;
  if (props.failedLogin === true) {
    PopUp = <FailedLoginPopUp />;
    console.log('failure!!!!!');
  } else {
    PopUp = <div> </div>;
  }
  return (
    <div className="LandingPage">
      <img src={Logo} alt="logo" className="LandingPage__Logo" />

      <h3 className="LandingPage__Tagline">
        Scratch the Itch to Track Your Trips
      </h3>
      <LogInBay />
      {PopUp}
      <Footer />
    </div>
  );
};

export default LandingPage;
