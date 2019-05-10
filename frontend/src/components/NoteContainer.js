import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {

  state = {
    noteEditorRenderCondition: false
  }

  switchNoteEditorRenderCondition = () => {
    this.setState({
      noteEditorRenderCondition: !this.state.noteEditorRenderCondition
    });
  };

  deleteNote = (noteToDeleteId) => {
    fetch(`http://localhost:3000/api/v1/notes/${noteToDeleteId}`, {
      method: "DELETE"
    }).then(resp => resp.json())
    .then(deletedNote => this.props.updateNotesAfterDelete(deletedNote))
    .then(this.props.clearSelectedNote)
  }

  render() {
    return (
      <Fragment>
        <Search searchInput={this.props.searchInput} searchInputBody={this.props.searchInputBody}/>
        <div className='container'>
          <Sidebar notes={this.props.notes} selectNote={this.props.selectNote} selectedNote={this.props.selectedNote} renderNewNote={this.props.renderNewNote} switchNoteEditorRenderCondition={this.switchNoteEditorRenderCondition} noteEditorRenderCondition={this.state.noteEditorRenderCondition} sortedByTimeCreated={this.props.sortedByTimeCreated} clearSelectedNote={this.props.clearSelectedNote} toggleSortOrder={this.props.toggleSortOrder} sortByAlpha={this.props.sortByAlpha} sortByUpdate={this.props.sortByUpdate}/>
          <Content noteEditorRenderCondition={this.state.noteEditorRenderCondition} switchNoteEditorRenderCondition={this.switchNoteEditorRenderCondition} selectedNote={this.props.selectedNote} renderUpdatedNote={this.props.renderUpdatedNote} deleteNote={this.deleteNote}/>
        </div>
      </Fragment>
    );
  }

}

export default NoteContainer;
