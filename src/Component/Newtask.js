import React,{Component} from 'react';
import '../stylesheets/Newtask.css'
import $ from 'jquery';
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
		this.setState({due:due.target.value});
	}
	onsubmit=(e)=>
	{
		console.log('ok')
		e.preventDefault();
		fetch('https://todo-appapi.herokuapp.com/add',{
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

			$("#newtask").css("display","flex")
			$('#newtask .nameinput').val("");
			$('#newtask .dateinput').val("");
			this.props.updatetask(task);

		})
		.catch(err=>alert(err))
	}
	  render()
	  {
	  return (
	  	<div className="newtask tasknow" id="newtask" onClick={()=>{console.log("ok");$('.task').attr('class','task');$('.newtask').attr('class','newtask tasknow');}}>
	  	<form className="Taskform taskdetails" onSubmit={(e)=>this.onsubmit(e)}>
	      <input type="text" name="task" className="nameinput"  onChange={(e)=>this.taskchange(e)} required="True"></input><br/>
	      <input type="date" name="due" className="dateinput" onChange={(e)=>this.duechange(e)} required="True"></input>
	      <input type="submit" value="add" id="newtaskbtn" className="submitbtn"></input>
	      </form>
			<p class="link"></p>
		</div>
	  	
	    );
  }
}

export default Newtask;