import React from 'react';

export default function Header({ setToggle }) {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button className="save" onClick={() => setToggle(prev => !prev)}>
        Change mode
      </button>
    </div>
  );
}
