import { useState, useEffect } from "react";


import { useData } from "../context/DataContext";
import ParagraphDisplay  from "../components/Home/ParagraphDisplay"
import ParagraphButtons from "../components/Home/ParagraphButtons";


import { BUILD_IN_INSTRUCTIONS } from "../utils/bildInInstructions";
import { handleHomepagePaste } from "../utils/homepage-pasteListener"



const Home = () => {
    const {paragraph, setParagraph, setSelectedItems} = useData()


    useEffect(() => {

        const atPaste = handleHomepagePaste(setParagraph, setSelectedItems);

        return atPaste;

    }, []);

    return (
    <div className="homepage-container">
        <div className="instructions-window" ><pre>{BUILD_IN_INSTRUCTIONS} </pre></div>

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