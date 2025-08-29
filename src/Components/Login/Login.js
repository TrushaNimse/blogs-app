import "./Login.css"

function Login() {



    return (
        <div className="mainSection">
            <div className="headerSection">
                <div className="blogsHeading">Blogs</div>
                <div className="headerRightSection">
                    <div className="loginRegister">Login</div>
                    <div className="loginRegister">Register</div>
                </div>
            </div>

            <div className="outerInnerSection" >
                <div className="mainInnerSection">
                    <div className="blogsTitle">Blogs</div>
                    <div className="blogsInfo">Publish your passions,your way..</div>
                    <hr />
                    <div className="loginText">Login</div>
                    <div className="label">Emal id</div>
                    <input type="text" placeholder="test@gmail.com" className="inputBox"/>
                    <div className="label">Password</div>
                    <input type="password" placeholder="Test@123" className="inputBox"/>
                    <div><button className="loginButton">Login</button></div>
                </div>
            </div>
        </div>


    )
}
export default Login;