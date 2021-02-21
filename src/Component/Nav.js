import React from 'react';
import $ from 'jquery';
import '../stylesheets/Nav.css'
const Nav=(props)=>
{
	const {route,now}=props;
	if(now=='task')
		$('.signout').css('display', 'block')
	else
		$('.signout').css('display','none')
	$('.nav-link').attr('id','')
	if(now!=='task')
		$('.'+now).attr('id','disabled')
		
	const changeroute=(r)=>
	{
		if($(window).width()<600)
			$('.menubutton').click();
		
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