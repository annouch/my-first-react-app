import React, { Component } from "react";

class Helloo extends Component {
  render() {
    return <h1>Bonjour {this.props.nom}</h1>;
  }
}

export default Helloo;