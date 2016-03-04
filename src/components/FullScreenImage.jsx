import React from 'react';

export default class FullScreenImage extends React.Component {
  render() {
    const img = this.props.image;
    const style = {
      zIndex: -1,
      backgroundImage: `url(${img})`,
      backgroundSize: 'cover',
      opacity: 0.5,
      position: 'absolute',
      margin: 0,
      padding: 0,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    };
    return <div style={style}></div>;
  }
}

FullScreenImage.propTypes = {
  image: React.PropTypes.string.isRequired
};
