import React, { useState } from 'react';

function EditNote({ saveNote }) {
  const [note, setNote] = useState('');
  const limitChar = 200;
  const handleChange = e => {
    if (limitChar - e.target.value.length >= 0) {
      setNote(e.target.value);
    }
  };
  const handleSave = () => {
    if (note.trim().length > 0) {
      saveNote(note);
      setNote('');
    }
  };
  return (
    <div className="note editNote">
      <textarea
        rows="10"
        cols="10"
        placeholder="Type to add a note "
        onChange={handleChange}
        value={note}
      ></textarea>
      <div className="note-footer">
        <small>{limitChar - note.length} remaining</small>
        <buton className="save" onClick={handleSave}>
          Save
        </buton>
      </div>
    </div>
  );
}

export default EditNote;
