import "./styles/score-board.css";
//  Where the score is presented
type ScoreBoardProps = {
  incorrectCount: number;
  correctCount: number;
  answersLeft: string[];
};

export function FunctionalScoreBoard({
  incorrectCount,
  correctCount,
  answersLeft,
}: ScoreBoardProps) {
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
