import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Contests from './components/Contests';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
export class App extends Component {
  render() {
    return (
      <>
        <Router>
        <Navbar/>
        <Routes>
          <Route exact path = "/" element = {<Contests  key = "all" category = "all"/>}></Route>
          <Route exact path = "/codeforces" element = {<Contests key = "codeforces" category = "codeforces"/>}></Route>
          <Route exact path = "/hacker_rank" element = {<Contests key = "hacker_rank" category = "hacker_rank"/>}></Route>
          <Route exact path = "/leet_code" element = {<Contests key = "leet_code" category = "leet_code"/>}></Route>
          <Route exact path = "/kick_start" element = {<Contests key = "kick_start" category = "kick_start"/>}></Route>
          <Route exact path = "/code_chef" element = {<Contests key = "code_chef" category = "code_chef"/>}></Route>
        </Routes>
        </Router>
      </>
    )
  }
}

export default App

