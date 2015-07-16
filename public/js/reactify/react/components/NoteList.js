/**
 * @jsx React.DOM
 */

var React = require('react');
var Note = require('./Note.jsx');

var NoteList = React.createClass({displayName: 'NoteList',

    getInitialState:function(){
        return {activeNoteId:null}
    },

    setActiveNote: function(id) {
        this.setState({activeNoteId: id});
    },

    render: function() {
        var self=this,
            notes=this.props.notes.concat().reverse();
        var noteNodes = notes.map(function (note) {
            return (
                Note({key: note._id, active: self.state.activeNoteId === note._id, note: note, onEdit: self.props.onEdit, onSelect: self.setActiveNote})
            );
        });
        return (
            React.DOM.div({className: "list-group"}, 
                noteNodes
            )
         )
    }
});

module.exports=NoteList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtZWQuanMiLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLEdBQUc7O0FBRUgsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQzs7QUFFakMsSUFBSSw4QkFBOEIsd0JBQUE7O0lBRTlCLGVBQWUsQ0FBQyxVQUFVO1FBQ3RCLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO0FBQ2xDLEtBQUs7O0lBRUQsYUFBYSxFQUFFLFNBQVMsRUFBRSxFQUFFO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMxQyxLQUFLOztJQUVELE1BQU0sRUFBRSxXQUFXO1FBQ2YsSUFBSSxJQUFJLENBQUMsSUFBSTtZQUNULEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM5QyxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxFQUFFO1lBQ3RDO2dCQUNLLElBQUksQ0FBQSxDQUFBLENBQUMsR0FBQSxFQUFHLENBQUUsSUFBSSxDQUFDLEdBQUcsRUFBQyxDQUFDLE1BQUEsRUFBTSxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQyxHQUFHLEVBQUMsQ0FBQyxJQUFBLEVBQUksQ0FBRSxJQUFJLEVBQUMsQ0FBQyxNQUFBLEVBQU0sQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBQyxDQUFDLFFBQUEsRUFBUSxDQUFFLElBQUksQ0FBQyxhQUFjLENBQUUsQ0FBQTtjQUMzSTtTQUNMLENBQUMsQ0FBQztRQUNIO1lBQ0ksYUFBSSxDQUFBLENBQUEsQ0FBQyxTQUFBLEVBQVMsQ0FBQyxZQUFhLENBQUEsRUFBQTtnQkFDdkIsU0FBVTtZQUNULENBQUE7VUFDUjtLQUNMO0FBQ0wsQ0FBQyxDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgTm90ZSA9IHJlcXVpcmUoJy4vTm90ZS5qc3gnKTtcblxudmFyIE5vdGVMaXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gICAgZ2V0SW5pdGlhbFN0YXRlOmZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB7YWN0aXZlTm90ZUlkOm51bGx9XG4gICAgfSxcblxuICAgIHNldEFjdGl2ZU5vdGU6IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZU5vdGVJZDogaWR9KTtcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGY9dGhpcyxcbiAgICAgICAgICAgIG5vdGVzPXRoaXMucHJvcHMubm90ZXMuY29uY2F0KCkucmV2ZXJzZSgpO1xuICAgICAgICB2YXIgbm90ZU5vZGVzID0gbm90ZXMubWFwKGZ1bmN0aW9uIChub3RlKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxOb3RlIGtleT17bm90ZS5faWR9IGFjdGl2ZT17c2VsZi5zdGF0ZS5hY3RpdmVOb3RlSWQgPT09IG5vdGUuX2lkfSBub3RlPXtub3RlfSBvbkVkaXQ9e3NlbGYucHJvcHMub25FZGl0fSBvblNlbGVjdD17c2VsZi5zZXRBY3RpdmVOb3RlfS8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxuICAgICAgICAgICAgICAgIHtub3RlTm9kZXN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIClcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHM9Tm90ZUxpc3Q7Il19