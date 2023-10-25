import "./Navbar.css";
export default function Navbar(props) {
    const handleLogout = () => {
        localStorage.removeItem("attendenceData");
        window.location.reload();
    };

    return (
        <div className="navbar">
            <a href="/">
                <h3>Attendence Manager</h3>
            </a>
            <div className="options">
                <button onClick={() => props.setnav("/")}>Home</button>
                {props.data ? (
                    <button onClick={() => props.setnav("add")}>
                        Add Subject
                    </button>
                ) : (
                    ""
                )}
                <button onClick={() => props.setnav("about")}>About</button>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
}
