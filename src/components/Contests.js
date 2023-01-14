import React, { Component } from "react";
import ContestItem from "./ContestItem";

export class Contests extends Component {
  constructor(){
    super();
    this.state = {
      contests  : [],
      loading : false
    }
  }
  async componentDidMount(){
    let data = await fetch("https://kontests.net/api/v1/codeforces");
    let parsedData = await data.json();
    this.setState({
      contests : parsedData
    });

  }
  render() {
    return (
      <>
      <div className="container"><h1>CodeForces Contests</h1></div>
      <div className="container" style = {{display : 'grid',
      gridTemplateColumns : 'repeat(auto-fit,minmax(375px,1fr))',
      gridGap : '25px',
      marginTop : '50px'}}>
      {this.state.contests.map((element)=>{
        return <ContestItem key = {element.url} name = {element?element.name:""} url = {element.url} start_time = {element?element.start_time:""} end_time = {element?element.end_time:""}
        duration = {element?element.duration:""}/>
      })}
        </div>
      </>
    );
  }
}

export default Contests;
