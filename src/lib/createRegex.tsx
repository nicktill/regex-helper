const createRegex = async (
  unformattedText: string,
  apiKey: string,
  languageType: string
): Promise<string> => {
  const prompt = `Based on this input text here: 

 ${unformattedText}

 Can you write me a simple function in Python to remove all the formatting issues and other nonsense data so that only the human readable text shows in legible format? 

  
  Return ONLY the code in one single code block, with no other information or boilerplate text. Do not provide an explanation afterwards, I only want the code block returned. `;

  console.log(prompt);
  const response = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      prompt,
      temperature: 0.5,
      max_tokens: 2048,
      n: 1,
      stop: "\\n",
      model: "text-davinci-003",
      frequency_penalty: 0.5,
      presence_penalty: 0.5,
      logprobs: 10,
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    console.log(response);
    throw new Error(data.error || "Error translating to SQL.");
  }

  return data.choices[0].text.trim();
};

export default createRegex;
