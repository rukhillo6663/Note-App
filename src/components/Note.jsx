import React from 'react';
import { MdDelete } from 'react-icons/md';

function Note({ note, deleteNote }) {
  return (
    <div className="note">
      <span>{note.text}</span>
      <div className="note-footer">
        <small>{note.date}</small>
        <MdDelete
          className="delete-icon"
          size="1.3em"
          onClick={() => deleteNote(note.id)}
        />
      </div>
    </div>
  );
}

export default Note;
