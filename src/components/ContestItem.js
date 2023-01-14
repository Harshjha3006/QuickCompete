import React, { Component } from "react";

export class ContestItem extends Component {
  render() {
    let { name, url, start_time, end_time, duration } = this.props;
    return (
      <>
        <div className="card" style = {{width : '21rem'}} >
          <img
            src=""
            className="card-img-top"
            style = {{padding : '13px'}}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <div className="card-text my-1 ">Starts at : {start_time}</div>
            <div className="card-text my-1">Ends at : {end_time}</div>
            <div className="card-text my-1">Duration : {duration}</div>
            <a href={url} className="btn btn-primary my-2">
              Go To Contest
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default ContestItem;
