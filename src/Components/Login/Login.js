import { useNavigate } from "react-router-dom";
import "./Login.css"
import { useState } from "react";

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
    // const handleHello = () => {
    //     navigate("/dashboard2")
    // }
    const [userData, setUserData] = useState({ email: "", password: "" })
    function handleLoginData() {
        console.log(userData)
        navigate("/dashboard2")
    }
    function handleEmail(event){
        let user={...userData};
        user["email"]=event.target.value
        setUserData(user)
    }
     function handlePass(event){
        let user={...userData};
        user["password"]=event.target.value
        setUserData(user)
    }
    return (
        <div className="mainSection">
            <div className="headerSection">
                <div onClick={handleBlogs} className="blogsHeading">Blogs</div>
                <div className="headerRightSection">
                    <button onClick={handleLogin} className="loginRegister">Login</button>
                    <button onClick={handleRegister} className="loginRegister">Register</button>
                </div>
            </div>

            <div className="outerInnerSection" >
                <div className="mainInnerSection">
                    <div className="blogsTitle1">Blogs</div>
                    <div className="blogsInfo">Publish your passions,your way..</div>
                    <hr />
                    <div className="loginText">Login</div>
                    <div className="label">Emal id</div>
                    <input type="text" placeholder="test@gmail.com" className="inputBox" name="" value={userData.email} onChange={handleEmail}/>
                    <div className="label">Password</div>
                    <input type="password" placeholder="Test@123" className="inputBox" value={userData.pass} onChange={handlePass}/>
                    <div><button onClick={handleLoginData} className="loginButton">Login</button></div>
                </div>
            </div>
        </div>


    )
}
export default Login;