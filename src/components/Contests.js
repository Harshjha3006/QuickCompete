import React, { Component } from "react";
import ContestItem from "./ContestItem";
import Spinner from "./Spinner";

export class Contests extends Component {
  constructor(){
    super();
    this.state = {
      contests  : [],
      loading : false
    }
  }
  async componentDidMount(){
    this.props.setProgress(10);
    this.setState({
      loading : true
    })
    let data = await fetch(`https://kontests.net/api/v1/${this.props.category}`);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(80);
    this.setState({
      contests : parsedData,
      loading : false
    });
    this.props.setProgress(100);

  }
  format = (text)=>{
     text = text.replace(/[^a-zA-Z]/g,"");
     return text[0].toUpperCase() + text.slice(1);
  }
  render() {
    return (
      <>
      <div className="container"><h1 className = "text-center">{this.format(this.props.category)} Contests</h1></div>
      {this.state.loading && <Spinner/>}
      <div className="container" style = {{display : 'grid',
      gridTemplateColumns : 'repeat(auto-fit,minmax(375px,1fr))',
      gridGap : '25px',
      marginTop : '50px'}}>
      {!this.state.loading && this.state.contests.map((element)=>{
        return <ContestItem key = {element.url} name = {element?element.name:""} url = {element.url} start_time = {element?element.start_time:""} end_time = {element?element.end_time:""}
        duration = {element?element.duration:""}/>
      })}
        </div>
      </>
    );
  }
}

export default Contests;
