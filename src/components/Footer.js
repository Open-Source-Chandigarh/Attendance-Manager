import React from 'react'

export default function Footer() {
  let style={
    position:"fixed",
    bottom:"0px",
    padding:".5em",
    width:"100%",
    textAlign:"center",
    backgroundColor:"#6246ea",
    color:"#fffffe",
    fontWeight:"bold"
  }
  return (
    <footer>
      <p style={style}>Made By Anshul Jain</p>
    </footer>
  )
}
