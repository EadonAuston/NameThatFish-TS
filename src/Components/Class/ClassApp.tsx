import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { initialFishes } from "./InitialFishes";

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
  };

  render() {
    const { incorrectCount, correctCount } = this.state;
    const fishIndex = incorrectCount + correctCount;
    const nextFishToName = initialFishes[fishIndex];
    const answersLeft = initialFishes.map((fish) => fish.name).slice(fishIndex);
    const makeGuess = (guess: string) => {
      if (guess === nextFishToName.name) {
        this.setState({ correctCount: correctCount + 1 });
      } else {
        this.setState({ incorrectCount: incorrectCount + 1 });
      }
    };

    return (
      <>
        {fishIndex !== initialFishes.length ? (
          <>
            <ClassScoreBoard
              incorrectCount={incorrectCount}
              correctCount={correctCount}
              answersLeft={answersLeft}
            />
            <ClassGameBoard makeGuess={makeGuess} nextFishToName={nextFishToName}/>
          </>
        ) : (
          <ClassFinalScore
            incorrectCount={incorrectCount}
            correctCount={correctCount}
          />
        )}
      </>
    );
  }
}
