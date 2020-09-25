import React from 'react';
import $ from 'jquery';
import '../stylesheets/Nav.css'
const Nav=(props)=>
{
	const {route,now}=props;
	$('*').attr('id','')
	$('.'+now).attr('id','disabled')
	if(now==='task')
		$('.signout').css('display', 'block')
	else
		$('.signout').css('display','none')
	const changeroute=(r)=>
	{
		if($(window).width()<600)
			$('.menubutton').click();
		console.log(r,now)
		$('*').attr('id','')
		$('.'+now).attr('id','disabled')
		if(now==='task')
		$('.signout').css('display', 'block')
		else
		$('.signout').css('display','none')
		if(r!==now)
		route(r)
	}
	return (
	      <div className="Nav">
	      <p className='nav-link login' onClick={()=>changeroute('login')}>Login</p>
	      <p className='nav-link signup' onClick={()=>changeroute('signup')}>SignUp</p>
	      <p className='nav-link signout' onClick={()=>changeroute('login')}>Sign Out</p>
	      <a className='nav-link contact' href="mailto:angelfrancis1111@gmail.com">Contact</a>
	      </div>
	    );

}

export default Nav;