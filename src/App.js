import "./App.css";
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Contests from './components/Contests';
import LoadingBar from 'react-top-loading-bar'
import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
/*
.overlay {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
}
*/
const App = () => {
  const [progress, setProgress] = useState(0);
  return (
    <>
      <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
      <Router>

        <Navbar />

        <div className="overlay" style={{
          backgroundImage: "url(" + require("./img/bgimage.png") + "",
          backgroundRepeat: "repeat", minWidth: "100vw", minHeight: "100vh",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          overflowX: "scroll"
        }}
        >

          <Routes>
            <Route exact path="/" element={<Contests setProgress={setProgress} key="all" category="all" />}></Route>
            <Route exact path="/codeforces" element={<Contests setProgress={setProgress} key="codeforces" category="codeforces" />}></Route>
            <Route exact path="/hacker_rank" element={<Contests setProgress={setProgress} key="hacker_rank" category="hacker_rank" />}></Route>
            <Route exact path="/leet_code" element={<Contests setProgress={setProgress} key="leet_code" category="leet_code" />}></Route>
            <Route exact path="/code_chef" element={<Contests setProgress={setProgress} key="code_chef" category="code_chef" />}></Route>
          </Routes>
        </div >

      </Router>

    </>
  )
}

export default App

