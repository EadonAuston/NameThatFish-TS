import "./styles/game-board.css";
import { initialFishes } from "./InitialFishes";
import { useState } from "react";

type FunctionalGameBoardProps = {
  makeGuess: (guess: string) => void;
};

export function FunctionalGameBoard({ makeGuess }: FunctionalGameBoardProps) {
  const [guess, setGuess] = useState<string>("");
  const [fishIndex, setFishIndex] = useState(0);
  const nextFishToName = initialFishes[fishIndex];

  const submitButton = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    makeGuess(guess);
    setFishIndex(fishIndex + 1);
    setGuess("");
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form">
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          onChange={(e) => setGuess(e.target.value)}
          value={guess}
        />
        <input type="submit" onClick={(e) => submitButton(e)} />
      </form>
    </div>
  );
}
