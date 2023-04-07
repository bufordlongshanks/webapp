import React from 'react';
import './App.css';

function AsciiFrame(props) {
  return (
    <div className="frame">
      {props.children}
    </div>
  );
}

export default AsciiFrame;
