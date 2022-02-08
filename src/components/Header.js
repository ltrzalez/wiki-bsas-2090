import React from "react";
import { useGlobalContext } from '../context';

function Header() {
  const { selectedCharacter } = useGlobalContext()  
  return (
    <header className="header">
      <h1 style={{ textAlign: "center"}}>2090</h1>      
        {/* <h3>Viendo el personaje =&gt; {selectedCharacter.fullName}</h3> */}
    </header>
  )
}
export default Header;
