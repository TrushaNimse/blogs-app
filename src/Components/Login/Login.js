import { useNavigate } from "react-router-dom";
import "./Login.css"

function Login() {

    const navigate = useNavigate()
    const handleLogin = () => {
        navigate("/login")
    }
    const handleRegister = () => {
        navigate("/register")
    }
    const handleBlogs = () => {
        navigate('/')
    }
    const handleHello = () => {
        navigate("/dashboard2")
    }
    return (
        <div className="mainSection">
            <div className="headerSection">
                <div onClick={handleBlogs} className="blogsHeading">Blogs</div>
                <div className="headerRightSection">
                    <button onClick={handleLogin} className="loginRegister">Login</button>
                    <button  onClick={handleRegister} className="loginRegister">Register</button>
                </div>
            </div>

            <div className="outerInnerSection" >
                <div className="mainInnerSection">
                    <div className="blogsTitle1">Blogs</div>
                    <div className="blogsInfo">Publish your passions,your way..</div>
                    <hr />
                    <div className="loginText">Login</div>
                    <div className="label">Emal id</div>
                    <input type="text" placeholder="test@gmail.com" className="inputBox" />
                    <div className="label">Password</div>
                    <input type="password" placeholder="Test@123" className="inputBox" />
                    <div><button onClick={handleHello} className="loginButton">Login</button></div>
                </div>
            </div>
        </div>


    )
}
export default Login;