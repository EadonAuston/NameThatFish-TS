import "./styles/game-board.css"
import { useState } from "react";
import { FishObject } from "./InitialFishes";

type FunctionalGameBoardProps = {
  makeGuess: (guess: string) => void;
  nextFishToName: FishObject;
};

export function FunctionalGameBoard({ makeGuess, nextFishToName }: FunctionalGameBoardProps) {
  const [guess, setGuess] = useState<string>("");
  const submitButton = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    makeGuess(guess);
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
