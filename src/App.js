import NotesList from './components/NotesList';
import './App.css';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import Search from './components/Search';
import Header from './components/Header';

function App() {
  const [notes, setNotes] = useState([]);

  const [searchText, setSearchText] = useState('');
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (document.body.className !== 'dark-mode') {
      document.body.className = 'dark-mode';
    } else {
      document.body.className = '';
    }
  }, [toggle]);
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('note-taker-data'));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('note-taker-data', JSON.stringify(notes));
  }, [notes]);

  const saveNote = newNote => {
    const date = new Date();
    const note = {
      id: nanoid(),
      text: newNote,
      date: date.toLocaleDateString(),
    };
    setNotes([...notes, note]);
  };
  const deleteNote = id => {
    const filteredNotes = notes.filter(note => note.id !== id);
    setNotes(filteredNotes);
  };

  return (
    <div className="container">
      <Header setToggle={setToggle} />
      <Search setSearchText={setSearchText} searchText={searchText} />
      <NotesList
        notes={notes.filter(note =>
          note.text.toLowerCase().includes(searchText)
        )}
        saveNote={saveNote}
        deleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
