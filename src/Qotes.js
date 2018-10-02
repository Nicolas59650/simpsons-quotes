import React from "react";
// src/Quotes.js
const Quotes = [
  {
    quote:
      "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
    character: "Homer Simpson",
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
