import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  return (
    <Fragment >
      <h2>{props.selectedNote.title}</h2>
      <p>{props.selectedNote.body}</p>
      <button onClick={props.switchNoteEditorRenderCondition}>Edit</button>
      <button onClick={() => props.deleteNote(props.selectedNote.id)}>Delete</button>
    </Fragment>
  );
}

export default NoteViewer;
