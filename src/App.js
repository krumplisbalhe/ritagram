import React, { useEffect, useState } from 'react'
import Header from './components/header/header.js'
import Profile from './components/profile/profile.js'
import PostsSection from './components/postsSection/postsSection.js'
import './App.css'
import avatar from './Rita.PNG'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("")
      .then(response => response.json())
			.then(data => setPosts(data.documents))
  }, [])

  const totalNumberOfPosts = posts.length

  const name = "szivecske"
  const bio = "Mi történik velem, amikor épp nem 👩🏽‍💻."

  return (
    <div className="app">
      <Header />
      <Profile totalNumberOfPosts={totalNumberOfPosts} name={name} bio={bio} avatar={avatar} />
      <PostsSection posts={posts} name={name} avatar={avatar} />
    </div>
  )
}

export default App
