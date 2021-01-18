import React from "react";
import Task from "./Task";
import Options from "./Options";
const TaskList = (props) => {
	const { tasklist, deletetask,updatetaskname, rerender } = props;
	console.log(updatetaskname)
	return tasklist.sort(compareDate).map((task, index) => {
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
export default TaskList;
