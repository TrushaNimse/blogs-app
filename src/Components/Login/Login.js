import { useNavigate } from "react-router-dom";
import "./Login.css"
import { useState } from "react";
import axios from "axios";

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
        function handleLoginData() {
            console.log(userData)
            // navigate("/dashboard2")
        
        axios
            .get("http://localhost:3001/user")
                .then((response) => {
                    const users = response.data;
                    users.map((singleUser) => {
                        console.log('userData:', userData);
                        // console.log('singleUser.email_id===userData.email:', singleUser.email_id === userData.email);
                        // console.log('singleUser.password===userData.password:', singleUser.password === userData.password);
                        if (singleUser.email_id===userData.email&&singleUser.password===userData.password){
                            alert("Login Succesfull");
                            navigate("/dashboard2")
                        }
                        else{
                            alert("Invalid email or password");
                        }
                });


                })
            
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
                    <input type="text" placeholder="test@gmail.com" className="inputBox" name="" value={userData.email} onChange={handleEmail} />
                    <div className="label">Password</div>
                    <input type="password" placeholder="Test@123" className="inputBox" value={userData.pass} onChange={handlePass} />
                    <div><button onClick={handleLoginData} className="loginButton">Login</button></div>
                </div>
            </div>
        </div>


    )
}
export default Login;