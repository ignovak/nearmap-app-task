import React, { Component } from 'react';
import './Map.css';
import backgroundMap from './background-map.jpg';
import marker from './marker.png';
import selectedMarker from './marker-selected.png';

class Map extends Component {
  constructor() {
    super();
    this.state = {
      selectedMarker: -1
    }
  }

  onClick(e) {
    this.setState({
      selectedMarker: Number(e.target.dataset.index)
    });
  }

  render() {
    return (
      <div className="Map" onClick={this.onClick.bind(this)}>
        <img src={backgroundMap} className="Map-background" alt="Map background" />
        {
          this.props.data[this.state.selectedMarker] ?
            <div className="Map-details">
              <dl>
                {
                  Object.entries(this.props.data[this.state.selectedMarker]).map(([key, value]) => [
                    <dt className="Map-details-key" key={key}>{key}</dt>,
                    <dd className="Map-details-value" key={value}>{value}</dd>
                  ])
                }
              </dl>
            </div> : ''
        }
        {
          this.props.data.map(
            (_, index) => <img
              className="Map-marker"
              src={this.state.selectedMarker === index ? selectedMarker : marker}
              alt={_.name}
              key={index}
              style={{left: _.position[0], top: _.position[1]}}
              data-index={index}
            />
          )
        }
      </div>
    );
  }
}

export default Map;
