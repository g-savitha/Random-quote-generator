import React, { useState, useEffect } from 'react';
import quotesData from './quotes.json';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const randomQuote = quotesData[Math.floor(Math.random() * quotesData.length)];
  const shareOnTwitter = '';
  const shareOnTumblr = '';
  useEffect(() => {
    setTimeout(() => {
      setQuote(randomQuote.quote);
      setAuthor(randomQuote.author);
    }, 5000);
  }, [quote]);
  const handleClick = () => {
    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author);
  };
  return (
    <div className="App">
      <div className="card">
        <h1 className="heading">Random Quote Generator</h1>
        <div className="RandomQuote">
          <div className="quote">"{quote}"</div>
          <div className="author"> - {author}</div>
        </div>
        <div className="buttons">
          <button className="next-quote" onClick={handleClick}>
            Next Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
