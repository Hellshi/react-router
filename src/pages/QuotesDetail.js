import React from "react";
import { useParams, BrowserRouter as Router } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  {
    id: "1",
    author: "Dallon Weeks",
    text: "One kiss at a time",
  },

  {
    id: "2",
    author: "Dallon Weeks",
    text: "Im only doing anything I want to do",
  },

  {
    id: "3",
    author: "Dallon Weeks",
    text: "No, I dont care what momma says",
  },

  {
    id: "4",
    author: "Dallon Weeks",
    text: "I dont believe whatever this is",
  },
];

const QuotesDetail = () => {
  const { quoteId } = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === quoteId);
  console.log(quoteId);

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Router path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Router>
    </>
  );
};

export default QuotesDetail;
