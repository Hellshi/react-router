import React from "react";
import QuoteList from "../components/quotes/QuoteList";
const DUMMY_QUOTES = [
  {
    id: 1,
    author: "Dallon Weeks",
    text: "One kiss at a time",
  },

  {
    id: 2,
    author: "Dallon Weeks",
    text: "Im only doing anything I want to do",
  },

  {
    id: 3,
    author: "Dallon Weeks",
    text: "No, I dont care what momma says",
  },

  {
    id: 4,
    author: "Dallon Weeks",
    text: "I dont believe whatever this is",
  },
];
const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
