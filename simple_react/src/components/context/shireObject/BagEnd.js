import React, { useState, useContext } from 'react';
import { ObjectContext } from '../ObjectContext'; 

function BagEnd() {
  const { activity, setActivity} = useContext(ObjectContext);

  return (
    <div className="user">
        <p> <b>Child: </b>BagEnd</p>
        <p> Activity { activity.today } </p>
    </div>
  );
}


export default BagEnd;
