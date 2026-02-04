import { useData } from "../context/DataContext";

const Settings = () => {
    
    const {copyToClipboard, setCopyToClipboard} = useData();

    const handleChange = (event) => {
        setCopyToClipboard(event.target.value === "copy");
    };

    return (
        <div className="setting-container">
            <h1>Settings</h1>
            <h3>Get prompt button settings</h3>
            <form className="get-prompt-button-settings" onSubmit={(e) => e.preventDefault()}>
            
            <label>
            <span>Copy to clipboard</span>
            <input 
                type="radio" 
                name="whatGetPromptBtnDo"  // This name must match across all options!
                value="copy" 
                checked={copyToClipboard === true} 
                onChange={handleChange} 
            /> 
            </label>

            <label>
            <span>Open with ChatGPT</span>
            <input 
                type="radio" 
                name="whatGetPromptBtnDo" 
                value="chatgpt" 
                checked={copyToClipboard === false} 
                onChange={handleChange} 
            />
            </label>
            </form>
        </div>
    );
    
}


export default Settings