import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Post() {
    const {id} = useParams()
    const [post, setPost] = useState({});
    const [posts, setPosts] = useState([]);

    const fetchPost = () => {
        fetch(`http://localhost:3000/posts/api/${id}`)
            .then((res) => res.json())
            .then(data => setPost(data))
    };

    const navigate = useNavigate();

    useEffect(fetchPost, [id]);

    return (
        <div className="container">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <div className="d-flex gap-2 justify-content-center">
                <button className={`btn btn-primary ${(id == 1) ? "disabled" : "d-block"}`} onClick={() => navigate(`/posts/${parseInt(id) - 1}`)}>Vai al post precedente</button>
                <button className={`btn btn-primary ${(id == 5) ? "disabled" : "d-block"}`} onClick={() => navigate(`/posts/${parseInt(id) + 1}`)}>Vai al post successivo</button>
            </div>
        </div>
    )
}