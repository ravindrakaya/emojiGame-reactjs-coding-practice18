// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {emojiUrl, emojiName, id} = emojiDetails

  const onEmojiClick = () => {
    clickEmoji(id)
  }

  return (
    <div className="list-item-container">
      <button type="button" className="button" onClick={onEmojiClick}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </div>
  )
}
export default EmojiCard
