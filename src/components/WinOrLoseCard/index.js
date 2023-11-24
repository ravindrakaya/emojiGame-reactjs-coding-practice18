// Write your code here.
import './index.css'

const loseImgUrl = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const winImgUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, score, onClickPlayAgain} = props
  const imgUrl = isWon ? winImgUrl : loseImgUrl
  const gameStatus = isWon ? 'You won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-lose-container">
      <div className="text-container">
        <h1 className="text-heading">{gameStatus}</h1>
        <p className="text-para">{scoreLabel}</p>
        <p className="score-text">{score}/12 </p>
        <button
          type="button"
          className="play-again-button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <img src={imgUrl} alt="win or lose" className="result-img" />
    </div>
  )
}
export default WinOrLoseCard
