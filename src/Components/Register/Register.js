import { useNavigate } from "react-router-dom"
import "./Register.css"
import { useState } from "react";
import axios from "axios";

function Register() {
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
    const[userRegistration, setUserRegistration] = useState({ email: "", password: "",name:"" })
    // function handleRegistrationData() {
    //     console.log(userRegistration)
    //     navigate("/login")
    // }
    function handleEmail(event) {
        let user = { ...userRegistration};
        user["email"] = event.target.value
        setUserRegistration(user)
    }
    function handlePass(event) {
        let user = { ...userRegistration };
        user["password"] = event.target.value
       setUserRegistration(user)
    }
    function handleName(event) {
        let user = { ...userRegistration };
        user["name"] = event.target.value
        setUserRegistration(user)
    }
   const handleRegistrationData = () => {
    axios.post("http://localhost:3001/user", userRegistration)
        .then((response) => {
            console.log(userRegistration);
            
            console.log("User saved:", response.data);
            navigate("/dashboard2");
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};
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
                    <div className="blogsTitle">Blogs</div>
                    <div className="blogsInfo">Publish your passions,your way..</div>
                    <hr />
                    <div className="loginText">Register</div>
                    <div className="label">Name</div>
                    <input type="text" placeholder="Firstname Lastname" className="inputBox" value={userRegistration.name} onChange={handleName} />
                 <div className="label">Email id</div>
                    <input type="text" placeholder="test@gmail.com" className="inputBox" value={userRegistration.email} onChange={handleEmail} />
                    <div className="label">Password</div>
                    <input type="password" placeholder="Test@123" className="inputBox" value={userRegistration.password} onChange={handlePass}/>
                    <div><button onClick={handleRegistrationData} className="loginButton">Register</button></div>
                </div>
            </div>
        </div>


    )
}
export default Register;