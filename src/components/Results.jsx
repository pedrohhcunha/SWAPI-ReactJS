import { solution, fibonacci, getWinner } from '../utils/questions';

import '../assets/css/results.css'

export function Results() {
  return (
    <main id="container">
      <div className="question-result">
        <b>Resultado da Questão 1:</b> {solution([-1, -6, -3, 4, -8, 1, 8, 9, 12, 4, 90, 1290, 2, 5])}
      </div>

      <div className="question-result">
        <b>Resultado da Questão 2:</b> {fibonacci()}
      </div>

      <div className="question-result">
        <b>Resultado da Questão 3:</b>{" "}
        {getWinner([4, 5, "A", 6, 2], [3, 8, 7, "Q", 4])}
      </div>
    </main>
  )
}