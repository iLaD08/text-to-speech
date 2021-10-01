import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [text, setText] = useState("");
  const [audio, setAudio] = useState(null);
  const key = "f14c43fb64bc41f2b6818ad05c98aabc";

  const handleRequest = () =>
    setAudio(`http://api.voicerss.org/?key=${key}&hl=en-us&src=${text}`);

  return (
    <div className="App">
      <div className="top">
        <h1>Text to speech</h1>
        <div className="audio-form">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeHolder="Type text here..."
          />
          <button onClick={handleRequest}>Send</button>
        </div>
      </div>
      <div className="audio">
        <iframe
          title="yay"
          src={audio}
          width="300"
          height="150"
          frameborder="0"
        />
      </div>
    </div>
  );
};

export default App;
