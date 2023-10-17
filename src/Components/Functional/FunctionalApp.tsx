import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { initialFishes } from "./InitialFishes";

export function FunctionalApp() {
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const fishIndex = incorrectCount + correctCount;
  const nextFishToName = initialFishes[fishIndex];
  const answersLeft = initialFishes.map((fish) => fish.name).slice(fishIndex);
  const makeGuess = (guess: string) => {
    if (guess === nextFishToName.name) {
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }
  };

  return (
    <>
      {fishIndex !== initialFishes.length ? (
        <>
          <FunctionalScoreBoard
            incorrectCount={incorrectCount}
            correctCount={correctCount}
            answersLeft={answersLeft}
          />
          <FunctionalGameBoard makeGuess={makeGuess} nextFishToName={nextFishToName}/>
        </>
      ) : (
        <FunctionalFinalScore
          incorrectCount={incorrectCount}
          correctCount={correctCount}
        />
      )}
    </>
  );
}
