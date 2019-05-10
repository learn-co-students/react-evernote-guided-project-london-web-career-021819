import React, {Component} from 'react';
import NoteItem from './NoteItem';

class NoteList extends Component {
  render() {
    return (
      <ul>
        {/* Render list of notes here... */}
        {this.props.notes.map(note => (
          <NoteItem
            note={note}
            key={note.id}
            selectNote={this.props.selectNote}
            switchNoteEditorRenderCondition={this.props.switchNoteEditorRenderCondition}
            selectedNote={this.props.selectedNote}
            noteEditorRenderCondition={this.props.noteEditorRenderCondition}
            clearSelectedNote={this.props.clearSelectedNote}
          />
        ))}
      </ul>
    );
  }
}


export default NoteList;
