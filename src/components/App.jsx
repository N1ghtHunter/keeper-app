import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
function App() {
  const [notes, setNotes] = useState([{ title: "adas", content: "sadas" }]);
  function addNote(note) {
    console.log(note);
    setNotes((d) => {
      return [...d, note];
    });
    // notes.push(note);
  }
  function deleteNote(id) {
    setNotes((d) => {
      return d.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes &&
        notes.map((note, index) => {
          return (
            <Note
              id={index}
              key={index}
              title={note.title}
              content={note.content}
              deleteNote={deleteNote}
            />
          );
        })}
      <Footer />
    </div>
  );
}

export default App;
