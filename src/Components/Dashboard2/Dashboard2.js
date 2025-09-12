// import { useState } from "react";
import "./Dashboard2.css"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function Dashboard2() {
    // // const blogInfo = [{
    // //     title: "Hello World",
    // //     CreatedBy: "trushanimse07@gmail.com",
    // //     CreatedAt: "26 May,2025",
    // //     Content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus Page Maker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remainin essentially unchanged. It was popularised in the 1960s w ith the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    // // },
    // // {
    // //     title: "Hello World",
    // //     CreatedBy: "trushanimse07@gmail.com",
    // //     CreatedAt: "26 May,2025",
    // //     Content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus Page Maker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remainin essentially unchanged. It was popularised in the 1960s w ith the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    // // }
    // ]
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate()
    // const [user, setUser] = useState()

    // const storedUser = localStorage.getItem('userName');

    function handleData() {
        axios.get("http://localhost:3001/blogs")
            .then((response) => {
                setBlogs(response.data.blogs || response.data);
            })
            .catch((error) => {
                console.error("Error:", error);
            })
    }
    useEffect(() => {
        handleData()
    }, []);

    useEffect(() => {
        axios.get("http://localhost:3001/blogs")
            .then((response) => {
                setBlogs(response.data);
            })
            .catch((error) => {
                console.error("Error fetching blogs:", error);
            });
    }, []);

    const handlePost = () => {
        navigate("/dashboard1")
    }
    const handleBlogs = () => {
        navigate('/')
    }
    // const handleEdit = (id) => {
    //     navigate(`/dashboard1/${id}`);
    // };
    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/blogs/${id}`)
            .then(() => {

                const updatedBlogs = blogs.filter(blog => blog.id !== id);
                setBlogs(updatedBlogs);

            })
            .catch((error) => {
                console.error("Error deleting blog:", error);
            });
    };
    const handleLikes = (id, likes) => {
        axios.patch(`http://localhost:3001/blogs/${id}`, { likes: likes + 1 })
            .then(() => {
                handleData()
            })
            .catch(error => {
                console.error("Error:", error);
            })
    }
    const handleDislikes = (id, dislikes) => {
        axios.patch(`http://localhost:3001/blogs/${id}`, { dislikes: dislikes + 1 })
            .then(() => {
                handleData()
            })
            .catch(error => {
                console.error("Error:", error);
            })
    }
    return (
        <div className="wholeBodySection1">

            <div className="headerSection">
                <div onClick={handleBlogs} className="blogsTitle">Blogs</div>
                <div className="headerRightSection">
                    <div className="headerRightSectionTitle">{localStorage.getItem('userName')}</div>
                    <div>
                        {/* <div><i class="fa fa-sign-out" aria-hidden="true"></i></div> */}
                        <button className="headerRightSectionTitle" onClick={() => {
                            localStorage.removeItem('userName');
                            navigate("/login");
                        }}><i class="fa fa-sign-out" aria-hidden="true"></i>Logout</button>
                    </div>
                </div>
            </div>



            <div className="secondInnerSection">
                <div className="secondInnerHeadSection">
                    <div>
                        <div className="blogsHeadTag1">Blogs</div>
                        <div className="blogsTag">Publish your passions,your way...</div>
                    </div>
                    <div>
                        {/* <div><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></div> */}
                        <button onClick={handlePost} className="createButton"><i class="fa fa-plus-circle" aria-hidden="true"></i> create new post</button>
                    </div>
                </div>
                <hr />
                {blogs.map((blog) => (
                    <div className="innerTextBox" key={blog.id}>
                        <div className="blogTitle">{blog.title}</div>
                        <div className="personalInfoSection">
                            <div className="CreationText"><strong>Created By  </strong></div>
                            <div className="info">{blog.CreatedBy}</div>
                        </div>
                        <div className="personalInfoSection">
                            <div className="CreationText"><strong>Created At </strong></div>
                            <div className="info">{blog.CreatedAt}</div>
                        </div>

                        <hr />
                        <div className="mainInfoText">
                            <div >{blog.description}</div>
                        </div>
                        <div className="buttonClass">
                            <div>
                                <button className="likeButton" onClick={() => handleLikes(blog.id, blog.likes)}><i class="fa fa-thumbs-o-up" aria-hidden="true">{blog.likes || 0}</i></button>
                                <button className="unlikeButton" onClick={() => handleDislikes(blog.id, blog.dislikes)}><i class="fa fa-thumbs-o-down" aria-hidden="true">{blog.dislikes || 0}</i></button>
                            </div>
                            <div>
                                <button onClick={() => navigate(`/dashboard1/${blog.id}`)} className="editButton"><i class="fa fa-pencil" aria-hidden="true"></i> Edit</button>
                                <button onClick={() => handleDelete(blog.id)} className="deleteButton"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</button>
                            </div>
                        </div>
                    </div>
                ))}




            </div>
        </div>
    )
}
export default Dashboard2;