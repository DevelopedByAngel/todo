import React from 'react';
import $ from 'jquery';
import '../stylesheets/Nav.css';
import '../stylesheets/Options.css'
const Options=()=>
{
	$('.delete,.edit,.NewTask').css('display','none')

	return (
		<div className="Optioncontainer">
	      <div className="eg Options" draggable="false" onDragEnd={(e)=>dragend(e)} onDrag={(e)=>drag(e)}>
	      </div>
	      <p onClick={()=>deleteTask()} className="eg opt" id="deleteopt">X</p>
	      <p onClick={()=>editTask()} className="eg opt" id="editopt">edit</p>
	      <p onClick={()=>newTask()} className="eg opt" id="newopt">new</p>
	      
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
	$('.Options').css('animation','unset')
	$('.eg').css('left',e.clientX-15);
	$('.eg').css('top',e.clientY-75);
}
const dragend=(e)=>
{
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
	$('.delete,.edit,.NewTask').css('display','none');	
	$('.delete').css('display','block');
}
const editTask=()=>
{
	$('.delete,.edit,.NewTask').css('display','none')
	$('.edit').css('display','block')
}
const newTask=()=>
{
	$('.delete,.edit,.NewTask').css('display','none')
	$('.NewTask').css('display','block')
}
export default Options;