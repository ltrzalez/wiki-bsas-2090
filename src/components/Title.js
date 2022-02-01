import React from "react";
import { useState } from "react/cjs/react.development";
import { useGlobalContext } from '../context'

function Title() {
  const { allCharacters, selectedCharacter, setSelectedCharacter } = useGlobalContext()

  return (
    <header>
      <h1 style={{ textAlign: "center"}}>2090</h1>

      <select
        onChange={ (e) => {
          const pjElegido =  allCharacters[e.target.value]
          setSelectedCharacter(pjElegido)
        }} id="allCharacters"
      >

        {allCharacters.map((element, index)=>
          { 
            return <option key={index} value={element.id} >{element.fullName}</option>}
        )}
      </select>
      <div>
        <h1>{selectedCharacter.fullName}</h1>
      </div>
    </header>
    
  );
}
export default Title;
