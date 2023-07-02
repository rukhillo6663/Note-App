import React from 'react';
import Note from './Note';
import EditNote from './EditNote';

function NotesList({ notes, saveNote, deleteNote }) {
  return (
    <div className="notes-list">
      {notes?.map(note => (
        <Note note={note} deleteNote={deleteNote} />
      ))}
      <EditNote saveNote={saveNote} />
    </div>
  );
}

export default NotesList;
