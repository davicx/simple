import React, { useState, useContext } from 'react';
import { ObjectContext } from '../ObjectContext'; 

function GreenWater() {
  const { activity, setActivity } = useContext(ObjectContext);

  const handleSubmit = () => {
        setActivity({today: "Go on a hike!"})
    }

  return (
    <div className="user">
      <p> <b>Child: </b> Green Water </p>
      <p> Activity { activity.today } </p>
      <button onClick={ handleSubmit }> Update Activity </button>
    </div>
  );
}


export default GreenWater;

