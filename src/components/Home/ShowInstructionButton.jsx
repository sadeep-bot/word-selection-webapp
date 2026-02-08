import { useSettings } from "../../context/SettingsContext"

const ShowInstructionButton = () => {
    const { showInstruction, setShowInstruction } = useSettings()

    const handleClick = () => {
        setShowInstruction(!showInstruction) 
    }

    const buttonText = () => {
        if(showInstruction) {
            return "Hide Instructions"
        }
        return "Show Instructions"
    }

    return(
        <div>
            <button className="show-instruction-BTN" onClick={handleClick}> {buttonText()} </button>
        </div>
    )
}


export default ShowInstructionButton;