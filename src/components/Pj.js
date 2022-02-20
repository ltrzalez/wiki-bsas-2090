import React from "react";
import { useState } from "react/cjs/react.development";
import data from '../data.json';
import { useGlobalContext } from '../context';



const personajes = (data)
console.log(data)


function Pj () {

    const { selectedCharacter } = useGlobalContext()

    return (
        <div className="row" width="50%" height="50%">

          <h1 style={{textAlign: 'center', color: 'white'}}>{selectedCharacter.fullName}</h1>
          <img src={selectedCharacter.img} width="500" height="500"></img>
        </div>
    )

}

export default Pj;