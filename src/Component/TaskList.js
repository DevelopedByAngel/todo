import React from 'react';
import Task from './Task';
const TaskList=(props)=>
{
	const {tasklist,deletetask,updatetaskname}=props;
	// console.log(deletetask)
	  return (
	      tasklist.map(task=>
	      {
	      	return <Task task={task.task} id={task.id} key={task.id} due={task.due} deletetask={deletetask} updatetaskname={updatetaskname}/>
	      })
	    );
  }

export default TaskList;