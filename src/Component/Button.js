import React from 'react';
import $ from 'jquery';
import '../stylesheets/Button.css'
const Button=(props)=>
{
	const ok=()=>
	{
		if($('.line').css('height')!=='25px')
		{
			$('.line').css({'height':'25px','background':'white'});
			$('.dot').css('transform','translateY(8px)')
			$('.Nav').css({'width':'30%'})
		}
		else
		{
			$('.line').css({'height':'5px','background':'white'});
			$('.dot:nth-child(1)').css('transform','translateY(0px)')
			$('.dot:nth-child(2)').css('transform','translateY(8px)')
			$('.dot:nth-child(3)').css('transform','translateY(17px)')
			$('.Nav').css({'width':'0%'});
		}
	}
	return (
	      <div className="Button">
	      <button className="menubutton" onClick={()=>ok()}>
	      <span className="menu">
	      <span className="dot"/>
	      <span className="dot"/>
	      <span className="dot"/>
	      <span className="line1 line"/>
	      <span className="line2 line"/>
	      </span>
	      </button>
	      </div>
	    );

}

export default Button;