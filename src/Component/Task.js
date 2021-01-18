import React from "react";
import "../stylesheets/Task.css";
import $ from "jquery";
const Task = (props) => {
	const { task, id, due, deletetask,updatetask, rerender } = props;
	console.log("due" + due);
	var date = "" + due;
	date = date.slice(0, 10);
	return (
		<div className="task" id={"task" + id} onClick={(e) => click(e)}>
			<div className="taskdetails">
			<input type="checkbox" className="check" onClick={()=>checktask(id,task,due,updatetask)}/>
				<p taskid={id} id={"taskname" + id} className="taskname">
					{task}
				</p>
				<span id={"taskdue" + id}>{reverseDate(date)}</span>
				<span onClick={(e) => deletetask(id)} className="delete">
					<img
						src={require("../assets/remove.png")}
						className="taskoptimg"
					/>
				</span>
				<span
					onClick={(e) => updatetaskname(e, rerender)}
					id={id}
					className="edit"
				>
					<img
						src={require("../assets/edit.png")}
						className="taskoptimg"
					/>
				</span>
			</div>
			<p class="link"></p>
		</div>
	);
};
const checktask = (id,task,due,updatetask) =>
{
	if(document.querySelector("#task"+id).querySelector(".check").checked)
	{
		var done=true;
	}
	else
	{
		var done=false;
	}
	var task={
		id:id,
		task:task,
		due:due,
		done:done
	}
	updatetask(task)
}
const updatetaskname = (e, rerender) => {
	var a = $(e);
	rerender();
	console.log($(e.target).attr("class"));
	if ($(e.target).attr("class") == "taskoptimg") {
		a = $(e.target).parent();
	}
	$("#updatetask").css("display", "block");
	console.log("ok" + $("#taskname" + $(a).attr("id")).text());
	$(".editing").attr("class", "");
	$(a).attr("class", "edit editing");
	$(".tasknameediting").attr("task", $("#taskname" + $(a).attr("id")).text());
	$(".taskdueediting").attr(
		"due",
		reverseDate($("#taskdue" + $(a).attr("id")).text())
	);
};

const click = (e) => {
	if ($(e.target).attr("class") == "task") {
		$(".task").attr("class", "task");
		$(e.target).attr("class", "task tasknow");
	}
	if ($(".delete").css("display") == "none") {
		if ($(e.target).parent().attr("class") == "task") {
			$(".task").attr("class", "task");
			$(e.target).parent().attr("class", "task tasknow");
		} else if ($(e.target).parent().parent().attr("class") == "task") {
			$(".task").attr("class", "task");
			$(e.target).parent().parent().attr("class", "task tasknow");
		}
	}
};
const reverseDate = (str) => {
	var list = str.split("-");
	list = list.reverse();
	return list.join("-");
};

export default Task;
