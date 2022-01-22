import React from "react";
import { useGlobalContext } from '../context'

function Title() {
  const { allCharacters } = useGlobalContext()

  return (
    <header>
      <h1 style={{ textAlign: "center"}}>2090</h1>
      <input list="allCharacters" id="pj" placeholder="busca tu pj favorito"></input>
      <datalist id="allCharacters">
        {allCharacters.map((value, index)=>
          { console.log(value)
            return <option key={index} value={value.fullName} ></option>}
        )}
      </datalist>
    </header>
  );
}
export default Title;
