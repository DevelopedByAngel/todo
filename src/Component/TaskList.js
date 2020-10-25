import React from 'react';
import Task from './Task';
import Options from './Options';
const TaskList=(props)=>
{
	const {tasklist,deletetask}=props;
	  return (
	      tasklist.map((task,index)=>
	      {
	      	return <Task task={task.task} id={task.id} key={task.id} due={task.due} deletetask={deletetask} />
	      })
	    );
  }

export default TaskList;