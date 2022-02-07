import React from "react";
// import { useState } from "react/cjs/react.development";
import { useGlobalContext } from '../context';
import Pj from "./Pj";



function Title() {
  const { allCharacters, selectedCharacter, setSelectedCharacter } = useGlobalContext()
  // const [estadoPj, cambiarEstadoPj ] = useState(false);
  // const cambiarPj = () => {
  //   cambiarEstadoPj(!estadoPj);
  // }
  return (
    <div className="header">
      <h1 style={{ textAlign: "center"}}>2090</h1>
      {/* <button onClick={cambiarPj}>Cambiar Pj</button> */}
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

        <h3>El personaje es:</h3><h3>{selectedCharacter.fullName}</h3>
        {/* <h3>Pj seleccionado: {estadoPj ? "pj seleccionado" : "sin seleccion de pj"}</h3>
        <h1>{estadoPj ? "Imagen uno" : "Imagen dos"}</h1> */}
      </div>

      <Pj/>

    </div>
    
  );
}
export default Title;
