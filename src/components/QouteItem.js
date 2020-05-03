import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ThemeContext } from "../context/theme-context";

const QuoteItem = () => {
  const theme = useContext(ThemeContext);
  const [quote, setQuote] = useState({
    text: "",
    author: "",
  });

  const fetchQuotes = async () => {
    const response = await axios.get(`https://type.fit/api/quotes`);
    const randomQuote =
      response.data[Math.floor(Math.random() * response.data.length)];
    setQuote(randomQuote);
  };
  useEffect(() => {
    fetchQuotes();
  }, []);

  const changeQuote = (e) => {
    e.preventDefault();
    fetchQuotes();
  };

  return (
    <>
      <h2
        className="ui header"
        style={{
          backgroundColor: theme.background,
          color: theme.foreground,
        }}
      >
        Quote of the day!
      </h2>
      <p>{quote.text}</p>
      <p>
        <strong>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={`https://en.wikipedia.org/wiki/${quote.author}`}
          >
            {quote.author}
          </a>
        </strong>
      </p>
      <button onClick={changeQuote} className="ui button">
        Shuffle Quotes
      </button>
    </>
  );
};

export default QuoteItem;
