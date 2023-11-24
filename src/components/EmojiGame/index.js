import './index.css'
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    isGameInProgress: true,
    topScore: 0,
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isWon = clickedEmojisList.length === emojisList.length
    return (
      <div className="win-lose-bg-container">
        <WinOrLoseCard
          isWon={isWon}
          score={clickedEmojisList.length}
          onClickPlayAgain={this.restGame}
        />
      </div>
    )
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore
    if (currentScore > newTopScore) {
      newTopScore = currentScore
    }
    this.setState({
      topScore: newTopScore,
      isGameInProgress: false,
    })
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isEmojiClicked = clickedEmojisList.includes(id)
    const clickedEmojiLength = clickedEmojisList.length
    if (isEmojiClicked) {
      this.finishGameAndSetTopScore(clickedEmojiLength)
    } else {
      if (clickedEmojiLength === emojisList - 1) {
        this.finishGameAndSetTopScore(clickedEmojiLength)
      }

      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
        topScore: clickedEmojisList.length + 1,
      }))
    }
  }

  restGame = () => {
    this.setState({
      clickedEmojisList: [],
      isGameInProgress: true,
    })
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()
    // console.log(emojisList)
    return (
      <ul className="emoji-list-container">
        {shuffledEmojisList.map(eachItem => (
          <EmojiCard
            key={eachItem.id}
            emojiDetails={eachItem}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {topScore, clickedEmojisList, isGameInProgress} = this.state
    return (
      <div className="app-container">
        <NavBar score={clickedEmojisList.length} topScore={topScore} />
        <div className="emoji-game-container">
          <div className="emoji-container">
            {isGameInProgress ? this.renderEmojiList() : this.renderScoreCard()}
          </div>
        </div>
      </div>
    )
  }
}
export default EmojiGame
