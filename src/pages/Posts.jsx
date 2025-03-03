import { useState, useEffect } from "react";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    const fetchPosts = () => {
        fetch("http://localhost:3000/posts/api")
            .then((res) => res.json())
            .then(data => setPosts(data))
    }

    useEffect(fetchPosts, []);

    return (
        <div className="container">
            <h1 className="mb-4">Lista dei post</h1>
            <div className="row row-cols-3">
                {
                    posts.map(p => {
                        return (
                            <div key={p.id} className="card col" >
                                <div className="card-body">
                                    <h5 className="card-title">{p.title}</h5>
                                    <p className="card-text">{p.content}</p>
                                    <a href="#" className="btn btn-primary align-self-end">Apri Post</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}