/**
 * @jsx React.DOM
 */

var React = require('react');
var NoteListBox=require('./NoteListBox.jsx');
var NoteCreationBox=require('./NoteCreationBox.jsx');
var Render = require("./Render.jsx");
var NoteApp = React.createClass({displayName: 'NoteApp',

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
            React.DOM.div({className: "container"}, 
                React.DOM.div({className: "row header"}, 
                    React.DOM.div({className: "page-header"}, 
                        React.DOM.h1(null, "React Note App"), 
                        Render(null)
                    )
                ), 
                React.DOM.div({className: "row"}, 
                    NoteListBox({onEdit: this.onEdit, onAdd: this.onAdd}), 
                    NoteCreationBox({id: this.state.currentlyEdited})
                )
            )
        )
    }
});

module.exports=NoteApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtZWQuanMiLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLEdBQUc7O0FBRUgsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQzdDLElBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBQ3JELElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNyQyxJQUFJLDZCQUE2Qix1QkFBQTs7SUFFN0IsZUFBZSxDQUFDLFVBQVU7UUFDdEIsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7QUFDeEIsS0FBSzs7SUFFRCxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDNUMsS0FBSzs7SUFFRCxLQUFLLENBQUMsVUFBVTtRQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUM5QyxLQUFLOztJQUVELE1BQU0sRUFBRSxXQUFXO1FBQ2Y7WUFDSSxhQUFJLENBQUEsQ0FBQSxDQUFDLFNBQUEsRUFBUyxDQUFDLFdBQVksQ0FBQSxFQUFBO2dCQUN2QixhQUFJLENBQUEsQ0FBQSxDQUFDLFNBQUEsRUFBUyxDQUFDLFlBQWEsQ0FBQSxFQUFBO29CQUN4QixhQUFJLENBQUEsQ0FBQSxDQUFDLFNBQUEsRUFBUyxDQUFDLGFBQWMsQ0FBQSxFQUFBO3dCQUN6QixZQUFHLENBQUEsSUFBQyxFQUFBLGdCQUFtQixDQUFBLEVBQUE7d0JBQ3RCLE1BQU0sQ0FBQSxJQUFBLENBQUcsQ0FBQTtvQkFDUixDQUFBO2dCQUNKLENBQUEsRUFBQTtnQkFDTixhQUFJLENBQUEsQ0FBQSxDQUFDLFNBQUEsRUFBUyxDQUFDLEtBQU0sQ0FBQSxFQUFBO29CQUNoQixXQUFXLENBQUEsQ0FBQSxDQUFDLE1BQUEsRUFBTSxDQUFFLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxLQUFBLEVBQUssQ0FBRSxJQUFJLENBQUMsS0FBTSxDQUFFLENBQUEsRUFBQTtvQkFDckQsZUFBZSxDQUFBLENBQUEsQ0FBQyxFQUFBLEVBQUUsQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWdCLENBQUEsQ0FBRyxDQUFBO2dCQUNqRCxDQUFBO1lBQ0osQ0FBQTtTQUNUO0tBQ0o7QUFDTCxDQUFDLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBOb3RlTGlzdEJveD1yZXF1aXJlKCcuL05vdGVMaXN0Qm94LmpzeCcpO1xudmFyIE5vdGVDcmVhdGlvbkJveD1yZXF1aXJlKCcuL05vdGVDcmVhdGlvbkJveC5qc3gnKTtcbnZhciBSZW5kZXIgPSByZXF1aXJlKFwiLi9SZW5kZXIuanN4XCIpO1xudmFyIE5vdGVBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgICBnZXRJbml0aWFsU3RhdGU6ZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHtpZDpudWxsfVxuICAgIH0sXG5cbiAgICBvbkVkaXQ6ZnVuY3Rpb24oaWQpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50bHlFZGl0ZWQ6aWR9KTtcbiAgICB9LFxuXG4gICAgb25BZGQ6ZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudGx5RWRpdGVkOm51bGx9KTtcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5SZWFjdCBOb3RlIEFwcDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVuZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxOb3RlTGlzdEJveCBvbkVkaXQ9e3RoaXMub25FZGl0fSBvbkFkZD17dGhpcy5vbkFkZH0vPlxuICAgICAgICAgICAgICAgICAgICA8Tm90ZUNyZWF0aW9uQm94IGlkPXt0aGlzLnN0YXRlLmN1cnJlbnRseUVkaXRlZH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzPU5vdGVBcHA7Il19