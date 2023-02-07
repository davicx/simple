import React, { useState, useContext } from 'react';
import { ActivityContext } from './ActivityContext'; 

function GreenWater() {
  const [place, setLocation] = useState("Green Water");
  const { activity, setActivity } = useContext(ActivityContext);

  const handleSubmit = (event) => {
        setActivity("Go on a hike!")
    }

  return (
    <div className="user">
      <p> <b>Child </b></p>
      <p> Location: {place} | Activity { activity } </p>
      <button onClick={ handleSubmit }> Update Activity </button>
    </div>
  );
}


export default GreenWater;

