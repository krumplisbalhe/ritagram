import React from 'react'
import './postText.css'

const PostText = ({
	currentPostText,
	name,
	avatar,
	currentPostDate
}) => {
	function clearUpText() {
		return {__html: currentPostText};
	}
	const formattedDate = new Intl.DateTimeFormat('hu', {year: 'numeric', month: 'long', day: 'numeric'} ).format(new Date(currentPostDate))

  return (
		<div className="postText">
			<div className="postTextHeader">
				<img alt="textAvatar" className="textAvatar" src={avatar} />
				<div className="textName">{name}</div>
				<div className="date">{formattedDate}</div>
			</div>
			<div className="textContainer" dangerouslySetInnerHTML={clearUpText()}>
			</div>
		</div>
  )
}

export default PostText
