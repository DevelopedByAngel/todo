import React,{Component} from 'react';
import '../stylesheets/Newtask.css'
import $ from 'jquery'
class Newtask extends Component {
	constructor(props)
	{
		super(props);
		this.state=
		{
			task:' ',
			due:' '
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
	onsubmit=(e)=>
	{
		console.log('ok')
		e.preventDefault();
		fetch('http://localhost:3000/add',{
			method:'POST',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({
				id:this.props.state.user.id,
				task:this.state.task,
				due:this.state.due
			})
		})
		.then(res=>res.json())
		.then(task=>
		{
			console.log(task.id);
			$('#newtask').css('display','none');
			this.props.updatetask(task);
			
		})
		.catch(err=>alert(err))
	}
	  render()
	  {
	  		console.log(this.props.state)
	  return (
	  	<div id="newtask">
	      <div className="formblack">
	      <div className="formin">
	      <form className="Taskform" onSubmit={(e)=>this.onsubmit(e)}>
	      <label htmlFor="task">Task</label>
	      <input type="text" name="task"  onChange={(e)=>this.taskchange(e)}></input><br/>
	      <label htmlFor="due">Date</label>
	      <input type="date" name="due" onChange={(e)=>this.duechange(e)}></input>
	      <input type="submit" value="add"></input>
	      </form>
	      </div>
	      </div>
	      </div>
	    );
  }
}

export default Newtask;