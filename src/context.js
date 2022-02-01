import React, { useContext, useState } from 'react'
import data from './data.json'

const AppContext = React.createContext()


const AppProvider = ({ children }) => {
    const [allCharacters, setAllCharacters] = useState(data)
    const [selectedCharacter, setSelectedCharacter] = useState({})

    return <AppContext.Provider value={{
        allCharacters, selectedCharacter, setSelectedCharacter
    }}>{ children }</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }