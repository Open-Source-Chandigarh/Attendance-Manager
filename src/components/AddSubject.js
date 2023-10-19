import React, { useState } from 'react'

export default function AddSubject(props) {
  const [subj, setsubj] = useState("")
  const [atten, setatten] = useState()
  const [absnt, setabsnt] = useState()
  const manageData = async (e) => {
    e.preventDefault()
    if(atten>absnt){
      alert("Attended classes couldnt be grater than total number of classes")
    }
    else{
      let data = localStorage.getItem("attendenceData")
      data = await JSON.parse(data)
      let a = {}
      a[subj] = [atten, absnt]
      data.subject.push(a)
      props.changeData(data)
      data = JSON.stringify(data)
      localStorage.setItem("attendenceData", data)
      props.setnav("/")
    }
  }
  return (
    <div className='adduser'>
      <form onSubmit={manageData} action='/'>
        <h3>Add A New Subject</h3>
        <input type="text" value={subj} onChange={e => { setsubj(e.target.value) }} placeholder='Name Of Subject' />
        <input type="number" value={atten} onChange={e => { setatten(parseInt(e.target.value)) }} placeholder='Attended Classes' />
        <input type="number" value={absnt} onChange={e => { setabsnt(parseInt(e.target.value)) }} placeholder='Number Of Total Classes' />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
