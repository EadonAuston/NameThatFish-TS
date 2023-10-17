import { Component } from "react";
import "./styles/game-board.css";
import { FishObject } from "./InitialFishes";

type ClassGameBoardProps = {
  makeGuess: (guess: string) => void;
  nextFishToName: FishObject;
};

export class ClassGameBoard extends Component<ClassGameBoardProps> {
  state = {
    guess: "",
  };

  render() {
    const { makeGuess, nextFishToName } = this.props;
    const { guess } = this.state;

    const submitButton = (
      e: React.MouseEvent<HTMLInputElement, MouseEvent>
    ) => {
      e.preventDefault();
      makeGuess(guess);
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
