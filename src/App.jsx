import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";

function App() {
  const [modalContent, setModalContent] = useState(null);
  const [showPart4Text, setShowPart4Text] = useState(false);

  const reasons = [
    {
      title: "I'm driven by passion",
      description: "This vehicle does not require fuel to keep zooming!",
      emoji: "🚗💨",
    },
    {
      title: "I bring cross-disciplinary skills",
      description: "I can learn quick and strike from any direction!",
      emoji: "☁️ ➕ 💻 ➡️ 🥷",
    },
    {
      title: "I'm a great teammate",
      description: "I will always get the job done!",
      emoji: "🌻🤝",
    },
  ];

  const openModal = (reason) => {
    setModalContent(reason);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="main-container">
      <h1 className="heading">3 Reasons to Hire Me:</h1>
      <div className="container">
        {reasons.map((reason, index) => (
          <div key={index} className="part" onClick={() => openModal(reason)}>
            <h2>Reason {index + 1}</h2>
          </div>
        ))}
      </div>
      <div
        className={`part4 ${showPart4Text ? "expanded" : ""}`}
        onClick={() => setShowPart4Text(!showPart4Text)}
      >
        {!showPart4Text ? (
          <h2>All I Need:</h2>
        ) : (
          <p className="part4-text">
            For someone to take a chance on my passion and sincerity, and I
            promise in return, a Software Engineer turning vision into
            reality...
          </p>
        )}
      </div>

      {modalContent && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={closeModal}>
              ✖
            </button>

            <div className="modal-content">
              <h3>{modalContent.title}</h3>
              <p className="scroll-indicator">⬇️</p>
              <div className="spacer"></div>
              <p>{modalContent.description}</p>
              <div className="emoji">{modalContent.emoji}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
