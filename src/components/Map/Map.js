import React, { Component } from 'react';
import './Map.css';
import backgroundMap from './background-map.jpg';

class Map extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div className="Map">
        <img src={backgroundMap} className="Map-background" />
        {
          this.props.data.map(
            _ => <div className="Map-marker" key={_.name} style={{left: _.position[0], top: _.position[1]}}>
            </div>
          )
        }
      </div>
    );
  }
}

export default Map;
