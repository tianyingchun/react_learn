/**
 * @jsx React.DOM
 */

var React = require('react');
var Note = require('./Note.jsx');

var NoteList = React.createClass({

    getInitialState:function(){
        return {activeNoteId:null}
    },

    setActiveNote: function(id) {
        this.setState({activeNoteId: id});
    },

    render: function() {
        var self=this;
        var noteNodes = this.props.notes.map(function (note) {
            return (
                <Note key={note._id} active={self.state.activeNoteId === note._id} note={note} onEdit={self.props.onEdit} onSelect={self.setActiveNote}/>
            );
        });
        return (
            <div className="list-group">
                {noteNodes}
            </div>
         )
    }
});

module.exports=NoteList;