import { createContext, useContext, useState, useEffect } from "react";

import { DEFAULT_SETTINGS } from "../utils/defaultSettings";
import { saveChangesToLocalStorage, getSettingsFromLocalStorage } from "../utils/SettingsContext-functions";

const SettingsContext = createContext();

const SettingsProvider= ({children}) => {

    const [copyToClipboard, setCopyToClipboard] = useState(DEFAULT_SETTINGS.copyToClipboard);
    const [showInstruction, setShowInstruction] = useState(DEFAULT_SETTINGS.showInstruction);

    useEffect(() => {
        const settings = getSettingsFromLocalStorage();

        setCopyToClipboard(settings.copyToClipboard);
        setShowInstruction(settings.showInstruction);
    }, [])

    useEffect(()=> {
        saveChangesToLocalStorage({copyToClipboard, showInstruction});

    } ,[copyToClipboard, showInstruction])


    return(
        <SettingsContext.Provider value={{copyToClipboard, setCopyToClipboard, showInstruction, setShowInstruction}}>
            {children}
        </SettingsContext.Provider>
    )

};


export const useSettings = () => useContext(SettingsContext);

export default SettingsProvider;