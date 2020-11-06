import React from 'react';
import $ from 'jquery';
import '../stylesheets/Nav.css';
import '../stylesheets/Quote.css'
const Quotes=require('./quotes.json')
const Quote=(props)=>
{
	console.log(Quotes[Math.floor(Math.random()*333)]);
	const q=Quotes[Math.floor(Math.random()*333)];
	return (
	      <div className="Quote">
	      <p className="quotetext">{q.quoteText}</p>
	      <p className="author">-{q.quoteAuthor}</p>
	      </div>
	    );

}

export default Quote;