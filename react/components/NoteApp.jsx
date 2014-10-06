/**
 * @jsx React.DOM
 */

var React = require('react');
var NoteListBox=require('./NoteListBox.jsx');
var NoteCreationBox=require('./NoteCreationBox.jsx');

var NoteApp = React.createClass({

    getInitialState:function(){
        return {id:null}
    },

    onEdit:function(id){
        this.setState({currentlyEdited:id});
    },

    onAdd:function(){
        this.setState({currentlyEdited:null});
    },

    render: function() {
        return (
            <div className="container top-buffer">
                <div className="row">
                    <NoteListBox onEdit={this.onEdit} onAdd={this.onAdd}/>
                    <NoteCreationBox id={this.state.currentlyEdited} />
                </div>
            </div>
        )
    }
});

module.exports=NoteApp;