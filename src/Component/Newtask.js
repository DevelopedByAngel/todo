import React,{Component} from 'react';
import '../stylesheets/Newtask.css'
import $ from 'jquery'
class Newtask extends Component {
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
			$('.NewTask').css('display','none');
			this.props.updatetask(task);
			
		})
		.catch(err=>alert(err))
	}
	  render()
	  {
	  		console.log(this.props.state)
	  return (
	      <div className="NewTask">
	      <div className="main">
	      <form className="Taskform" onSubmit={(e)=>this.onsubmit(e)}>
	      <label htmlFor="task">Task</label>
	      <input type="text" name="task"  onChange={(e)=>this.taskchange(e)}></input><br/>
	      <label htmlFor="due">Password</label>
	      <input type="date" name="due" onChange={(e)=>this.duechange(e)}></input>
	      <input type="submit" value="add"></input>
	      </form>
	      </div>
	      </div>
	    );
  }
}

export default Newtask;