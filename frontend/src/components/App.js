import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';

class App extends Component {

  state = {
    notes: [],
    selectedNote: null,
    searchTerm: null
  }

  //
  fetchNotes = () => {
    fetch('http://localhost:3000/api/v1/notes')
    .then(resp => resp.json())
    .then(notes => this.setState({notes: notes}))
  }

  renderNewNote = (newNote) => {
    this.setState({
      notes: [...this.state.notes, newNote]
    })
  }

  // ensures note is rendered immediately - checks whether the updated note has the same id as one of the notes in the array and if it assigns
  // the patched info to it, if not it keeps the details of the old notes
  renderUpdatedNote = (newNote) => {
    const newNotes = this.state.notes.map(note => note.id === newNote.id ? note = newNote : note )

    this.setState({
      notes: newNotes
    })
  }

  componentDidMount() {
    this.fetchNotes()
  }

  // takes note from onClick event handler and places it in this component's state
  selectNote = (note) => {
    this.setState({
      selectedNote: note
    })
  }

  searchInput = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  filteredNotes = () => this.state.notes.filter(note => note.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

  render() {
    return (
      <div className="app">
        <Header />
        <NoteContainer notes={this.state.searchTerm ? this.filteredNotes() : this.state.notes} selectNote={this.selectNote} selectedNote={this.state.selectedNote} searchInput={this.searchInput} renderUpdatedNote={this.renderUpdatedNote}/>
      </div>
    );
  }

}

export default App;

// this.state.searchTerm ? this.filteredNotes : this.state.notes
