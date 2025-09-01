import { useState } from "react";
import "./Dashboard2.css"
import { useNavigate } from "react-router-dom";
function Dashboard2() {
    const blogInfo = [{
        title: "Hello World",
        CreatedBy: "trushanimse07@gmail.com",
        CreatedAt: "26 May,2025",
        Content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus Page Maker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remainin essentially unchanged. It was popularised in the 1960s w ith the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        title: "Hello World",
        CreatedBy: "trushanimse07@gmail.com",
        CreatedAt: "26 May,2025",
        Content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus Page Maker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remainin essentially unchanged. It was popularised in the 1960s w ith the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
    ]
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);

    function handleLike() {
        setLike(like + 1);
    }
    function handleDislike() {
        setDislike(dislike + 1);
    }
    const navigate = useNavigate()
    const handlePost = () => {
        navigate("/dashboard1")
    }
     const handleBlogs = () => {
        navigate('/')
    }

    return (
        <div className="wholeBodySection1">

            <div className="headerSection">
                <div onClick={handleBlogs}  className="blogsTitle">Blogs</div>
                <div className="headerRightSection">
                    <div className="headerRightSectionTitle">Trusha Nimse</div>
                    <div>
                        {/* <div><i class="fa fa-sign-out" aria-hidden="true"></i></div> */}
                        <button className="headerRightSectionTitle"><i class="fa fa-sign-out" aria-hidden="true"></i>Logout</button>
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
                        <button onClick={handlePost} className="createButton"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i> create new post</button>
                    </div>
                </div>
                <hr />
                {blogInfo.map((blog) => (
                    <div className="innerTextBox">
                        <strong>{blog.title}</strong>
                        <div className="personalInfoSection">
                            <div className="CreationText"><strong>Created By </strong></div>
                            <div className="info">{blog.CreatedBy}</div>
                        </div>
                        <div className="personalInfoSection">
                            <div className="CreationText"><strong>Created At </strong></div>
                            <div className="info">{blog.CreatedAt}</div>
                        </div>

                        <hr />

                        <div className="mainInfoText">{blog.Content}
                        </div>
                        <div className="buttonClass">
                            <div>
                                <button className="likeButton" onClick={handleLike}><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> {like}</button>
                                <button className="unlikeButton" onClick={handleDislike}><i class="fa fa-thumbs-o-down" aria-hidden="true"> {dislike}</i></button>
                            </div>
                            <div>
                                <button  onClick={handlePost} className="editButton"><i class="fa fa-pencil" aria-hidden="true"></i> Edit</button>
                                <button className="deleteButton"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</button>
                            </div>
                        </div>
                    </div>
                ))}




            </div>
        </div>
    )
}
export default Dashboard2;