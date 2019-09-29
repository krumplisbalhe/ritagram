import React from 'react'
import './postTextHeader.css'
import Close from '../icons/close'

const PostTextHeader = ({
	name,
	avatar,
	currentPostDate,
	customHandler
}) => {
	const formattedDate = new Intl.DateTimeFormat('hu', {year: 'numeric', month: 'long', day: 'numeric'} ).format(new Date(currentPostDate))

  return (
		<div className="postTextHeader">
			<div class="avatarTextWrapper">
				<img alt="textAvatar" className="textAvatar" src={avatar} />
				<div className="textName">{name}</div>
				<Close customHandler={customHandler}/>
			</div>
			<div className="date">{formattedDate}</div>
		</div>
  )
}

export default PostTextHeader
