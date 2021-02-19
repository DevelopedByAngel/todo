import React,{Component} from 'react';
import $ from 'jquery'
import '../stylesheets/Newtask.css'
class UpdateTask extends Component {
	constructor(props)
	{
		super(props);
		this.state=
		{
			task:"",
			due:""
		}
	}
	taskchange=(task)=>
	{
		this.setState({task:task.target.value});
		$('.tasknameediting').attr("task",task.target.value)

	}
	duechange=(due)=>
	{
		console.log(due.target.value)
		this.setState({due:due.target.value});
		$('.taskdueediting').attr("due",due.target.value)
	}
	onUpdate=(e)=>
	{
		console.log(this.state)
		console.log($('.tasknameediting').val())
		
		e.preventDefault();
		var data={
			id:$('.editing').attr('id'),
			task:$('.tasknameediting').val(),
			due:$('.taskdueediting').val()
		}
		this.props.updatetaskname(data)
	}
	componentDidMount()
	{
		this.setState({due:$('.taskdueediting').val()})
		this.setState({task:$('.tasknameediting').val()})
	}
	componentDidUpdate()
	{
		if($('#updatetask').css('display')!='none' && this.state.task=="")
		{
			console.log("$('.tasknameediting').val()")
		this.setState({due:$('.taskdueediting').val()})
		this.setState({task:$('.tasknameediting').val()})
		}
	}
	click(e)
	{
		if($(e.target).attr("class")=="formblack")
			$('#updatetask').hide();
	}
	  render()
	  {
	  		console.log(this.props.state)

	  		// $('.tasknameediting').val($('.tasknameediting').attr('task'))
	  		// $('.taskdueediting').val($('.taskdueediting').attr('due'))
	  return (
	  	<div id="updatetask">
	  	<div className="formblack" onClick={(e)=>this.click(e)}>
	      <div className="formin" >
	      <form className="Taskform" onSubmit={(e)=>this.onUpdate(e)}>
	      <label htmlFor="task">Task</label>
	      <input type="text" name="task" className="tasknameediting"  onChange={(e)=>this.taskchange(e)}></input><br/>
	      <label htmlFor="due">Date</label>
	      <input type="date" name="due" className="taskdueediting" onChange={(e)=>this.duechange(e)}></input>
	      <input type="submit" value="Update" id="updatetaskbtn" className="submitbtn" ></input>
	      </form>
	      </div>
	      </div>
	      </div>
	    );
  }
}

export default UpdateTask;