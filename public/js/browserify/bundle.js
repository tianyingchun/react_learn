(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by Sandeep on 06/10/14.
 */

var Reflux = require('reflux');

var NoteActions = Reflux.createActions([
	'createNote',
	'editNote'
]);

module.exports = NoteActions;

},{"reflux":"reflux"}],2:[function(require,module,exports){
/**
 * @jsx React.DOM
 */

/**
 *
 * It uses `<NoteApp/>` to render the app on the server. You can create isomorphic apps by rendering React on both Server
 * and Client.
 */

// for ie8 Polyfills, but we should't require it in projecet
// we should use grunt task to build ie8fix modules
// require('es5-shim/es5-shim');
// require('es5-shim/es5-sham');
// require('console-polyfill');

var React = require('react');
var NoteApp = require('./components/NoteApp.jsx');
var App = React.createClass({displayName: "App",
    render: function() {
        return (
            React.createElement("html", null, 
                React.createElement("head", {lang: "en"}, 
                    React.createElement("base", {href: "/"}), 
                    React.createElement("meta", {charSet: "utf-8"}), 
                    React.createElement("meta", {httpEquiv: "X-UA-Compatible", content: "IE=edge"}), 
                    React.createElement("meta", {name: "viewport", content: "width=device-width, initial-scale=1"}), 
                    React.createElement("title", null, "React Note app"), 
                    React.createElement("link", {href: "css/bootstrap.css", rel: "stylesheet"}), 
                    React.createElement("link", {href: "css/app.css", rel: "stylesheet"})
                ), 
                React.createElement("body", null, 
                    React.createElement(NoteApp, null), 
                    React.createElement("script", {type: "text/javascript", src: "/js/vendor/react.js"}), 
                    React.createElement("script", {type: "text/javascript", src: "/js/browserify/bundle.js"})
                )
            )
        );
    }
});


module.exports = App;

},{"./components/NoteApp.jsx":5,"react":"react"}],3:[function(require,module,exports){
/**
 * @jsx React.DOM
 */

/**
 *  For rendering the app on client side.
 */
var React = require('react');
var App = require('./App.jsx');

if (typeof window !== 'undefined') {
    window.onload = function() {
        React.render(React.createElement(App, null), document);
    };
}

},{"./App.jsx":2,"react":"react"}],4:[function(require,module,exports){
/**
 * @jsx React.DOM
 */

var React = require('react');

var Note = React.createClass({displayName: "Note",
    propTypes: {
        active: React.PropTypes.bool,
        note: React.PropTypes.object,
        onEdit: React.PropTypes.func,
        onSelect: React.PropTypes.func
    },
    handleEdit: function(id, event){
        event.preventDefault();
        this.props.onEdit(id);
        this.props.onSelect(id);
    },

    render: function() {

        var note = this.props.note;

        var title = note.text.length >= 20 ? note.text.substring(0, 20) : note.text;

        var className = this.props.active ? 'active' : null;

        return (
            React.createElement("a", {href: "#", className: 'list-group-item ' + className, onClick: this.handleEdit.bind(null, note._id)}, title)
        );
    }
});

module.exports = Note;

},{"react":"react"}],5:[function(require,module,exports){
/**
 * @jsx React.DOM
 */

var React = require('react');
var NoteListBox = require('./NoteListBox.jsx');
var NoteCreationBox = require('./NoteCreationBox.jsx');
var Render = require('./Render.jsx');
var NoteApp = React.createClass({displayName: "NoteApp",

    getInitialState: function() {
        return {
            id: null
        };
    },

    onEdit: function(id){
        this.setState({
            currentlyEdited: id
        });
    },

    onAdd: function(){
        this.setState({
            currentlyEdited: null
        });
    },

    render: function() {
        return (
            React.createElement("div", {className: "container"}, 
                React.createElement("div", {className: "row header"}, 
                    React.createElement("div", {className: "page-header"}, 
                        React.createElement("h1", null, "React Note App"), 
                        React.createElement(Render, null)
                    )
                ), 
                React.createElement("div", {className: "row"}, 
                    React.createElement(NoteListBox, {onEdit: this.onEdit, onAdd: this.onAdd}), 
                    React.createElement(NoteCreationBox, {id: this.state.currentlyEdited})
                )
            )
        );
    }
});

module.exports = NoteApp;

},{"./NoteCreationBox.jsx":6,"./NoteListBox.jsx":8,"./Render.jsx":9,"react":"react"}],6:[function(require,module,exports){
/**
 * @jsx React.DOM
 */

var React = require('react');
var TextArea = require('./TextArea.jsx');
var NoteActions = require('../../actions/NoteActions.js');
var NoteStore = require('../../stores/NoteStore.js');

var NoteCreationBox = React.createClass({displayName: "NoteCreationBox",

    propTypes: {
        id: React.PropTypes.number
    },
    handleSave: function(noteText, id) {

        if (id) {
            NoteActions.editNote({
                _id: id,
                text: noteText
            });
        } else {
            NoteActions.createNote({
                _id: Date.now(),
                text: noteText
            });
        }
    },
    render: function() {

        var note;

        if(this.props.id) {
            note = NoteStore.getNote(this.props.id);
        }

        return (
            React.createElement("div", {className: "col-md-8"}, 
                React.createElement(TextArea, {onSave: this.handleSave, id: this.props.id, noteText: note ? note.text : ''})
            )
        );
    }
});

module.exports = NoteCreationBox;

},{"../../actions/NoteActions.js":1,"../../stores/NoteStore.js":11,"./TextArea.jsx":10,"react":"react"}],7:[function(require,module,exports){
/**
 * @jsx React.DOM
 */

var React = require('react');
var Note = require('./Note.jsx');

var NoteList = React.createClass({displayName: "NoteList",

    propTypes: {
        notes: React.PropTypes.array
    },
    getInitialState: function(){
        return {
            activeNoteId: null
        };
    },

    setActiveNote: function(id) {
        this.setState({
            activeNoteId: id
        });
    },

    render: function() {
        var self = this,
            notes = this.props.notes.concat().reverse();
        var noteNodes = notes.map(function (note) {
            return (
                React.createElement(Note, {key: note._id, active: self.state.activeNoteId === note._id, note: note, onEdit: self.props.onEdit, onSelect: self.setActiveNote})
            );
        });
        return (
            React.createElement("div", {className: "list-group"}, 
                noteNodes
            )
        );
    }
});

module.exports = NoteList;

},{"./Note.jsx":4,"react":"react"}],8:[function(require,module,exports){
/**
 * @jsx React.DOM
 */

var React = require('react');
var NoteList = require('./NoteList.jsx');
var NoteStore = require('../../stores/NoteStore');

var NoteListBox = React.createClass({displayName: "NoteListBox",

    propTypes: {
        onAdd: React.PropTypes.func,
        onEdit: React.PropTypes.func
    },

    getInitialState: function(){
        return {
            notes: NoteStore.getNotes()
        };
    },

    componentDidMount: function() {
        this.unsubscribe = NoteStore.listen(this.onChange);
    },

    componentWillUnmount: function() {
        this.unsubscribe();
    },

    onChange: function(notes) {
        this.setState({
            notes: notes
        });
    },

    onAdd: function(event){
        event.preventDefault();
        this.props.onAdd();
        this.refs.noteList.setActiveNote(null);
    },

    render: function() {
        return (
            React.createElement("div", {className: "col-md-4"}, 
                React.createElement("div", {className: "centered"}, React.createElement("a", {href: "", onClick: this.onAdd}, "Add New")), 
                React.createElement(NoteList, {ref: "noteList", notes: this.state.notes, onEdit: this.props.onEdit})
            )
        );
    }
});

module.exports = NoteListBox;

},{"../../stores/NoteStore":11,"./NoteList.jsx":7,"react":"react"}],9:[function(require,module,exports){
/**
 * @jsx React.DOM
 */

var React = require('react');

var RenderTest = React.createClass({displayName: "RenderTest",

	propTypes: {
		onEdit: React.PropTypes.func,
		onSelect: React.PropTypes.func
	},
	handleEdit: function(id, event) {
		event.preventDefault();
		this.props.onEdit(id);
		this.props.onSelect(id);
	},

	render: function() {
		// 返回NULL 什么也不输出，这个对DIALOG 设计上很有用.
		return null;
	}
});

module.exports = RenderTest;

},{"react":"react"}],10:[function(require,module,exports){
/**
 * @jsx React.DOM
 */

var React = require('react');
// var NoteStore = require('../../stores/NoteStore');

var TextArea = React.createClass({displayName: "TextArea",

    propTypes: {
        id: React.PropTypes.number,
        onSave: React.PropTypes.func
    },

    getInitialState: function() {
        return {
            noteText: ''
        };
    },

    componentWillReceiveProps: function(nextProps) {

        this.setState({
            noteText: nextProps.noteText
        });

        if (!nextProps.id) {
            this.refs.textArea.getDOMNode().focus();
        }
    },

    handleChange: function(event) {
        this.setState({
            noteText: event.target.value
        });
    },

    handleSave: function() {

        this.props.onSave(this.state.noteText, this.props.id);

        if (!this.props.id) {
            this.refs.textArea.getDOMNode().value = '';
            this.setState({
                noteText: ''
            });
        }
    },
    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement("textarea", {className: "form-control", cols: "100", onChange: this.handleChange, ref: "textArea", rows: "20", value: this.state.noteText}), React.createElement("br", null), 
                React.createElement("input", {type: "button", className: "btn btn-success btn-lg", onClick: this.handleSave, value: "Save"})
            )
        );
    }
});

module.exports = TextArea;

},{"react":"react"}],11:[function(require,module,exports){
/**
 * Created by Sandeep on 06/10/14.
 */
var Reflux = require('reflux');
var NoteActions = require('../actions/NoteActions');
var _notes = [];

var NoteStore = Reflux.createStore({

	init: function() {
		this.listenTo(NoteActions.createNote, this.onCreate);
		this.listenTo(NoteActions.editNote, this.onEdit);
	},

	onCreate: function(note) {
		_notes.push(note);
		this.trigger(_notes);
	},

	onEdit: function(note) {
		for (var i = 0; i < _notes.length; i++) {
			if (_notes[i]._id === note._id) {
				_notes[i].text = note.text;
				this.trigger(_notes);
				break;
			}
		}
	},

	getNotes: function() {
		return _notes;
	},

	getNote: function(id) {
		for (var i = 0; i < _notes.length; i++) {
			if (_notes[i]._id === id) {
				return _notes[i];
			}
		}
	}

});

module.exports = NoteStore;

},{"../actions/NoteActions":1,"reflux":"reflux"}]},{},[2,3,4,5,6,7,8,9,10]);
