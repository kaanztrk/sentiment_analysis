import React, { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [history, setHistory] = useState([]);

  const url = "http://127.0.0.1:5000/";

  // Function to handle input change in the text field
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to post data to the server and update the history
  const postData = async (sentence) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ value: sentence }),
      });

      const data = await response.json();
      // Update the history with the current input and result
      setHistory((prevHistory) => [
        ...prevHistory,
        { input: sentence, result: data.result },
      ]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Function to handle form submission
  const handleSubmit = async () => {
    if (inputValue.trim() === "") return; // Prevent empty input
    try {
      postData(inputValue);
    } catch (error) {
      console.error("Error analyzing sentiment:", error);
    }
  };

  // Function to handle clearing the input field
  const handleClear = () => {
    setInputValue("");
  };

  return (
    <div className="bg">
      <div className="container">
        <h1>Sentiment Analysis App</h1>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your text"
          className="input-text"
        />
        <button className="btn btn-submit" onClick={handleSubmit}>
          Submit
        </button>
        <button className="btn btn-clear" onClick={handleClear}>
          Clear
        </button>
        <div className="sentiment-result-container">
          {/* Display the last recorded sentiment result */}
          {history.length > 0 && (
            <p className={history[history.length - 1].result.toLowerCase()}>
              Emotion: {history[history.length - 1].result.toUpperCase()}
            </p>
          )}
        </div>
        <div className="history">
          <h3 className="history-title">HISTORY</h3>
          <ul>
            {/* Display the history of input and sentiment results */}
            {history.map((item, index) => (
              <li key={index} className={item.result.toLowerCase()}>
                <div className="input-result-container">
                  <span className="history-input">Input: {item.input}</span>
                  <span className="history-result">
                    Emotion: {item.result.toUpperCase()}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
