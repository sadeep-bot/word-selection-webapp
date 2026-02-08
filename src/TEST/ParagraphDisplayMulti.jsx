import { useState } from "react";
import { useData } from "../context/DataContext";
import { IsItemAlreadyExist } from "../utils/homepage-functions";

const ParagraphDisplayMulti = () => {
  const { paragraph, selectedItems, setSelectedItems } = useData();

  const handleClickOnSpan = (e) => {
    const item = e.target.dataset.word;
    const alreadyIn = IsItemAlreadyExist(item, selectedItems);

    if (alreadyIn) {
      setSelectedItems((pre) => pre.filter((word) => word !== item));
    } else {
      setSelectedItems((pre) => [...pre, item]);
    }
  };

  let globalIndex = 0; // keep unique index across paragraphs

  return (
    <div className="paragraph-area">
      {paragraph.split("\n\n").map((para, pIndex) => (
        <p key={pIndex}>
          {para.split(" ").map((word) => {
            const currentIndex = globalIndex++;
            return (
              <span
                key={currentIndex}
                data-id={currentIndex}
                data-word={word}
                className={`paragraph-span ${
                  IsItemAlreadyExist(word, selectedItems) ? "selected-paragraph-span" : ""
                }`}
                onClick={handleClickOnSpan}
              >
                {word}{" "}
              </span>
            );
          })}
        </p>
      ))}
    </div>
  );
};

export default ParagraphDisplayMulti;
