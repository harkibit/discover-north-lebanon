import React from 'react';
import './ControlPanel.css';

export default function ControlPanel({ onReset }) {
  return (
    <div className="control-panel" onClick={() => onReset()}>
      Reset Default
    </div>
  );
}
