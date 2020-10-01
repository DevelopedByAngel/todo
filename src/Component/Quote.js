import React from 'react';
import $ from 'jquery';
import '../stylesheets/Nav.css'
const Quotes=require('./quotes.json')
const Quote=(props)=>
{
	console.log(Quotes[Math.floor(Math.random()*333)]);
	const q=Quotes[Math.floor(Math.random()*333)];
	return (
	      <div className="Quote">
	      <p>{q.quoteText}</p>
	      <p>{q.quoteAuthor}</p>
	      </div>
	    );

}

export default Quote;