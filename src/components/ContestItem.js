import React from "react";
import { SiLeetcode, SiCodeforces, SiCodechef, SiHackerrank } from "react-icons/si"
const ContestItem = (props) => {
  let { name, url, start_time, end_time, duration, category } = props;
  const icons = {
    "leet_code": SiLeetcode,
    "codeforces": SiCodeforces,
    "hacker_rank": SiHackerrank,
    "code_chef": SiCodechef,
    "all": null
  }
  const Icon = icons[category];
  return (
    <>
      <div className="card" style={{ width: '21rem', backgroundColor: "#D3D3D3" }} >
        {Icon ?
          (<div className="text-center my-2">
            <Icon size={50} />
          </div>) : (<div></div>)}
        <div className="card-body">
          <h5 className="card-title">{name} </h5>
          <div className="card-text my-1 ">Starts at : {new Date(start_time).toLocaleString()}</div>
          <div className="card-text my-1">Ends at : {new Date(end_time).toLocaleString()}</div>
          <div className="card-text my-1">Duration : {duration / 3600} hrs</div>
          <a href={url} className="btn btn-primary my-2">
            Go To Contest
          </a>
        </div>
      </div>
    </>
  );
}

export default ContestItem;
