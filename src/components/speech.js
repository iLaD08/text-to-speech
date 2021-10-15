import React from "react";

const Speech = ({ audio }) => (
  <div className="audio">
    <iframe title="yay" src={audio} width="300" height="150" frameborder="0" />
  </div>
);

export default Speech;
