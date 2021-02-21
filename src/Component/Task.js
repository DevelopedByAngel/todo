import React from "react";
import "../stylesheets/Task.css";
import $ from "jquery";
import {CgClose} from "react-icons/cg"
import {AiFillEdit} from "react-icons/ai"
const Task = (props) => {
	const { task, id, due,done, deletetask,updatetask, rerender } = props;
	var date = "" + due;
	date = date.slice(0, 10);
	return (
		<div className="task" id={"task" + id} onClick={(e) => click(id)}>
			<div className="taskdetails">
			<input type="checkbox" className="check" checked={done} onClick={()=>checktask(id,task,due,updatetask)}/>
				<p taskid={id} id={"taskname" + id} className="taskname">
					{task}
				</p>
				<span id={"taskdue" + id}>{reverseDate(date)}</span>
								<div className="flex-options">

				<span onClick={(e) =>{ $('#task'+id).hide();deletetask(id)}} className="delete">
					<CgClose/>
				</span>
				<span
					onClick={(e) => updatetaskname(e, rerender,id)}
					id={id}
					className="edit"
				>
					<AiFillEdit className="taskoptimg" id={id} onClick={()=>$('#'+id).click()}/>
				</span>
				</div>
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
const updatetaskname = (e, rerender,id) => {

	$("#updatetask").css("display","block");
	$('.editing').attr("class","edit")
	$('.edit#'+id).attr("class","edit editing")
	$('.tasknameediting').val($("#taskname" + id).text())
	$(".taskdueediting").val(reverseDate($("#taskdue" + id).text()));


	
};

const click = (e) => {
$(".newtask").attr("class", "newtask");
		$(".task").attr("class", "task");
		$("#task"+e).attr("class", "task tasknow");

};
const reverseDate = (str) => {
	var list = str.split("-");
	list = list.reverse();
	return list.join("-");
};

export default Task;
