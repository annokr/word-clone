import React from "react";

function GuessInput({ handleSubmitGuess }) {
  
  const [tentativeGuess, setTentativeGuess] = React.useState("");
  
  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  }
    return (
      <form className="guess-input-wrapper"
        onSubmit={handleSubmit}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input 
          id="guess-input" 
          type="text"
          value={tentativeGuess}
          required
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          onChange={event => {setTentativeGuess(event.target.value.toUpperCase())}}
        />
      </form>
    )
}

export default GuessInput;
