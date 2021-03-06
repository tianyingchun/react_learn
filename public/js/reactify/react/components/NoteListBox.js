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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtZWQuanMiLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLEdBQUc7O0FBRUgsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3pDLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDOztBQUVsRCxJQUFJLGlDQUFpQywyQkFBQTs7SUFFakMsU0FBUyxFQUFFO1FBQ1AsS0FBSyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSTtRQUMzQixNQUFNLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJO0FBQ3BDLEtBQUs7O0lBRUQsZUFBZSxFQUFFLFVBQVU7UUFDdkIsT0FBTztZQUNILEtBQUssRUFBRSxTQUFTLENBQUMsUUFBUSxFQUFFO1NBQzlCLENBQUM7QUFDVixLQUFLOztJQUVELGlCQUFpQixFQUFFLFdBQVc7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMzRCxLQUFLOztJQUVELG9CQUFvQixFQUFFLFdBQVc7UUFDN0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQzNCLEtBQUs7O0lBRUQsUUFBUSxFQUFFLFNBQVMsS0FBSyxFQUFFO1FBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixLQUFLLEVBQUUsS0FBSztTQUNmLENBQUMsQ0FBQztBQUNYLEtBQUs7O0lBRUQsS0FBSyxFQUFFLFNBQVMsS0FBSyxDQUFDO1FBQ2xCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMvQyxLQUFLOztJQUVELE1BQU0sRUFBRSxXQUFXO1FBQ2Y7WUFDSSxvQkFBQSxLQUFJLEVBQUEsQ0FBQSxDQUFDLFNBQUEsRUFBUyxDQUFDLFVBQVcsQ0FBQSxFQUFBO2dCQUN0QixvQkFBQSxLQUFJLEVBQUEsQ0FBQSxDQUFDLFNBQUEsRUFBUyxDQUFDLFVBQVcsQ0FBQSxFQUFBLG9CQUFBLEdBQUUsRUFBQSxDQUFBLENBQUMsSUFBQSxFQUFJLENBQUMsRUFBQSxFQUFFLENBQUMsT0FBQSxFQUFPLENBQUUsSUFBSSxDQUFDLEtBQU8sQ0FBQSxFQUFBLFNBQVcsQ0FBTSxDQUFBLEVBQUE7Z0JBQzNFLG9CQUFDLFFBQVEsRUFBQSxDQUFBLENBQUMsR0FBQSxFQUFHLENBQUMsVUFBQSxFQUFVLENBQUMsS0FBQSxFQUFLLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUMsQ0FBQyxNQUFBLEVBQU0sQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU8sQ0FBQSxDQUFHLENBQUE7WUFDN0UsQ0FBQTtVQUNSO0tBQ0w7QUFDTCxDQUFDLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIE5vdGVMaXN0ID0gcmVxdWlyZSgnLi9Ob3RlTGlzdC5qc3gnKTtcbnZhciBOb3RlU3RvcmUgPSByZXF1aXJlKCcuLi8uLi9zdG9yZXMvTm90ZVN0b3JlJyk7XG5cbnZhciBOb3RlTGlzdEJveCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAgIHByb3BUeXBlczoge1xuICAgICAgICBvbkFkZDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIG9uRWRpdDogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbiAgICB9LFxuXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbm90ZXM6IE5vdGVTdG9yZS5nZXROb3RlcygpXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSA9IE5vdGVTdG9yZS5saXN0ZW4odGhpcy5vbkNoYW5nZSk7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH0sXG5cbiAgICBvbkNoYW5nZTogZnVuY3Rpb24obm90ZXMpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBub3Rlczogbm90ZXNcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIG9uQWRkOiBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMucHJvcHMub25BZGQoKTtcbiAgICAgICAgdGhpcy5yZWZzLm5vdGVMaXN0LnNldEFjdGl2ZU5vdGUobnVsbCk7XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJlZFwiPjxhIGhyZWY9XCJcIiBvbkNsaWNrPXt0aGlzLm9uQWRkfT5BZGQgTmV3PC9hPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxOb3RlTGlzdCByZWY9XCJub3RlTGlzdFwiIG5vdGVzPXt0aGlzLnN0YXRlLm5vdGVzfSBvbkVkaXQ9e3RoaXMucHJvcHMub25FZGl0fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTm90ZUxpc3RCb3g7XG4iXX0=