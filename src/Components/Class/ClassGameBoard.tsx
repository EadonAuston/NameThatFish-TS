import { Component } from "react";
import "./styles/game-board.css";
import { initialFishes } from "./InitialFishes";

type ClassGameBoardProps = {
  makeGuess: (guess: string) => void;
};

export class ClassGameBoard extends Component<ClassGameBoardProps> {
  state = {
    guess: "",
    fishIndex: 0,
  };

  render() {
    const { makeGuess } = this.props;
    const { guess, fishIndex } = this.state;
    const nextFishToName = initialFishes[fishIndex];

    const submitButton = (
      e: React.MouseEvent<HTMLInputElement, MouseEvent>
    ) => {
      e.preventDefault();
      makeGuess(guess);
      this.setState({ fishIndex: fishIndex + 1 });
      this.setState({ guess: "" });
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
            onChange={(e) => this.setState({ guess: e.target.value })}
            value={guess}
          />
          <input type="submit" onClick={(e) => submitButton(e)} />
        </form>
      </div>
    );
  }
}
