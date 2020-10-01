import React from 'react';
import Task from './Task';
const TaskList=(props)=>
{
	const {tasklist,deletetask}=props;
	  return (
	      tasklist.map(task=>
	      {
	      	return <Task task={task.task} id={task.id} key={task.id} due={task.due} deletetask={deletetask} />
	      })
	    );
  }

export default TaskList;