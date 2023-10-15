import "./styles/final-score.css";

type FinalScoreProps = {
  incorrectCount: number;
  correctCount: number;
};

export const FunctionalFinalScore = ({
  incorrectCount,
  correctCount,
}: FinalScoreProps) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{correctCount}</p>
      <hr />
      <p>{correctCount + incorrectCount}</p>
    </div>
  </div>
);
