import React from "react";

function GuessInput() {
  const [word, setWord] = React.useState("");

    return (
      <form className="guess-input-wrapper"
        onSubmit={event => {
        event.preventDefault();
        console.log({word});
        setWord("")
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input 
          id="guess-input" 
          type="text"
          value={word}
          required
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          onChange={event => {setWord(event.target.value.toUpperCase())}}
        />
      </form>
    )
}

export default GuessInput;
