import React from "react";
import { useGlobalContext } from '../context';

function Header() {
  const { allCharacters, setSelectedCharacter } = useGlobalContext()  
  return (
    <header className="header">
      <h1 style={{ textAlign: "center"}}>2090</h1>      
        {/* <h3>Viendo el personaje =&gt; {selectedCharacter.fullName}</h3> */}
        <div className="col">
            <p>Eliga un personaje</p>
              <select name="personajes" id="selPersonajes"
                  onChange={ (e) => {
                  const pjElegido =  allCharacters[e.target.value]
                  setSelectedCharacter(pjElegido)
                }} 
              >                    
                {
                  allCharacters.map((element, index)=>
                  {
                      return <option key={index} value={element.id} >{element.fullName}</option>
                  })
                }                    
              </select>
          </div>
    </header>
  )
}
export default Header;
