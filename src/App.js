import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Contests from './components/Contests';
import LoadingBar from 'react-top-loading-bar'
import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
const App = () => {
  const [progress, setProgress] = useState(0);
  return (
    <>
      <Router>
        <LoadingBar
          color='#f11946'
          progress={progress}
          height={3}
        />
        <Navbar />
        <div style={{ backgroundImage: "url(" + require("./img/bgimage.png") + "", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh" }}>
          <Routes>
            <Route exact path="/" element={<Contests setProgress={setProgress} key="all" category="all" />}></Route>
            <Route exact path="/codeforces" element={<Contests setProgress={setProgress} key="codeforces" category="codeforces" />}></Route>
            <Route exact path="/hacker_rank" element={<Contests setProgress={setProgress} key="hacker_rank" category="hacker_rank" />}></Route>
            <Route exact path="/leet_code" element={<Contests setProgress={setProgress} key="leet_code" category="leet_code" />}></Route>
            <Route exact path="/code_chef" element={<Contests setProgress={setProgress} key="code_chef" category="code_chef" />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App

