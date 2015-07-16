/**
 * @jsx React.DOM
 */

var React=require('react');
var NoteStore=require('../../stores/NoteStore');

var TextArea = React.createClass({displayName: 'TextArea',

    getInitialState:function(){
        return {noteText:''}
    },

    handleChange: function(event) {
        this.setState({noteText: event.target.value});
    },

    handleSave:function(){

       this.props.onSave(this.state.noteText,this.props.id);

       if(!this.props.id) {
           this.refs.textArea.getDOMNode().value = '';
           this.setState({noteText: ''});
       }

    },

    componentWillReceiveProps: function(nextProps) {

        this.setState({
            noteText: nextProps.noteText
        });

        if(!nextProps.id){
            this.refs.textArea.getDOMNode().focus();
        }
    },

    render: function() {
        return (
            React.DOM.div(null, 
                React.DOM.textarea({className: "form-control", ref: "textArea", cols: "100", rows: "20", value: this.state.noteText, onChange: this.handleChange}), React.DOM.br(null), 
                React.DOM.input({type: "button", className: "btn btn-success btn-lg", value: "Save", onClick: this.handleSave})
            )
        )
    }
});

module.exports=TextArea;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtZWQuanMiLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLEdBQUc7O0FBRUgsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzNCLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDOztBQUVoRCxJQUFJLDhCQUE4Qix3QkFBQTs7SUFFOUIsZUFBZSxDQUFDLFVBQVU7UUFDdEIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7QUFDNUIsS0FBSzs7SUFFRCxZQUFZLEVBQUUsU0FBUyxLQUFLLEVBQUU7UUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDdEQsS0FBSzs7QUFFTCxJQUFJLFVBQVUsQ0FBQyxVQUFVOztBQUV6QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7O09BRXJELEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRTtXQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7V0FDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3pDLFFBQVE7O0FBRVIsS0FBSzs7QUFFTCxJQUFJLHlCQUF5QixFQUFFLFNBQVMsU0FBUyxFQUFFOztRQUUzQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ1YsUUFBUSxFQUFFLFNBQVMsQ0FBQyxRQUFRO0FBQ3hDLFNBQVMsQ0FBQyxDQUFDOztRQUVILEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDM0M7QUFDVCxLQUFLOztJQUVELE1BQU0sRUFBRSxXQUFXO1FBQ2Y7WUFDSSxhQUFJLENBQUEsSUFBQyxFQUFBO2dCQUNELGtCQUFTLENBQUEsQ0FBQSxDQUFDLFNBQUEsRUFBUyxDQUFDLGNBQUEsRUFBYyxDQUFDLEdBQUEsRUFBRyxDQUFDLFVBQUEsRUFBVSxDQUFDLElBQUEsRUFBSSxDQUFDLEtBQUEsRUFBSyxDQUFDLElBQUEsRUFBSSxDQUFDLElBQUEsRUFBSSxDQUFDLEtBQUEsRUFBSyxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFDLENBQUMsUUFBQSxFQUFRLENBQUUsSUFBSSxDQUFDLFlBQWMsQ0FBVyxDQUFBLEVBQUEsWUFBRyxDQUFBLElBQUUsQ0FBQSxFQUFBO2dCQUNoSixlQUFNLENBQUEsQ0FBQSxDQUFDLElBQUEsRUFBSSxDQUFDLFFBQUEsRUFBUSxDQUFDLFNBQUEsRUFBUyxDQUFDLHdCQUFBLEVBQXdCLENBQUMsS0FBQSxFQUFLLENBQUMsTUFBQSxFQUFNLENBQUMsT0FBQSxFQUFPLENBQUUsSUFBSSxDQUFDLFVBQVcsQ0FBRSxDQUFBO1lBQzlGLENBQUE7U0FDVDtLQUNKO0FBQ0wsQ0FBQyxDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG5cbnZhciBSZWFjdD1yZXF1aXJlKCdyZWFjdCcpO1xudmFyIE5vdGVTdG9yZT1yZXF1aXJlKCcuLi8uLi9zdG9yZXMvTm90ZVN0b3JlJyk7XG5cbnZhciBUZXh0QXJlYSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAgIGdldEluaXRpYWxTdGF0ZTpmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4ge25vdGVUZXh0OicnfVxuICAgIH0sXG5cbiAgICBoYW5kbGVDaGFuZ2U6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe25vdGVUZXh0OiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgICB9LFxuXG4gICAgaGFuZGxlU2F2ZTpmdW5jdGlvbigpe1xuXG4gICAgICAgdGhpcy5wcm9wcy5vblNhdmUodGhpcy5zdGF0ZS5ub3RlVGV4dCx0aGlzLnByb3BzLmlkKTtcblxuICAgICAgIGlmKCF0aGlzLnByb3BzLmlkKSB7XG4gICAgICAgICAgIHRoaXMucmVmcy50ZXh0QXJlYS5nZXRET01Ob2RlKCkudmFsdWUgPSAnJztcbiAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bm90ZVRleHQ6ICcnfSk7XG4gICAgICAgfVxuXG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uKG5leHRQcm9wcykge1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbm90ZVRleHQ6IG5leHRQcm9wcy5ub3RlVGV4dFxuICAgICAgICB9KTtcblxuICAgICAgICBpZighbmV4dFByb3BzLmlkKXtcbiAgICAgICAgICAgIHRoaXMucmVmcy50ZXh0QXJlYS5nZXRET01Ob2RlKCkuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcmVmPVwidGV4dEFyZWFcIiBjb2xzPVwiMTAwXCIgcm93cz1cIjIwXCIgdmFsdWU9e3RoaXMuc3RhdGUubm90ZVRleHR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0+PC90ZXh0YXJlYT48YnIvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1sZ1wiIHZhbHVlPVwiU2F2ZVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2F2ZX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHM9VGV4dEFyZWE7Il19