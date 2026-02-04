import { useData } from "../../context/DataContext"


const ParagraphButtons = () => {

    const { instructions, selectedItems, setSelectedItems, paragraph, copyToClipboard} = useData();

    const createPrompt = () => {
        if(selectedItems.length <= 0) {return};

        const selectedWords =  selectedItems.join("\n");
        const prompt = `${instructions}\n paragraph:\n ${paragraph}\n hard words:\n ${selectedWords}`
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



    return(
        <div className="paragraph-buttons-container">
            <button className="get-prompt-btn" onClick={handleGetPrompt}>{copyToClipboard? 'Copy the prompt' :'Open in ChatGPT'}</button>
            <button className="remove-last-btn" onClick={handleRemoveLastWord}>Remove last word</button>
            <button className="clear-btn" onClick={handleClear}>Clear</button>
            
        </div>
        
    )
}

export default ParagraphButtons;