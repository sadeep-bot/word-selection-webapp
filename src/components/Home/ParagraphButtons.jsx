import { useData } from "../../context/DataContext"

import {useState, useEffect } from "react";


const ParagraphButtons = () => {

    const { instructions, selectedItems, setSelectedItems, paragraph, copyToClipboard } = useData();

    const createPrompt = () => {

        //format the prompt
        if(selectedItems.length <= 0) {return};

        const selectedWords =  selectedItems.join("\n");
        const prompt = `${instructions}\n paragraph:\n ${paragraph}\n hard words:\n ${selectedWords}`;

        // empty the selected items
        setSelectedItems([]);

        return prompt;
    }

    const copyThePrompt = async () => {
        const prompt = createPrompt();

        if(!prompt){return};

        try {
        await navigator.clipboard.writeText(prompt);
        } catch {
        alert("Could not copy to clipboard.");
        }
    };

    const openChatGPT = () => {
        const prompt = createPrompt();

        if(!prompt){return};

        const encoded = encodeURIComponent(prompt);
        window.open(`https://chat.openai.com/?q=${encoded}`, "_blank");
    };

    const handleGetPrompt = () => {
        if(copyToClipboard){copyThePrompt();} else {
        openChatGPT();  }  
    }

    const handleRemoveLastWord = () => {
        setSelectedItems(pre => pre.slice(0,-1))
    }

    const handleClear = () => {setSelectedItems([])}

    //Disable buttons when selected items are empty.
    const [enableBTN , setEnableBTN]= useState(false);
    useEffect(()=> {
        if(selectedItems.length > 0){setEnableBTN(true)} else {
            setEnableBTN(false)
        }
    } , [selectedItems]);


    return(
        <div className="paragraph-buttons-container">
            <button className={`${enableBTN ? "active-button get-prompt-btn" : "deactive-button disabled-get-prompt-btn"}`} disabled={!enableBTN} onClick={handleGetPrompt}>{copyToClipboard? 'Copy the prompt' :'Open in ChatGPT'}</button>
            <button className= {`${enableBTN ? "active-button remove-last-btn" : "deactive-button disabled-remove-last-btn"}`} disabled={!enableBTN} onClick={handleRemoveLastWord}>Remove last word</button>
            <button className={`${enableBTN ? "active-button clear-btn" :"deactive-button disabled-clear-btn"}`} disabled={!enableBTN} onClick={handleClear}>Clear</button>
            
        </div>
        
    )
}

export default ParagraphButtons;