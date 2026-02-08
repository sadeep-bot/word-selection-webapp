import { useState, useEffect } from "react";


import { useData } from "../context/DataContext";
import { useSettings } from "../context/SettingsContext";
import ParagraphDisplay  from "../components/Home/ParagraphDisplay"
import ParagraphButtons from "../components/Home/ParagraphButtons";
import ShowInstructionButton from "../components/Home/ShowInstructionButton";
import InstructionsWindow from "../components/Home/InstructionsWindow";


import { handleHomepagePaste } from "../utils/homepage-pasteListener"



const Home = () => {
    const {paragraph, setParagraph, setSelectedItems} = useData();
    const {showInstruction} = useSettings()


    useEffect(() => {

        const atPaste = handleHomepagePaste(setParagraph, setSelectedItems);

        return atPaste;

    }, []);

    return (
    <div className="homepage-container">

        {showInstruction ? <InstructionsWindow /> : <></> }
        <ShowInstructionButton />

        <div className="paragraph-entering-window">
            <input type="text" value={paragraph}  onChange={(e) => setParagraph(e.target.value)}/> 
            <button className="text-entering-bnt">Enter</button>
        </div>

        <div className="paragraph-window">
            
            <ParagraphDisplay /> 
            <ParagraphButtons /> 
        </div>
    </div>)
};


export default Home