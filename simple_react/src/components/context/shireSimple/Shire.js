import React, { useState, createContext, useContext, useEffect } from 'react';
import BagEnd from './BagEnd';
import GreenWater from './GreenWater';
import { ActivityContext } from './ActivityContext'; 

function Shire() {
  const [location, setLocation] = useState("Shire");
  const [activity, setActivity] = useState("What to do!");


  return (
    <div className="user">
      <p><b> Parent: </b> {location} | Activity: { activity } </p>

        <ActivityContext.Provider value = {{activity, setActivity}} > 
            <BagEnd />
            <GreenWater />
        </ActivityContext.Provider>
    </div>
  );
}


export default Shire;
