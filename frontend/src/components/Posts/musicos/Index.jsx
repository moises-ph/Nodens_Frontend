import React from 'react'
import style from './posts.module.css'
import Nav from './Nav/PostsNav'
import Feed from './feed/Feed'

function Index() {
  return (
    <>
        <Nav/>
        <Feed/>
    </>
  )
}

export default Index