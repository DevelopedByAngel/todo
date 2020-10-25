import React from 'react';
import '../stylesheets/Task.css'
import $ from 'jquery';
const Task=(props)=>
{
	
	const {task,id,due,deletetask}=props;
	console.log('due'+due)
	var date=''+due;
	date=date.slice(0,10)
	  return (
	  	<div className="task" id={"task"+id} onClick={(e)=>click(e)}>
	      <div className="taskdetails"><p taskid={id} id={"taskname"+id} className="taskname" >{task}</p><span id={"taskdue"+id}>{reverseDate(date)}</span><span onClick={(e)=>deletetask({id})} className="delete">X</span><span onClick={(e)=>updatetaskname(e)} id={id} className="edit">edit</span></div><p class="link"></p>
	      </div>
	    );
  }
const updatetaskname =(e)=>
{
	$('#updatetask').css("display", "block");
	console.log('ok'+$("#taskname"+$(e.target).attr('id')).text())
	$('.editing').attr('class','')
	$(e.target).attr('class','edit editing');
	$('.tasknameediting').attr('value',$("#taskname"+$(e.target).attr('id')).text())
	$('.taskdueediting').attr('value',reverseDate($('#taskdue'+$(e.target).attr('id')).text()));
}

const click=(e)=>
{
	if($(e.target).attr('class')=='task')
	{
		$('.task').attr('class','task')
		$(e.target).attr('class','task tasknow')
	}
	if($('.delete').css('display')=='none')
	{
		if($(e.target).parent().attr('class')=='task')
		{
			$('.task').attr('class','task')
			$(e.target).parent().attr('class','task tasknow')
		}
		else if($(e.target).parent().parent().attr('class')=='task')
		{
			$('.task').attr('class','task')
			$(e.target).parent().parent().attr('class','task tasknow')
		}
	}
}
const reverseDate=(str)=>
{
	var list=str.split('-')
	list=list.reverse()
	return list.join('-')
}

export default Task;
