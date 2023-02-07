import React, { useState } from 'react';

function Shire() {
  const [name, setLocation] = useState("Shire");
  const activity = useContext(Context);

  return (
    <div className="user">
      <p>Name {name} </p>
      <p> Location: Shire </p>
      <p> Context: { activity } </p>
    </div>
  );
}


export default Shire;
