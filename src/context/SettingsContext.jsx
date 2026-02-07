import { createContext, useContext, useState, useEffect } from "react";

const SettingsContext = createContext();

const SettingsProvider= ({children}) => {

    const localValForcopyToClipboard = () => {
        const saved = localStorage.getItem("copyToClipboard");
        return( saved !== null ? JSON.parse(saved) : true)
    }
    const [copyToClipboard, setCopyToClipboard] = useState(localValForcopyToClipboard);

    useEffect(() => {
        localStorage.setItem(
            "copyToClipboard",
            JSON.stringify(copyToClipboard)
        );
    },[copyToClipboard]);


    return(
        <SettingsContext.Provider value={{copyToClipboard, setCopyToClipboard,}}>
            {children}
        </SettingsContext.Provider>
    )

};


export const useSettings = () => useContext(SettingsContext);

export default SettingsProvider;