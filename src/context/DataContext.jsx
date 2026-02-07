import { createContext, useContext, useEffect, useState,  } from "react";

import { BUILD_IN_INSTRUCTIONS, TEMP_TEXT } from "../utils/bildInInstructions";



const DataContext = createContext();


const DataProvider = ({children}) => {

    
        
    const [selectedItems, setSelectedItems] = useState([]);
    const [instructions, setInstructions] = useState(BUILD_IN_INSTRUCTIONS);

    
    const [paragraph, setParagraph] = useState('');

    
    return(
        <DataContext.Provider value={{ selectedItems, setSelectedItems, instructions, setInstructions, paragraph, setParagraph}}>
            {children}
        </DataContext.Provider>
    )

};

export const useData = () => useContext(DataContext);

export default DataProvider;