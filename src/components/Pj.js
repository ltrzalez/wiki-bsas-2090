import React from "react";
import { useState } from "react/cjs/react.development";
import data from '../data.json';

const personajes = (data)
console.log(data)


function Pj () {

    const [ idPersonajes, setIdPersonajes] = useState(-1)


    return (
        <div className="row">
            <div className="col">
                <h3>Character</h3>
                <select name="personajes" id="selPersonajes">
                    <option value={-1}> Seleccione un personaje</option>
                    {
                    personajes.map((element, index)=>
                    {
                        return <option key={"personajes"+index} value={index} >{element.fullName}</option>}
                    )}
                    
                </select>
            </div>
            <div className="col">
                <h3>Character Photo</h3>
            </div>



        </div>
    )

}

export default Pj;