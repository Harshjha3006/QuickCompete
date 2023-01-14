import React, { Component } from "react";

export class ContestItem extends Component {
  render() {
    let { name, url, start_time, end_time, duration } = this.props;
    return (
      <>
        <div className="card" style={{ width: "21rem" }}>
          <img
            src="data:image/png;base64,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"
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
