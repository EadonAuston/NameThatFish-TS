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
    const makeGuess = (guess: string) => {
      if (guess === nextFishToName.name) {
        this.setState({ correctCount: correctCount + 1 });
      } else {
        this.setState({ incorrectCount: incorrectCount + 1 });
      }
    };

    return (
      <>
        {fishIndex !== 4 ? (
          <>
            <ClassScoreBoard
              incorrectCount={incorrectCount}
              correctCount={correctCount}
              fishIndex={fishIndex}
            />
            <ClassGameBoard makeGuess={makeGuess} />
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
