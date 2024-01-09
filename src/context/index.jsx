import { createContext, useState } from "react";

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
    const [loading,setLoading] = useState(true)
    const [data,setData] = useState([])
    const [important,setImportant] = useState([])
    const value = {
        setData,
        data,
        setImportant,
        important,
        setLoading,
        loading
    };
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}