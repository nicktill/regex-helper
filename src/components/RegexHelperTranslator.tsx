// RegexHelper.tsx
import React, { useState } from "react";

interface RegexHelperProps {}

const RegexHelperTranslator: React.FC<RegexHelperProps> = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = () => {
    // Call OpenAI API to create a regex expression and set the outputText
  };
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <div className="grid grid-cols-2 gap-4">
        <textarea
          className="bg-opacity-40 bg-gray-900 text-white p-2 rounded w-80 h-40 resize-none"
          value={inputText}
          onChange={handleInputChange}
          placeholder="00:00:00 --> 00:00:03
          Hey everyone, welcome to my channel.
          "
        ></textarea>
        <textarea
          className="bg-opacity-40 bg-gray-900 text-white p-2 rounded w-80 h-40 resize-none"
          value={outputText}
          readOnly
          placeholder="Hey everyone, welcome to my channel.
          text"
        ></textarea>
      </div>
    </div>
  );
};

export default RegexHelperTranslator;
