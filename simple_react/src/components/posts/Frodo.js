import React, { useState } from 'react';

function Frodo() {
  const [name, setLocation] = useState("Frodo");

  return (
    <div className="user">
      <p>Name {name} </p>
      <p> Location: Shire </p>
    </div>
  );
}


export default Frodo;
