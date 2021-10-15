import React from "react";

const AudioForm = ({ Key, text, setText, setAudio }) => {
  const handleRequest = () => {
    setAudio(`http://api.voicerss.org/?key=${Key}&hl=en-us&src=${text}`);
  };

  return (
    <div className="audio-form">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeHolder="Type text here..."
      />
      <button onClick={handleRequest}>Send</button>
    </div>
  );
};

export default AudioForm;
