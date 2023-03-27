import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import OpenAI from "openai";
import formatText from "../lib/formatText";
import createRegex from "../lib/createRegex";

const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY || "";

const Home: NextPage = () => {
  const [rawText, setRawText] = useState("");
  const [formattedText, setFormattedText] = useState("");
  const [regexCode, setRegexCode] = useState("");

  const generateBothInfo = async () => {
    generateRegex();
    generateFormattedText();
  };

  const generateRegex = async () => {
    try {
      const regexCode = await createRegex(rawText, API_KEY, "Python");
      setRegexCode(regexCode);
      console.log(regexCode);
    } catch (error) {
      console.log("error retrieving the regex code", error);
    }
  };

  const generateFormattedText = async () => {
    try {
      const formattedText = await formatText(rawText, API_KEY);
      setFormattedText(formattedText);
    } catch (error) {
      console.log("error retrieving the formatted version", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-200">
      <h1 className="text-3xl font-bold mb-6 text-slate-500">
        Auto-Formatter for Regex
      </h1>
      <div className="p-10 rounded-lg bg-gray-100 flex flex-col items-start justify-center">
        <label
          htmlFor="raw-text"
          className="text-sm text-slate-500 font-bold mb-2"
        >
          Raw Text Data
        </label>
        <textarea
          id="raw-text"
          value={rawText}
          onChange={(e) => setRawText(e.target.value)}
          className="py-4 px-6 rounded-lg w-60 text-lg focus:outline-none mb-4"
        />
        <button
          onClick={generateBothInfo}
          className="py-2 px-4 bg-slate-500 text-white rounded-lg"
        >
          Generate Text/Regex
        </button>
      </div>
      <div className="p-10 rounded-md bg-gray-100 flex flex-row items-start justify-center mt-8">
        <div className="flex flex-col mr-8">
          <label
            htmlFor="formatted-output"
            className="text-sm font-bold mb-2 text-slate-500"
          >
            Formatted Output
          </label>
          <textarea
            id="formatted-output"
            value={formattedText}
            onChange={(e) => setFormattedText(e.target.value)}
            className="py-4 px-6 rounded-lg w-full h-48 text-lg focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="regex-code"
            className="text-sm font-bold mb-2 text-slate-500"
          >
            Regex Code
          </label>
          <input
            id="regex-code"
            value={regexCode}
            onChange={(e) => setRegexCode(e.target.value)}
            className="py-4 px-6 rounded-lg w-full h-48 text-lg focus:outline-none language-python hljs"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
