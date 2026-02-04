import { useState } from "react";
import { useData } from "../../context/DataContext"

import { IsItemAlreadyExist } from "../../utils/homepage-functions";

const ParagraphDisplay = () => {
    const {paragraph, selectedItems, setSelectedItems} = useData();

    

    // functions
    const handleClickOnSpan =(e) => {
        const item = e.target.dataset.word;
        const alreadyIn = IsItemAlreadyExist(item, selectedItems)

        if(alreadyIn) {
            setSelectedItems(pre => pre.filter(word => word !== item))
            
        } else {
            setSelectedItems(pre => [...pre, item] )
            
        }
    }

    //const handleDoubleClickOnSpan = (e) => {}

    return(
        <div className="paragraph-area">
            {paragraph.split(" ").map((word, i) => {
                return <span 
                key={i} data-id={i} data-word={word} className={`paragraph-span ${IsItemAlreadyExist(word, selectedItems) ? "selected-paragraph-span": ''}`} 
                onClick={handleClickOnSpan}
                >
                    {word}
                </span>
            })}
        </div>
    )
    
}


export default ParagraphDisplay;