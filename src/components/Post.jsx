import { useState } from "react";
import useFetch from "../hooks/useFetch";

function Post({ postID }) {
    const [post, error, loading] = useFetch(
        `https://jsonplaceholder.typicode.com/posts/${postID}`
    );

    return (
        <div>
            {!error ? (
                <div className="box">
                    {loading ? (
                        <p className="subtitle">Cargando...</p>
                    ) : (
                        <div>
                            <p className="subtitle">
                                <strong>{post.title} </strong>
                                <small>ID:({postID}) </small>
                                <small>UserID:({post.userID})</small>
                            </p>
                            <p>{post.body}</p>
                        </div>
                    )}
                </div>
            ) : null}
        </div>
    );
}

export default Post;
