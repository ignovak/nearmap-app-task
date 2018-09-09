import React, { Component } from 'react';
import './Map.css';
import backgroundMap from './background-map.jpg';

class Map extends Component {
  constructor() {
    super();
    this.state = {
      selectedMarker: ''
    }
  }

  onClick(e) {
    this.setState({
      selectedMarker: e.target.dataset.name
    });
  }

  render() {
    return (
      <div className="Map" onClick={this.onClick.bind(this)}>
        <img src={backgroundMap} className="Map-background" alt="Map background" />
        {
          this.props.data.map(
            _ => <div
              className={'Map-marker' + (this.state.selectedMarker === _.name ? ' selected' : '')}
              key={_.name}
              style={{left: _.position[0], top: _.position[1]}}
              data-name={_.name}
            ></div>
          )
        }
      </div>
    );
  }
}

export default Map;
