import React,{Component} from 'react';
import $ from 'jquery'
import '../stylesheets/Newtask.css'
class UpdateTask extends Component {
	constructor(props)
	{
		super(props);
		this.state=
		{
			task:'new',
			due:'10-10-2020'
		}
	}
	taskchange=(task)=>
	{
		this.setState({task:task.target.value});
	}
	duechange=(due)=>
	{
		console.log(due.target.value)
		this.setState({due:due.target.value});
	}
	onUpdate=(e)=>
	{
		console.log('ok')
		e.preventDefault();
		var data={
			id:$('.editing').attr('id'),
			task:this.state.task,
			due:this.state.due
		}
		this.props.updatetaskname(data)
	}
	  render()
	  {
	  		console.log(this.props.state)
	  return (
	  	<div id="updatetask">
	  	<div className="formblack">
	      <div className="formin" >
	      <form className="Taskform" onSubmit={(e)=>this.onUpdate(e)}>
	      <label htmlFor="task">Task</label>
	      <input type="text" name="task" className="tasknameediting"  onChange={(e)=>this.taskchange(e)}></input><br/>
	      <label htmlFor="due">Date</label>
	      <input type="date" name="due" className="taskdueediting" onChange={(e)=>this.duechange(e)}></input>
	      <input type="submit" value="Update"></input>
	      </form>
	      </div>
	      </div>
	      </div>
	    );
  }
}

export default UpdateTask;