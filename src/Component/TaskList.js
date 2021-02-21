import React from "react";
import Task from "./Task";
const TaskList = (props) => {
	const { tasklist, deletetask,updatetaskname, rerender,sort } = props;
	var sortmethod;
	if(sort==="name")
		sortmethod=compareName
	else 
		sortmethod=compareDate
	return tasklist.sort(sortmethod).map((task, index) => {
		return (
			<Task
				task={task.task}
				id={task.id}
				key={task.id}
				due={task.due}
				done={task.done}
				deletetask={deletetask}
				updatetask={updatetaskname}
				rerender={rerender}
			/>
		);
	});
};
const compareDate=(a,b)=>
{ 
	var d1=new Date(a.due);
	var d2=new Date(b.due);
	var compareDate=0
	if(d1>d2)
	{
		compareDate=1;
	}
	else if(d1<d2)
	{
		compareDate=-1;
	}
	return compareDate
}
const compareName=(a,b)=>
{
	if(a.task.toLowerCase()>b.task.toLowerCase())
		return 1;
	else if(a.task.toLowerCase()<b.task.toLowerCase())
		return -1;
	else
		return 0;
}
export default TaskList;
