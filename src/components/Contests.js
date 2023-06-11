import React, { useState, useEffect } from "react";
import ContestItem from "./ContestItem";
import Spinner from "./Spinner";

const Contests = (props) => {
  let [contests, setContests] = useState([]);
  let [loading, setLoading] = useState(false);
  const update = async () => {
    props.setProgress(10);
    setLoading(true);
    let data = await fetch(`https://kontests.net/api/v1/${props.category}`);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(80);
    setContests(parsedData);
    setLoading(false);
    props.setProgress(100);
  }
  useEffect(() => {
    update();
    //eslint-disable-next-line
  }, []);

  const format = (text) => {
    text = text.replace(/[^a-zA-Z]/g, "");
    return text[0].toUpperCase() + text.slice(1);
  }
  return (
    <>
      <div className="container"><h1 className="text-center" style={{ marginTop: '60px' }}>{format(props.category)} Contests</h1></div>
      {loading && <Spinner style={{ backgroundColor: "blue" }} />}
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(375px,1fr))',
        gridGap: '25px',
        marginTop: '50px'
      }}>
        {!loading && contests.map((element) => {
          return <ContestItem key={element.url} name={element ? element.name : ""} url={element.url} start_time={element ? element.start_time : ""} end_time={element ? element.end_time : ""}
            duration={element ? element.duration : ""} category={props.category} />
        })}
      </div>
    </>
  );
}

export default Contests;
