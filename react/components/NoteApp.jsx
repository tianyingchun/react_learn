/**
 * @jsx React.DOM
 */

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var NoteListBox = require('./NoteListBox.jsx');
var NoteCreationBox = require('./NoteCreationBox.jsx');
var NoteApp = React.createClass({

    getInitialState: function() {
        return {
            id: null,
            currentlyEdited: 0
        };
    },

    onEdit: function(id){
        this.setState({
            currentlyEdited: id
        });
    },

    onAdd: function(){
        this.setState({
            currentlyEdited: 0
        });
    },

    render: function() {
        return (
            <div className="container">
                <div className="row header">
                    <div className="page-header">
                        <h1>React Note App</h1>
                        <RouteHandler />
                    </div>
                </div>
                <div className="row">
                    <NoteListBox onEdit={this.onEdit} onAdd={this.onAdd}/>
                    <NoteCreationBox id={this.state.currentlyEdited} />
                </div>
            </div>
        );
    }
});

module.exports = NoteApp;
