import React, {useState} from 'react'
import './postGallery.css'
import LeftArrow from '../icons/leftArrow'
import RightArrow from '../icons/rightArrow'

const PostGallery = ({
	currentPostPictures
}) => {
	const numberOfPictures = currentPostPictures.length
	const isMultiplePictures = numberOfPictures > 1
	const [currentlyShownPicture, setPicture] = useState(currentPostPictures[0].stringValue)
	const findCurrentPicIndex = currentPostPictures.map(function(e) { return e.stringValue }).indexOf(currentlyShownPicture)

	const toRight = (index) => {
		const nextPicture = currentPostPictures[(index+1)].stringValue
		setPicture(nextPicture)
	}

	const toLeft = (index) => {
		const previousPicture = currentPostPictures[(index-1)].stringValue
		setPicture(previousPicture)
	}

	return (
		<div className="postGallery">
			<div className="buttonSpace">
				{isMultiplePictures && (findCurrentPicIndex - 1 >= 0) &&
					<button
						className="toLeft"
						onClick={() => toLeft(findCurrentPicIndex)}
					>
							<LeftArrow />
					</button>
				}
			</div>
			<img
				className="gallery"
				alt="postImage"
				src={currentlyShownPicture}
			/>
			<div className="buttonSpace">
				{isMultiplePictures && (findCurrentPicIndex+1 < numberOfPictures) &&
					<button
						className="toRight"
						onClick={() => toRight(findCurrentPicIndex)}
					>
						<RightArrow />
					</button>
				}
			</div>
		</div>
	)
}

export default PostGallery
