import "./Dashboard.css"
function Dashboard() {


    return (
        <div className="mainSection">
            <div className="headerSection">
                <div className="blogsHeading">Blogs</div>
                <div className="headerRightSection">
                    <div className="loginRegister">Login</div>
                    <div className="loginRegister">Register</div>
                </div>
            </div>
             <div className="secondOuterSection">
            <div className="secondSection">
                <h2>Blogs!</h2>
                <h6>Publish your passions,your way...</h6>
                <hr />
                <div className="buttonSection">
                   <div><button className="loginButton1">Login</button></div> 
                   <div><button className="registerButton1">Register</button></div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Dashboard;
