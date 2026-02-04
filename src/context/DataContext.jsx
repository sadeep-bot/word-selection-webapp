import { createContext, useContext, useEffect, useState,  } from "react";

import { BUILD_IN_INSTRUCTIONS, TEMP_TEXT } from "../utils/bildInInstructions";



const DataContext = createContext();


const DataProvider = ({children}) => {

    
        
    const [selectedItems, setSelectedItems] = useState([]);
    const [instructions, setInstructions] = useState(BUILD_IN_INSTRUCTIONS);

    
    const [paragraph, setParagraph] = useState('');

    //------------------------------------ settings --------------------------------------//
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
    // ------------------------------------------------------------------------------------- //

    return(
        <DataContext.Provider value={{copyToClipboard, setCopyToClipboard, selectedItems, setSelectedItems, instructions, setInstructions, paragraph, setParagraph}}>
            {children}
        </DataContext.Provider>
    )

};

export const useData = () => useContext(DataContext);

export default DataProvider;