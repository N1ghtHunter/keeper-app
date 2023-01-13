import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
function CreateArea({ addNote }) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [expand, setExpand] = useState(false);
  function onChange(e) {
    const { name, value } = e.target;
    setNote((data) => {
      return { ...data, [name]: value };
    });
  }
  function onSubmit(e) {
    e.preventDefault();
    addNote(note);
    setNote({
      title: "",
      content: ""
    });
  }
  return (
    <div>
      <form className="create-note" onSubmit={onSubmit}>
        {expand && (
          <input
            onChange={onChange}
            value={note.title}
            name="title"
            placeholder="Title"
          />
        )}
        <textarea
          onChange={onChange}
          onFocus={() => {
            setExpand(true);
          }}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows={expand ? "3" : "1"}
        />
        <Zoom in={expand}>
          <Fab className="btn" type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
