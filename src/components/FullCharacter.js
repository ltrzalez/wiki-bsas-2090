import React, { useState} from 'react';
import { useGlobalContext } from '../context'


function FullCharacter() {
    const { allCharacters } = useGlobalContext()
    const [loading, setLoading] = useState(false)

    function changeLoading(){
        setLoading(!loading);
        console.log(loading)
    }

  return <div>
      <h1 style={{ textAlign: "center"}}>{allCharacters[0].id}</h1>
      <img alt={allCharacters[0].id}></img>
      <button onClick={changeLoading}>texto</button>

  </div>;
}

export default FullCharacter;
