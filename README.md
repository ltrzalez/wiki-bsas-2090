# Wiki Bs.As. 2090

# FASE DE DESARROLLO

Dado que es un proyecto de aprendizaje vamos a documentar el codigo en comentarios y este archivo va a ser el roadmap de los objetivos a lograr

## Estimacion de componentes

 - Header: con titulo de la wiki, barra de busqueda y desplabajes separadas por faccion para seleccionar pj
 - Seccion principal: con foto de personaje, descripcion de dos palabras y lorem de historia
 - seccion comentarios: comentarios hechos por otros pj sobre el pj seleccionado
 - footer: con datos de la app como: desarrolladores, contacto, link del repo

![alt boceto](https://github.com/ltrzalez/wiki-bsas-2090/blob/main/Boceto.png?raw=true)

## TODO:

 - usarGlobalContext() para saber que pj estamos usando [ ]
 - mover de Pj a Header, la barra de busqueda [ ]
 ```jsx
             <div className="col">
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
 ```
 - Trabajar en Pj, las cajas para las distintas info del Pj selecionado ej.: foto, lorem, desc. [ ]
 - Hacer el footer => Crear componente y agregarlo al archivo app
 - Hacer seccion comentarios