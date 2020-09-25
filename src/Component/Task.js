import React from 'react';
const Task=(props)=>
{
	const {task,id,due,deletetask,updatetaskname}=props;
	var date=''+due;
	date=date.slice(0,10)
	  return (
	  	<div className="task">
	      <p taskid={id} >{task}</p><span>{reverseDate(date)}</span><span onClick={(e)=>deletetask({id})}>X</span><span onClick={(e)=>updatetaskname({id:id,task:'tasknew'})}>edit</span>
	      </div>
	    );
  }
const reverseDate=(str)=>
{
	var list=str.split('-')
	list=list.reverse()
	return list.join('-')
}

export default Task;