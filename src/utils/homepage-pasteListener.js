
export const handleHomepagePaste = (setParagraph, setSelectedItems) => {

    const handlePaste = (e) => {
        const newText = e.clipboardData.getData("text");

        setParagraph(newText);
        setSelectedItems([]);
    };

    window.addEventListener('paste', handlePaste);

    return () => {
        window.removeEventListener("paste", handlePaste);
    };
}; 