import React from 'react';

export default class Menu extends React.Component {
  render() {
    const itemStyle = {
      listStyle: 'none',
      display: 'inline',
      padding: '5px'
    };
    
    const listStyle = {
      padding: 0
    };
    
    const menuItems = this.props.menuItems.map(item => (
      <li style={itemStyle} key={item.name}>
        <a href={item.link}>{item.name}</a>
      </li>
    ));

    return (
      <ul style={listStyle}>
        {menuItems}
      </ul>
    );
  }
}

const menuItem = React.PropTypes.shape({
  name: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired
});

Menu.propTypes = {
  menuItems: React.PropTypes.arrayOf(menuItem).isRequired
};
