import React, { useContext, useState } from 'react'
import data from './data.json'

const AppContext = React.createContext()


const AppProvider = ({ children }) => {
    const [allCharacters, setAllCharacters] = useState(data)

    return <AppContext.Provider value={{
        allCharacters
    }}>{ children }</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }