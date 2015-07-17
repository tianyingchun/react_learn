/**
 * @jsx React.DOM
 */

var React = require('react');
// var NoteStore = require('../../stores/NoteStore');

var TextArea = React.createClass({

    propTypes: {
        id: React.PropTypes.string,
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
            <div>
                <textarea className="form-control" cols="100" onChange={this.handleChange} ref="textArea" rows="20" value={this.state.noteText} ></textarea><br/>
                <input type="button" className="btn btn-success btn-lg" onClick={this.handleSave} value="Save" />
            </div>
        );
    }
});

module.exports = TextArea;
