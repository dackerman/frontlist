import React from 'react';

import Fonts from './Fonts.js';

import FullScreenImage from './FullScreenImage.jsx';
import Menu from './Menu.jsx';
import Signup from './Signup.jsx';
import About from './About.jsx';
import Footer from './Footer.jsx';

import bg from './bg.png';

export default class App extends React.Component {
  render() {
    const menu = [
      { name: 'Home', link: '#home' },
      { name: 'About', link: '#about' }
    ];

    const appStyle = {
      display: 'flex',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      fontFamily: Fonts.content
    };
    
    return (
      <div id="home" style={appStyle}>
        <FullScreenImage image={bg} />
        <Menu menuItems={menu} />
        <Signup />
        <About />
        <Footer />
      </div>
    );
  }
}

