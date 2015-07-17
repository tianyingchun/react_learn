/**
 * @jsx React.DOM
 */

var React = require('react');

var RenderTest = React.createClass({

	propTypes: {
		onEdit: React.PropTypes.func,
		onSelect: React.propTypes.func
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