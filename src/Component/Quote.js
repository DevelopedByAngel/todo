import React from 'react';
import '../stylesheets/Nav.css';
import '../stylesheets/Quote.css'
const Quote=(props)=>
{
	const {quote}=props;
	const q=quote
	return (
	      <div className="Quote">
	      <p className="quotetext">{q.quoteText}</p>
	      <p className="author">-{q.quoteAuthor}</p>
	      </div>
	    );

}

export default Quote;