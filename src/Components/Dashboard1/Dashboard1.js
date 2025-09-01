import "./Dashboard1.css"
import { useNavigate } from "react-router-dom";
function Dashboard1(){
const navigate = useNavigate()
const handleBlogs = () => {
        navigate('/')
    }
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
                    <div><input type="text" placeholder="Title" className="inputTitle"/></div>
                    <hr />
                    <div><textarea placeholder="Description" className="textArea"></textarea></div>
                        <div className="buttonSection">
                            <button className="buttonStyle">Cancel</button>
                            <button className="buttonStyle">Save</button>
                        </div>
                </div>
            </div>




        </div>
    )
}


export default Dashboard1;
