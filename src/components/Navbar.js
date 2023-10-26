import "./Navbar.css"
export default function Navbar(props) {


  const handleLogout = ()=>{

    localStorage.removeItem('attendenceData')
    window.location.reload()


  }

  return (
    <div className='navbar'>
      <div>
        <h3>Attendance Manager</h3>
      </div>
      <div className='options'>
        <button onClick={()=>props.setnav("/")}>Home</button>
        {props.data?<button onClick={()=>props.setnav("add")}>Add Subject</button>:""}
        <button onClick={()=>props.setnav("about")}>About</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}
