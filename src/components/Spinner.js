import React, { Component } from "react";
import loading from './loading.gif';
export default class Spinner extends Component {
  render() {
    return (
      <div className = "text-center" style = {{width : '100vw', height : '70vh' ,display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
      <img src = {loading} alt = "loading gif"></img>
      </div>
    );
  }
}
