import "./Dashboard1.css"
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard1() {
    const navigate = useNavigate()
    const { id } = useParams();
    console.log('id: ', id)
    const [userDescription, setUserDescription] = useState({ title: "", description: ""});
    // const [userEmail, setUserEmail] = useState();
    useEffect(() => {

        axios.get(`http://localhost:3001/blogs/${id}`)
            .then(response => {
                setUserDescription(response.data
                //     {
                //     title: response.data.title,
                //     description: response.data.description,
                //     // likes:response.data.likes,
                //     // unlikes:response.data.unlikes
                // }
            )
            })
            .catch(error => console.error("Error fetching blog:", error));

    }, [id]);
    const userEmail = localStorage.getItem('userEmail')
    function handleSave() {

        console.log(userDescription);
        axios.post(`http://localhost:3001/blogs`, {
            ...userDescription,
            CreatedBy: userEmail,
            CreatedAt: new Date().toLocaleString()
        })
            .then(() => {
                navigate("/dashboard2");
            })
            .catch(error => console.error("Error creating blog:", error));
    }


    function handleTitle(event) {
        let user = { ...userDescription };
        user["title"] = event.target.value
        setUserDescription(user)
    }

    function handleDescription(event) {
        let user = { ...userDescription };
        user["description"] = event.target.value
        setUserDescription(user)
    }
    const handleBlogs = () => {
        navigate('/')
    }
    function handleCancel() {
        navigate("/dashboard2");
    }
    function handleUpdatedBlog(id) {

        if (id) {
            axios.put(`http://localhost:3001/blogs/${id}`, userDescription)
                .then((response) => {
                    navigate("/dashboard2")
                })
        }
        else {
            // axios.post(`http://localhost:3001/blogs`, userDescription)
            //     .then(() => navigate("/dashboard2"))
            //    .catch(error => console.error("Error creating blog:", error));
            handleSave();
        }

    };
    return (
        <div className="wholeBodySection">

            <div className="headerSection">
                <div onClick={handleBlogs} className="blogsTitle">Blogs</div>
                <div className="headerRightSection">
                    <div className="headerRightSectionTitle">{localStorage.getItem('userName')}</div>
                    <button className="headerRightSectionTitle" onClick={() => {
                        localStorage.removeItem('userName');
                        navigate("/login");
                    }}><i class="fa fa-sign-out" aria-hidden="true"></i>Logout</button>
                </div>
            </div>



            <div className="secondSection">
                <div className="secondInnerPortion">
                    <div><input type="text" placeholder="Title" className="inputTitle" value={userDescription.title} onChange={handleTitle} /></div>
                    <hr />
                    <div><textarea placeholder="Description" className="textArea" value={userDescription.description} onChange={handleDescription}></textarea></div>
                    <div className="buttonSection">
                        <button onClick={handleCancel} className="buttonStyle">Cancel</button>
                        <button onClick={() => handleUpdatedBlog(id)} className="buttonStyle">Save</button>
                    </div>
                </div>
            </div>




        </div>
    )
}


export default Dashboard1;
