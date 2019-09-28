import React from 'react'
import './post.css'

function Post({
	title,
	customClickEvent,
	imageUrl
}) {
  return (
		<div className="post" onClick={customClickEvent}>
			<img alt="postImage" className="image" src={`${imageUrl}`} />
			<div className="layer" />
		</div>
  )
}

export default Post
