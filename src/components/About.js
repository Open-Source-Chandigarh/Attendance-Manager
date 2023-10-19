import React from 'react'
import "./About.css"
export default function About() {
  return (
    <div className='about'>
      <p>This is a attendence management webapp which is made by Anshul Jain. The app uses react to provide seamless,loadingless experience to the user and makes your attendence management easy</p>
      <p className="note">Note: Currently this app uses local storage to store the user data which could leads to data lost during device reset or brower cache clear or reset soon the app will be connected to backend for more reliability and scalability</p>
    </div>
  )
}
