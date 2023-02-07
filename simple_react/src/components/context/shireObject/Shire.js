import React, { useState, createContext, useContext, useEffect } from 'react';
import BagEnd from './BagEnd';
import GreenWater from './GreenWater';
import { ObjectContext } from '../ObjectContext'; 

function Shire() {
  const [activity, setActivity] = useState({today: "Have fun!"});

  return (
    <div className="user">
      <p><b> Parent: </b> Shire Activity: { activity.today } </p>

        <ObjectContext.Provider value = {{activity, setActivity}} > 
            <BagEnd />
            <GreenWater />
        </ObjectContext.Provider>
    </div>
  );
}


export default Shire;
