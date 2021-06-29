import React from "react";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const AddQuoteHandler = (quote) => {
    console.log(quote);
  };
  return (
    <div>
      <QuoteForm onAddQuote={AddQuoteHandler} />
    </div>
  );
};

export default NewQuote;
