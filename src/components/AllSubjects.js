import React from 'react'
import SingleSubject from './SingleSubject'
import AddSubject from './AddSubject'

export default function AllSubjects(props) {
  let a = props.Data.subject
  return (
    <>
      <h1 className='heading'>Welcome {props.Data.name} <br/> ({props.Data.roll})</h1>
      {a.length===0?<AddSubject changeData={props.changeData} setnav={props.setnav}/>:
      <div className='cards'>
        {a.map((e,i)=>{
          return <SingleSubject key={i} data={e} i={i} changeData={props.changeData}/>
        })}
      </div>}
    </>
  )
}
