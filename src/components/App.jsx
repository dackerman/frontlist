import React from 'react';

import FullScreenImage from './FullScreenImage.jsx';
import Menu from './Menu.jsx';

import bg from './bg.png';

export default class App extends React.Component {
  render() {
    const menu = [
      { name: 'herp', link: 'https://google.com' },
      { name: 'herp2', link: 'https://google.com' }
    ];

    const flexbox = {
      display: 'flex',
      justifyContent: 'center',
      fontFamily: 'Helvetica, Arial, sans-serif'
    };
    
    return (
      <div style={flexbox}>
        <FullScreenImage image={bg} />
        <Menu menuItems={menu} />
      </div>
    );
  }
}

