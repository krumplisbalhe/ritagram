import React from 'react'
import Post from '../post/post'
import './postsSection.css'
import Modal from '../modal/modal'
import useModal from '../modal/modal.hooks'

const PostsSection = ({
	posts,
	name,
	avatar
}) => {
	const {activeId, toggle} = useModal();
  return (
		<div className="postsSection">
			{posts.map(item=>(
				<Post
					title={item.name}
					key={item.name}
					customClickEvent={() => toggle(item.name)}
					imageUrl={item.fields.images.arrayValue.values[0].stringValue}
					allImages={item.fields.images.arrayValue.values}
				/>
			))}
			{activeId && (
			<Modal customHandler={() => toggle(null)} activeId={activeId} posts={posts} name={name} avatar={avatar} />
			)
			}
		</div>
  )
}

export default PostsSection
