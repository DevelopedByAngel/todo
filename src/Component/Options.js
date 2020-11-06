import React from 'react';
import $ from 'jquery';
import '../stylesheets/Nav.css';
import '../stylesheets/Options.css'
const Options=()=>
{
	$('.delete,.edit,.NewTask').css('display','none')

	return (
		<div>
	      <p onClick={()=>deleteTask()} className="eg opt" id="deleteopt"><img src={require('../assets/delete.png')} className="optimg"/></p>
	      <p onClick={()=>editTask()} className="eg opt" id="editopt"><img src={require('../assets/edit.png')} className="optimg"/></p>
	      <p onClick={()=>newTask()} className="eg opt" id="newopt"><img src={require('../assets/add.png')} className="optimg"/></p>
	      
	      <div className="eg drag" draggable="true" onClick={()=>optionsclick()} onTouchEnd={(e)=>touchend(e)} onTouchMove={(e)=>touchdrag(e)} onDrag={(e)=>drag(e)}  onDragEnd={(e)=>dragend(e)}>
	      </div>
	      </div>

	    );
}
$('.tooltip').css('left','')
const touchend=(e)=>
{
	$('.Options').css('animation','unset')
	$('body').css('overflow','scroll');
}
const touchdrag=(event)=>
{
	$('.Options').css('animation','unset')
	$('body').css('overflow','hidden');
    var touch = event.targetTouches[0];
    $('.eg').css('left',touch.pageX);
	$('.eg').css('top',touch.pageY);
};
const drag=(e)=>
{
	$('.opt').css("transition-delay","0s");
	$('.Options').css('animation','unset')
	$('.eg').css('left',e.clientX-15);
	$('.eg').css('top',e.clientY-75);
}
const dragend=(e)=>
{
	$('.opt:nth-child(2)').css("transition-delay","0.1s");
	$('.opt:nth-child(3)').css("transition-delay","0.2s");
	$('.Options').css('animation','unset')
	$('.eg').css('left',e.clientX-15);
	$('.eg').css('top',e.clientY-75);
}
const optionsclick=()=>
{
	$('.Options').css('animation','unset')
	if((parseInt($('.drag').css('left'))<$(window).width()/2) &&(parseInt($('.drag').css('top'))<$(window).height()/2))
	{
		if($('.drag').css('left')===$('#deleteopt').css('left'))
		{
		$('#deleteopt').css('left',parseInt($('#deleteopt').css('left'))+70)
		$('#editopt').css({'left':parseInt($('#editopt').css('left'))+50,'top':parseInt($('#editopt').css('top'))+50})
		$('#newopt').css('top',parseInt($('#newopt').css('top'))+70)
		}
		else
		{
			$('#deleteopt').css('left',parseInt($('.drag').css('left')))
			$('#editopt').css({'left':parseInt($('.drag').css('left')),'top':parseInt($('.drag').css('top'))})
			$('#newopt').css('top',parseInt($('.drag').css('top')))
		}
	}
	else if((parseInt($('.drag').css('left'))>$(window).width()/2) &&(parseInt($('.drag').css('top'))<$(window).height()/2))
	{
		if($('.drag').css('left')===$('#deleteopt').css('left'))
		{
		$('#deleteopt').css('left',parseInt($('#deleteopt').css('left'))-70)
		$('#editopt').css({'left':parseInt($('#editopt').css('left'))-50,'top':parseInt($('#editopt').css('top'))+50})
		$('#newopt').css('top',parseInt($('#newopt').css('top'))+70)
		}
		else
		{
			$('#deleteopt').css('left',parseInt($('.drag').css('left')))
			$('#editopt').css({'left':parseInt($('.drag').css('left')),'top':parseInt($('.drag').css('top'))})
			$('#newopt').css('top',parseInt($('.drag').css('top')))
		}
	}
	else if((parseInt($('.drag').css('left'))<$(window).width()/2) &&(parseInt($('.drag').css('top'))>$(window).height()/2))
	{
		if($('.drag').css('left')===$('#deleteopt').css('left'))
		{
		$('#deleteopt').css('left',parseInt($('#deleteopt').css('left'))+70)
		$('#editopt').css({'left':parseInt($('#editopt').css('left'))+50,'top':parseInt($('#editopt').css('top'))-50})
		$('#newopt').css('top',parseInt($('#newopt').css('top'))-70)
		}
		else
		{
			$('#deleteopt').css('left',parseInt($('.drag').css('left')))
			$('#editopt').css({'left':parseInt($('.drag').css('left')),'top':parseInt($('.drag').css('top'))})
			$('#newopt').css('top',parseInt($('.drag').css('top')))
		}
	}
	else if((parseInt($('.drag').css('left'))>$(window).width()/2) &&(parseInt($('.drag').css('top'))>$(window).height()/2))
	{
		if($('.drag').css('left')===$('#deleteopt').css('left'))
		{
		$('#deleteopt').css('left',parseInt($('#deleteopt').css('left'))-70)
		$('#editopt').css({'left':parseInt($('#editopt').css('left'))-50,'top':parseInt($('#editopt').css('top'))-50})
		$('#newopt').css('top',parseInt($('#newopt').css('top'))-70)
		}
		else
		{
			$('#deleteopt').css('left',parseInt($('.drag').css('left')))
			$('#editopt').css({'left':parseInt($('.drag').css('left')),'top':parseInt($('.drag').css('top'))})
			$('#newopt').css('top',parseInt($('.drag').css('top')))
		}
	}

}
const deleteTask=()=>
{
	$('.delete,.edit,#newtask,#updatetask').css('display','none');	
	$('.delete').css('display','block');
}
const editTask=()=>
{
	$('.delete,.edit,#newtask,#updatetask').css('display','none')
	$('.edit').css('display','block')
}
const newTask=()=>
{
	$('.delete,.edit,#newtask,#updatetask').css('display','none')
	$('#newtask').css('display','block')
}
export default Options;