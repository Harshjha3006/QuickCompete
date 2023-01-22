import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Contests from './components/Contests';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
export class App extends Component {
  constructor(){
    super();
    this.state = {
      progress : 0
    }
  }
  setProgress = (progress)=>{
    this.setState({
      progress : progress
    })
  }
  render() {
    return (
      <>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height = {3}
      />
        <Navbar/>
        <Routes>
          <Route exact path = "/" element = {<Contests setProgress = {this.setProgress}  key = "all" category = "all"/>}></Route>
          <Route exact path = "/codeforces" element = {<Contests setProgress = {this.setProgress} key = "codeforces" category = "codeforces"/>}></Route>
          <Route exact path = "/hacker_rank" element = {<Contests setProgress = {this.setProgress} key = "hacker_rank" category = "hacker_rank"/>}></Route>
          <Route exact path = "/leet_code" element = {<Contests setProgress = {this.setProgress} key = "leet_code" category = "leet_code"/>}></Route>
          <Route exact path = "/kick_start" element = {<Contests setProgress = {this.setProgress} key = "kick_start" category = "kick_start"/>}></Route>
          <Route exact path = "/code_chef" element = {<Contests setProgress = {this.setProgress} key = "code_chef" category = "code_chef"/>}></Route>
        </Routes>
        </Router>
      </>
    )
  }
}

export default App

