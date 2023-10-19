import React from 'react'

export default function Footer() {
  let style={
    position:"fixed",
    bottom:"0px",
    padding:"3px",
    width:"100%",
    textAlign:"center",
    backgroundColor:"rgb(40, 145, 243)"
  }
  return (
    <footer>
      <p style={style}>Made By Anshul Jain</p>
    </footer>
  )
}
