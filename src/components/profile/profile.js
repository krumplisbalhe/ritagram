import React from 'react'
import './profile.css'

function Profile({
	totalNumberOfPosts,
	name,
	bio,
	avatar
}) {
  return (
		<div className="profile">
			<div
				className="avatar"
				style={{backgroundImage: `url(${avatar})`}}
			/>
			<div className="info">
				<div className="name">{name}</div>
				<div className="numbers">
					<span>{totalNumberOfPosts}</span> bejegyzés
				</div>
				<div className="bio">{bio}</div>
			</div>
		</div>
  )
}

export default Profile
