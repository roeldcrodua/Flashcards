import './App.css';
import React, { useState } from "react";

const App = () => {

  const cardSet = {
    title: "World Flags Knowledge Trivia",
    description1: "Test your knowledge of world flags by guessing first the corresponding country name.",
    description2: "Verify your guess by flipping the flag image!",
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
      { question: "https://flagcdn.com/w320/ir.png", answer: "Iran" },
      { question: "https://flagcdn.com/w320/il.png", answer: "Israel	 " },
      { question: "https://flagcdn.com/w320/it.png", answer: "Italy	 " },
      { question: "https://flagcdn.com/w320/jp.png", answer: "Japan	 " },
      { question: "https://flagcdn.com/w320/kr.png", answer: "South Korea" },
      { question: "https://flagcdn.com/w320/my.png", answer: "Malaysia	 " },
      { question: "https://flagcdn.com/w320/mx.png", answer: "Mexico	 " },
      { question: "https://flagcdn.com/w320/nl.png", answer: "Netherlands" },
      { question: "https://flagcdn.com/w320/nz.png", answer: "New Zealand	 " },
      { question: "https://flagcdn.com/w320/ph.png", answer: "Philippines" },
      { question: "https://flagcdn.com/w320/pr.png", answer: "Puerto Rico	 " },
      { question: "https://flagcdn.com/w320/qa.png", answer: "Qatar	 " },
      { question: "https://flagcdn.com/w320/sa.png", answer: "Saudi Arabia	 " },
      { question: "https://flagcdn.com/w320/sg.png", answer: "Singapore	 " },
      { question: "https://flagcdn.com/w320/es.png", answer: "Spain	 " },
      { question: "https://flagcdn.com/w320/th.png", answer: "Thailand	 " },
      { question: "https://flagcdn.com/w320/ua.png", answer: "Ukraine	 " },
      { question: "https://flagcdn.com/w320/ae.png", answer: "United Arab Emirates" },
      { question: "https://flagcdn.com/w320/gb.png", answer: "United Kingdom of Great Britain and Northern Ireland" },
      { question: "https://flagcdn.com/w320/us.png", answer: "United States of America" },
    ]
  };
  // Handle count
  const [count, setCount] = useState(0);
  const updateCount = () => setCount(count + 1);
  // State variables
  const [started, setStarted] = useState(false); // tracks if game started
  const [currentIndex, setCurrentIndex] = useState(0); // current card index
  const [flipped, setFlipped] = useState(false); // flip state
  const [cards, setCards] = useState(cardSet.cards);
  const [userGuess, setUserGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [masteredCards, setMasteredCards] = useState([]);
  const currentCard = cards[currentIndex];
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Start game
  const handleStart = () => {
    setStarted(true);
  };

  // Handle card flip
  const handleFlip = () => {
    setFlipped(!flipped);
  };

  // Handle Next
  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      resetAll();
    }
  };

  // Handle previous
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      resetAll();
    }
  };

  // Handle Shuffle using Random
  const handleShuffle = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
    resetAll();
  };

  // Removing space and other non-letter character
  const normalized = (str) =>
    str.toLowerCase().replace(/[^\w\s]|_/g, "").replace(" ", "");


  // Handle Guess check
  const handleGuess = () => {
    const correct = normalized(currentCard.answer).includes(normalized(userGuess));
    if (userGuess.length < 3) {
      setFeedback("⚠️ Please enter at least 3 characters.");
      return;
    }
    // If input is empty then disable the submit button
    if (!userGuess.trim()) {
      setIsSubmitting(true);
    }
    else {
      setIsSubmitting(false);
      if (correct) {
        setFeedback("✅ Correct!");
        setCurrentStreak(currentStreak + 1);
        if (currentStreak + 1 > longestStreak) setLongestStreak(currentStreak + 1);
        setIsSubmitting(true);
      }
      else {
        setFeedback("❌ Incorrect!");
        setCurrentStreak(0);
        setIsSubmitting(false);
      }
      updateCount();
    }
  };

  // Handle Master Card
  const handleMaster = () => {
    const updatedCards = cards.filter((_, i) => i !== currentIndex);
    setMasteredCards([...masteredCards, currentCard]);
    setCards(updatedCards);
    if (updatedCards.length > 0) {
      setCurrentIndex(Math.min(currentIndex, updatedCards.length - 1));
    }
    resetAll();
  };

  // Option Reset
  const resetAll = () => {
    setFlipped(false);
    setUserGuess("");
    setFeedback("");
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1>{cardSet.title}</h1>
        <h3>{cardSet.description1}</h3>
        <h3>{cardSet.description2}</h3>
        <h4>Total Flags: {cardSet.cards.length} | Guess Counter: {count}</h4>
        <h4>Current Streak: {currentStreak} | Longest Streak: {longestStreak}</h4>
      </div>
      {!started ? (
        <div className="card-container">
          <div className="card">
            <div className="card-front">
              <button onClick={handleStart}>Start</button>
            </div>
          </div>
        </div>
      ) : cards.length === 0 ? (
        <div className="empty-screen">
          <h3>🎉 You’ve mastered all cards!</h3>
          <p>Mastered: {masteredCards.length}</p>
          <button onClick={() => window.location.reload()}>Restart</button>
        </div>
      ) : (
        <>
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
          <div className="guess-section">
            <input
              type="text"
              placeholder="Enter your guess..."
              value={userGuess}
              onChange={(e) => setUserGuess(e.target.value)}
            />
            {/* Disable button if input is empty (after trimming spaces) */}
            <button onClick={handleGuess} disabled={userGuess.trim().length < 3 && isSubmitting}>Submit</button>
            <p className={`feedback ${feedback.includes("Correct") ? "correct" : "incorrect"}`}>
              {feedback}
            </p>
          </div>
          <div className="controls">
            <button onClick={handlePrev} disabled={currentIndex === 0}>
              ⬅ Prev
            </button>
            <button onClick={handleNext} disabled={currentIndex === cards.length - 1}>
              Next ➡
            </button>
            <button onClick={handleShuffle}>🔀 Shuffle</button>
            <button onClick={handleMaster}>⭐ Mastered</button>
          </div>
          <div className="mastered-list">
            <h4>{masteredCards.length <= 1 ? "Mastered Flag: " : "Mastered Flags: "} {masteredCards.length} | {(cardSet.cards.length - masteredCards.length <= 1) ? "Remaining Card: " : "Remaining Cards: "}  {cardSet.cards.length - masteredCards.length}  </h4>
          </div>

        </>

      )}

    </div>
  )
}

export default App