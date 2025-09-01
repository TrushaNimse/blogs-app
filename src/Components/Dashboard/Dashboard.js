import { useNavigate } from "react-router-dom"
import "./Dashboard.css"
function Dashboard() {
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate("/login")
    }
    const handleRegister = () => {
        navigate("/register")
    }


    return (
        <div className="mainSection">
            <div className="headerSection">
                <div className="blogsHeading">Blogs</div>
                <div className="headerRightSection">
                    <button onClick={handleLogin} className="loginRegister">Login</button>
                    <button onClick={handleRegister} className="loginRegister">Register</button>
                </div>
            </div>
            <div className="secondOuterSection">
                <div className="secondSection">
                    <h1>Blogs!</h1>
                    <h6>Publish your passions,your way...</h6>
                    <hr />
                    <div className="buttonSection">
                        <div><button onClick={handleLogin} className="loginButton1">Login</button></div>
                        <div><button onClick={handleRegister} className="registerButton1">Register</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
