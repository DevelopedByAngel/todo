import React from 'react';
import $ from 'jquery';
import '../stylesheets/Nav.css';
import '../stylesheets/Quote.css'
const Quotes=require('./quotes.json')
const Quote=(props)=>
{
	const {quote}=props;
	const a=Quotes[Math.floor(Math.random()*333)];
	const q=quote
	return (
	      <div className="Quote">
	      <p className="quotetext">{q.quoteText}</p>
	      <p className="author">-{q.quoteAuthor}</p>
	      </div>
	    );

}

export default Quote;