import "./Navbar.css"
export default function Navbar(props) {
  return (
    <div className='navbar'>
      <div>
        <h3>Attendence Manager</h3>
      </div>
      <div className='options'>
        <button onClick={()=>props.setnav("/")}>Home</button>
        {props.data?<button onClick={()=>props.setnav("add")}>Add Subject</button>:""}
        <button onClick={()=>props.setnav("about")}>About</button>
      </div>
    </div>
  )
}
