import React from "react";
import Quote from "./Quote";
// src/Quotes.js
const quotes = [
  {
    quote: "His name is Homer",
    character:"Homer Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
  },
];

const Quotes = () => (
  <div>
    {quotes.map(quote => (
      <Quote quote={quote.quote} image={quote.image} character={quote.character} />
    ))}
  </div>
);

export default Quotes;
