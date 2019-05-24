import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to="/test">test</Link>
      <br />
      <span>登录</span>
      <br />
      <span>注册</span>
    </div>
  )
}

export default Home
