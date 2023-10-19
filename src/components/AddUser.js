import React, { useState } from 'react'
import "./AddUser.css"
export default function AddUser(props) {
  const [name, setname] = useState("")
  const [roll, setroll] = useState("")
  const adduser = async (e) => {
    e.preventDefault()
    let studentData = { "name": name, "roll": roll, "subject": [] }
    props.changeData(studentData)
    studentData = JSON.stringify(studentData)
    localStorage.setItem("attendenceData", studentData)
  }
  return (
    <div className='adduser'>
      <h1>Looks Like You Are A New User ☺️</h1>
      <h4>Fill The Form To Start Your New Journey</h4>
      <form onSubmit={adduser}>
        <input type="text" value={name} onChange={e => { setname(e.target.value) }} placeholder='Enter You Name' />
        <input type="text" value={roll} onChange={e => { setroll(e.target.value) }} placeholder='Enter your Roll Number' />
        <button type="submit">Start Journey</button>
      </form>
    </div>
  )
}
