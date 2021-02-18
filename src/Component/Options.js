import React from "react";
import $ from "jquery";
import "../stylesheets/Nav.css";
import "../stylesheets/Options.css";
import {BiSortAZ} from "react-icons/bi";
import {FaSortNumericDownAlt} from "react-icons/fa"
import {AiFillSetting} from "react-icons/ai"
import {MdFormatSize} from "react-icons/md"
const Options = (props) => {
	const {sort} =props
	return (
		<div>
			<p onClick={()=>sort("name")}  className="eg opt" id="namesortopt">
				<BiSortAZ className="optimg" />
			</p>
			<p  onClick={()=>sort("date")} className="eg opt" id="datesortopt">
				<FaSortNumericDownAlt className="optimg" />
			</p>
			<p  onClick={()=>size()} className="eg opt" id="sizeopt">
				<MdFormatSize className="optimg" />
			</p>
			<div
				className="eg drag"
				draggable="true"
				onClick={() => optionsclick()}
				onTouchEnd={(e) => touchend(e)}
				onTouchMove={(e) => touchdrag(e)}
				onDrag={(e) => drag(e)}
				onDragEnd={(e) => dragend(e)}
			><AiFillSetting/></div>
		</div>
	);
};
$(".tooltip").css("left", "");
const size=()=>
{
	console.log("size change",$('.task').css("font-size"))
	if($('.task').css("font-size")=="19.2px")
		$('.task').css("font-size","xx-large");
	else
		$('.task').css("font-size","larger");
}
const touchend = (e) => {
	$(".Options").css("animation", "unset");
	$("body").css("overflow", "scroll");
};
const touchdrag = (event) => {
	$(".Options").css("animation", "unset");
	$("body").css("overflow", "hidden");
	var touch = event.targetTouches[0];
	$(".eg").css("left", touch.pageX);
	$(".eg").css("top", touch.pageY);
};
const drag = (e) => {
	$(".opt").css("transition-delay", "0s");
	$(".Options").css("animation", "unset");
	$(".eg").css("left", e.clientX - 15);
	$(".eg").css("top", e.clientY - 75);
};
const dragend = (e) => {
	$(".opt:nth-child(2)").css("transition-delay", "0.1s");
	$(".opt:nth-child(3)").css("transition-delay", "0.2s");
	$(".Options").css("animation", "unset");
	$(".eg").css("left", e.clientX - 15);
	$(".eg").css("top", e.clientY - 75);
};
const optionsclick = () => {
	$(".Options").css("animation", "unset");
	if (
		parseInt($(".drag").css("left")) < $(window).width() / 2 &&
		parseInt($(".drag").css("top")) < $(window).height() / 2
	) {
		if ($(".drag").css("left") === $("#namesortopt").css("left")) {
			$("#namesortopt").css(
				"left",
				parseInt($("#namesortopt").css("left")) + 70
			);
			$("#datesortopt").css({
				left: parseInt($("#datesortopt").css("left")) + 50,
				top: parseInt($("#datesortopt").css("top")) + 50,
			});
			$("#sizeopt").css("top", parseInt($("#sizeopt").css("top")) + 70);
		} else {
			$("#namesortopt").css("left", parseInt($(".drag").css("left")));
			$("#datesortopt").css({
				left: parseInt($(".drag").css("left")),
				top: parseInt($(".drag").css("top")),
			});
			$("#sizeopt").css("top", parseInt($(".drag").css("top")));
		}
	} else if (
		parseInt($(".drag").css("left")) > $(window).width() / 2 &&
		parseInt($(".drag").css("top")) < $(window).height() / 2
	) {
		if ($(".drag").css("left") === $("#namesortopt").css("left")) {
			$("#namesortopt").css(
				"left",
				parseInt($("#namesortopt").css("left")) - 70
			);
			$("#datesortopt").css({
				left: parseInt($("#datesortopt").css("left")) - 50,
				top: parseInt($("#datesortopt").css("top")) + 50,
			});
			$("#sizeopt").css("top", parseInt($("#sizeopt").css("top")) + 70);
		} else {
			$("#namesortopt").css("left", parseInt($(".drag").css("left")));
			$("#datesortopt").css({
				left: parseInt($(".drag").css("left")),
				top: parseInt($(".drag").css("top")),
			});
			$("#sizeopt").css("top", parseInt($(".drag").css("top")));
		}
	} else if (
		parseInt($(".drag").css("left")) < $(window).width() / 2 &&
		parseInt($(".drag").css("top")) > $(window).height() / 2
	) {
		if ($(".drag").css("left") === $("#namesortopt").css("left")) {
			$("#namesortopt").css(
				"left",
				parseInt($("#namesortopt").css("left")) + 70
			);
			$("#datesortopt").css({
				left: parseInt($("#datesortopt").css("left")) + 50,
				top: parseInt($("#datesortopt").css("top")) - 50,
			});
			$("#sizeopt").css("top", parseInt($("#sizeopt").css("top")) - 70);
		} else {
			$("#namesortopt").css("left", parseInt($(".drag").css("left")));
			$("#datesortopt").css({
				left: parseInt($(".drag").css("left")),
				top: parseInt($(".drag").css("top")),
			});
			$("#sizeopt").css("top", parseInt($(".drag").css("top")));
		}
	} else if (
		parseInt($(".drag").css("left")) > $(window).width() / 2 &&
		parseInt($(".drag").css("top")) > $(window).height() / 2
	) {
		if ($(".drag").css("left") === $("#namesortopt").css("left")) {
			$("#namesortopt").css(
				"left",
				parseInt($("#namesortopt").css("left")) - 70
			);
			$("#datesortopt").css({
				left: parseInt($("#datesortopt").css("left")) - 50,
				top: parseInt($("#datesortopt").css("top")) - 50,
			});
			$("#sizeopt").css("top", parseInt($("#sizeopt").css("top")) - 70);
		} else {
			$("#namesortopt").css("left", parseInt($(".drag").css("left")));
			$("#datesortopt").css({
				left: parseInt($(".drag").css("left")),
				top: parseInt($(".drag").css("top")),
			});
			$("#sizeopt").css("top", parseInt($(".drag").css("top")));
		}
	}
};

export default Options;
