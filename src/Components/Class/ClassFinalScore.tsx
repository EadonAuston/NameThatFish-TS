import { Component } from "react";

type FinalScoreProps = {
  incorrectCount: number;
  correctCount: number;
};

export class ClassFinalScore extends Component<FinalScoreProps> {
  render() {
    const { incorrectCount, correctCount } = this.props;
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{correctCount}</p>
          <hr />
          <p>{incorrectCount + correctCount}</p>
        </div>
      </div>
    );
  }
}
