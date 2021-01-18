import React from "react";
import Task from "./Task";
import Options from "./Options";
const TaskList = (props) => {
	const { tasklist, deletetask,updatetaskname, rerender } = props;
	return tasklist.map((task, index) => {
		return (
			<Task
				task={task.task}
				id={task.id}
				key={task.id}
				due={task.due}
				deletetask={deletetask}
				updatetask={updatetaskname}
				rerender={rerender}
			/>
		);
	});
};

export default TaskList;
