import React from "react";
import { useState } from "react/cjs/react.development";
import data from '../data.json';
import { useGlobalContext } from '../context';


const personajes = (data)
console.log(data)


function Pj () {

    const { selectedCharacter } = useGlobalContext()

    return (
        <div className="row">

          <h1 style={{textAlign: 'center', color: 'white'}}>{selectedCharacter.fullName}</h1>
            {/* <div className="col">
              <p>Eliga un personaje</p>
                <select name="personajes" id="selPersonajes"
                   onChange={ (e) => {
                    const pjElegido =  allCharacters[e.target.value]
                    setSelectedCharacter(pjElegido)
                  }} 
                >                    
                  {
                    personajes.map((element, index)=>
                    {
                        return <option key={"personajes"+index} value={element.id} >{element.fullName}</option>
                    })
                  }                    
                </select>
            </div>
            
            <div className="col">
                <h3>Character Photo</h3>
            </div> */}
        </div>
    )

}

export default Pj;