import React from 'react'
import './postText.css'

const PostText = ({
	currentPostText
}) => {
	function clearUpText() {
		return {__html: currentPostText};
	}

  return (
		<div className="postText">
			<div className="textContainer" dangerouslySetInnerHTML={clearUpText()}>
			</div>
		</div>
  )
}

export default PostText
