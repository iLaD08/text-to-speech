import React, { useState } from "react";
import AudioForm from "./components/audio-form";
import Speech from "./components/speech";
import "./App.css";

const App = () => {
  const [text, setText] = useState("");
  const [audio, setAudio] = useState(null);
  const key = "f14c43fb64bc41f2b6818ad05c98aabc";

  return (
    <div className="App">
      <div className="top">
        <h1>Text to speech</h1>
        <AudioForm
          Key={key}
          text={text}
          setText={setText}
          setAudio={setAudio}
        />
        <Speech audio={audio} />
      </div>
    </div>
  );
};

export default App;
