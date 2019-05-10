import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {

  createNewNote = () => {
    fetch('http://localhost:3000/api/v1/notes', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: 'new task title',
        body: 'type your task details here',
        user_id: 1
      })
    }).then(note => note.json())
    .then(newNote => this.props.renderNewNote(newNote))
  }

  render() {
    return (
      <div className='master-detail-element sidebar'>
      <button className="new" type="new" onClick={() => this.createNewNote()}>Create New Task</button>
      <button className="sortByTime" type="sortByTime" onClick={this.props.toggleSortOrder}>Toggle Sort By Date (Asc/Desc) </button>
      <button className="sortByName" type="sortByName" onClick={this.props.sortByAlpha}>Sort Titles A-Z </button>
      <button className="sortByUpdate" type="sortByUpdate" onClick={this.props.sortByUpdate}>Last Updated Notes First </button>
      <NoteList selectedNote={this.props.selectedNote} notes={this.props.notes} selectNote={this.props.selectNote} switchNoteEditorRenderCondition={this.props.switchNoteEditorRenderCondition} noteEditorRenderCondition={this.props.noteEditorRenderCondition} clearSelectedNote={this.props.clearSelectedNote}/>
      </div>
    );
  }

}

export default Sidebar;
