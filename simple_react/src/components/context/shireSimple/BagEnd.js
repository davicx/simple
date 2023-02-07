import React, { useState, useContext } from 'react';
import { ActivityContext } from './ActivityContext'; 

function BagEnd() {
  const [place, setLocation] = useState("BagEnd");
  const { activity, setActivity} = useContext(ActivityContext);

  return (
    <div className="user">
        <p> <b>Child </b></p>
        <p> Location: {place} | Activity { activity } </p>
    </div>
  );
}


export default BagEnd;
