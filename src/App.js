import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Contests from './components/Contests';
export class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <Contests/>
      </>
    )
  }
}

export default App

