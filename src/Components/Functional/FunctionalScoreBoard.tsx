import "./styles/score-board.css";
//  Where the score is presented
type ScoreBoardProps = {
  incorrectCount: number;
  correctCount: number;
  fishIndex: number;
};

export function FunctionalScoreBoard({
  incorrectCount,
  correctCount,
  fishIndex,
}: ScoreBoardProps) {
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
