import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate=useNavigate()
  let okk=()=>{
    alert("go to contact page!")
      // pass path here
    navigate('/contact')
  }
  

  return (
    <>
      <h1>This is Home page</h1>
      <button onClick={okk}>go to contact page</button>
    </>
  )
}

export default Home
