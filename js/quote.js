const quoteList = [
  {
    content: "We can draw lessons from the past, but we cannot live in it.",
    name: "Lyndon B. Johnson",
  },
  {
    content: "We make a living by what we get, we make a life by what we give.",
    name: "Sir Winston Churchill",
  },
  {
    content:
      "Youth is a wonderful thing. What a crime to waste it on children.",
    name: "George Bernard Shaw",
  },
  {
    content:
      "If you wouldst live long, live well, for folly and wickedness shorten life.",
    name: "Benjamin Franklin",
  },
  {
    content: "A man has to have a code, a way of life to live by.",
    name: "John Wayne",
  },
  {
    content:
      "A long life may not be good enough, but a good life is long enough.",
    name: "Benjamin Franklin",
  },
  {
    content: "Life is a long lesson in humility.",
    name: "James M. Barrie",
  },
  {
    content: "All people want is someone to listen.",
    name: "Hugh Elliott",
  },
];

const quoteDiv = document.getElementById("random-quote");
const quote = quoteDiv.querySelector("#quote");
const author = quoteDiv.querySelector("#author");

const randomQuote = quoteList[Math.floor(Math.random() * quoteList.length)];
quote.innerText = randomQuote.content;
author.innerText = `- ${randomQuote.name}`;
