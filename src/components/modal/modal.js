import React from 'react';
import './modal.css'
import PostText from '../postText/postText'
import PostGallery from '../postGallery/postGallery'
import PostTextHeader from '../postTextHeader/postTextHeader'

const Modal = ({
	customHandler,
	activeId,
	posts,
	name,
	avatar
}) => {
	const currentPost = posts.find(p => p.name===activeId)

	const currentPostText = currentPost.fields.content.stringValue
	const currentPostDate = currentPost.fields.date.stringValue
	const currentPostPictures = currentPost.fields.images.arrayValue.values
	return (
		<div className="modal">
			<div className="modalOverlay" onClick={customHandler}></div>
			<div className="modalWrapper">
				<PostGallery currentPostPictures={currentPostPictures} />
				<PostTextHeader avatar={avatar} name={name} currentPostDate={currentPostDate} customHandler={customHandler} />
				<PostText currentPostText={currentPostText} name={name} avatar={avatar} currentPostDate={currentPostDate} customHandler={customHandler} />
			</div>
		</div>
	)
}

export default Modal
