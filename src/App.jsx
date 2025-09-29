import './App.css';
import React, { useState } from "react";

const App = () => {
  const cardSet = {
    title: "World Flags Knowledge Trivia",
    description: "Test your knowledge of world flags by flipping the cards!",
    cards: [
      { question: "https://flagcdn.com/w320/af.png", answer: "Afghanistan	 " },
      { question: "https://flagcdn.com/w320/ar.png", answer: "Argentina	 " },
      { question: "https://flagcdn.com/w320/au.png", answer: "Australia	 " },
      { question: "https://flagcdn.com/w320/br.png", answer: "Brazil	 " },
      { question: "https://flagcdn.com/w320/ca.png", answer: "Canada	 " },
      { question: "https://flagcdn.com/w320/cn.png", answer: "China	 " },
      { question: "https://flagcdn.com/w320/co.png", answer: "Colombia	 " },
      { question: "https://flagcdn.com/w320/ec.png", answer: "Ecuador	 " },
      { question: "https://flagcdn.com/w320/eg.png", answer: "Egypt	 " },
      { question: "https://flagcdn.com/w320/fi.png", answer: "Finland	 " },
      { question: "https://flagcdn.com/w320/fr.png", answer: "France	 " },
      { question: "https://flagcdn.com/w320/de.png", answer: "Germany	 " },
      { question: "https://flagcdn.com/w320/hk.png", answer: "Hong Kong	 " },
      { question: "https://flagcdn.com/w320/in.png", answer: "India	 " },
      { question: "https://flagcdn.com/w320/id.png", answer: "Indonesia	 " },
      { question: "https://flagcdn.com/w320/ir.png", answer: "Iran (Islamic Republic of)	 " },
      { question: "https://flagcdn.com/w320/il.png", answer: "Israel	 " },
      { question: "https://flagcdn.com/w320/it.png", answer: "Italy	 " },
      { question: "https://flagcdn.com/w320/jp.png", answer: "Japan	 " },
      { question: "https://flagcdn.com/w320/kr.png", answer: "Korea (the Republic of)	 " },
      { question: "https://flagcdn.com/w320/my.png", answer: "Malaysia	 " },
      { question: "https://flagcdn.com/w320/mx.png", answer: "Mexico	 " },
      { question: "https://flagcdn.com/w320/nl.png", answer: "Netherlands (the)	 " },
      { question: "https://flagcdn.com/w320/nz.png", answer: "New Zealand	 " },
      { question: "https://flagcdn.com/w320/ph.png", answer: "Philippines (the)	 " },
      { question: "https://flagcdn.com/w320/pr.png", answer: "Puerto Rico	 " },
      { question: "https://flagcdn.com/w320/qa.png", answer: "Qatar	 " },
      { question: "https://flagcdn.com/w320/sa.png", answer: "Saudi Arabia	 " },
      { question: "https://flagcdn.com/w320/sg.png", answer: "Singapore	 " },
      { question: "https://flagcdn.com/w320/es.png", answer: "Spain	 " },
      { question: "https://flagcdn.com/w320/th.png", answer: "Thailand	 " },
      { question: "https://flagcdn.com/w320/ua.png", answer: "Ukraine	 " },
      { question: "https://flagcdn.com/w320/ae.png", answer: "United Arab Emirates (the)	 " },
      { question: "https://flagcdn.com/w320/gb.png", answer: "United Kingdom of Great Britain and Northern Ireland (the)	 " },
      { question: "https://flagcdn.com/w320/us.png", answer: "United States of America (the)	 " },

    ]
  };

  // State for current card index
  const [currentIndex, setCurrentIndex] = useState(0);

  // State for flip toggle
  const [flipped, setFlipped] = useState(false);

  // Handle card flip
  const handleFlip = () => {
    setFlipped(!flipped);
  };

  // Handle next card
  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * cardSet.cards.length);
    setCurrentIndex(randomIndex);
    setFlipped(false); // reset flip
  };

  const currentCard = cardSet.cards[currentIndex];

  return (
    <div className="app-container">
      <div className="header">
        <h1>{cardSet.title}</h1>
        <p>{cardSet.description}</p>
        <p>Total Cards: {cardSet.cards.length}</p>
      </div>

      <div className="card-container" onClick={handleFlip}>
        <div className={`card ${flipped ? "flipped" : ""}`}>
          <div className="card-front">
            <img src={currentCard.question} alt="Flag" />
          </div>
          <div className="card-back">
            <h2>{currentCard.answer}</h2>
          </div>
        </div>
      </div>

      <div className="controls">
        <button onClick={handleNext}>Next Card</button>
      </div>
    </div>
  )
}

export default App