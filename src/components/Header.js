import React from "react";
import { useGlobalContext } from '../context';

function Header() {
  const { allCharacters, setSelectedCharacter } = useGlobalContext()

  const handlerCargaPj = function (e) {
    const opcion = e.target.value;
    console.log(opcion);

    setSelectedCharacter(opcion);
  }  
  return (
    <header className="header">
      <h1 style={{ textAlign: "center"}}>2090</h1>      
        {/* <h3>Viendo el personaje =&gt; {selectedCharacter.fullName}</h3> */}
        <div className="col">
            <p>Eliga un personaje</p>
              <select name="personajes" id="selPersonajes" onClick={handlerCargaPj}
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
              <h3>Personajes</h3>
                {
                  allCharacters > -1 &&
                  (
                    <h1>hola</h1>
                  )
                }
              
          </div>
    </header>
  )
}
export default Header;
