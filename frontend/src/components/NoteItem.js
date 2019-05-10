import React, { Component } from "react";

class NoteList extends Component {

  onClickEventHandler = () => {
    this.props.selectNote(this.props.note);

    if (this.props.selectedNote === this.props.note) {
      return null
    } else if (this.props.noteEditorRenderCondition === true && !!this.props.selectedNote ) {
      this.props.switchNoteEditorRenderCondition() && this.props.clearSelectedNote() && this.props.selectNote(this.props.note);
    }
    else {
      this.props.selectNote(this.props.note);
    }
    //this.props.selectedNote === this.props.note && this.props.noteEditorRenderCondition === true ? null : this.props.switchNoteEditorRenderCondition() && this.props.clearSelectedNote() ;
  }

  render() {
    return (
      <li onClick={() => {this.onClickEventHandler()}} >
        <h2>{this.props.note.title}</h2>
        <p> {this.props.note.body.length > 30 ? this.props.note.body.substring(0, 30) + "..." : this.props.note.body}</p>
      </li>
    );
  }
}

export default NoteList;
