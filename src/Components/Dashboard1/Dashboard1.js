import "./Dashboard1.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Dashboard1(){
const navigate = useNavigate()
const handleBlogs = () => {
        navigate('/')
    }
    const[userDescription, setUserDescription] = useState({ title: "",description: ""})
    function handleTitle(event){
        let user={...userDescription};
        user["title"]=event.target.value
        setUserDescription(user)
    }
     function handleDescription(event){
        let user={...userDescription};
        user["description"]=event.target.value
        setUserDescription(user)
    }
      function handleDescriptionData() {
        console.log(userDescription)}
    return (
        <div className="wholeBodySection">

            <div className="headerSection">
                <div  onClick={handleBlogs} className="blogsTitle">Blogs</div>
                <div className="headerRightSection">
                    <div className="headerRightSectionTitle">Trusha Nimse</div>
                    <button className="headerRightSectionTitle"><i class="fa fa-sign-out" aria-hidden="true"></i>Logout</button>
                </div>
            </div>



            <div className="secondSection">
                <div className="secondInnerPortion">
                    <div><input type="text" placeholder="Title" className="inputTitle" value={userDescription.title} onChange={handleTitle}/></div>
                    <hr />
                    <div><textarea placeholder="Description" className="textArea" value={userDescription.description} onChange={handleDescription}></textarea></div>
                        <div className="buttonSection">
                            <button className="buttonStyle">Cancel</button>
                            <button onClick={handleDescriptionData} className="buttonStyle">Save</button>
                        </div>
                </div>
            </div>




        </div>
    )
}


export default Dashboard1;
