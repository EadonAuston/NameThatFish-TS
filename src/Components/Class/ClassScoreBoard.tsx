import { Component } from "react";
import "./styles/score-board.css";

type ScoreBoardProps = {
  incorrectCount: number;
  correctCount: number;
  fishIndex: number;
};

export class ClassScoreBoard extends Component<ScoreBoardProps> {
  render() {
    const { incorrectCount, correctCount, fishIndex } = this.props;
    const answersLeft = ["trout", "salmon", "tuna", "shark"];

    for (let i = 0; i < fishIndex; i++) {
      answersLeft.shift();
    }

    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrectCount}</div>
        <div id="choices-left">
          {answersLeft.map((answer) => (
            <div key={answer} className="choice">
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correctCount}</div>
      </div>
    );
  }
}
