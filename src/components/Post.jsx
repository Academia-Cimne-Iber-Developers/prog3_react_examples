import { useEffect, useState } from "react";

function Post({ postID }) {
    const [post, setPost] = useState(null);
    //La siguiente asignación de estado inicial también es válida
    //const [post, setPost] = useState({ id: postID, title: null, body: null });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setError(null);
        setLoading(true);

        fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al obtener la respuesta");
                }

                return response.json();
            })
            .then((data) => {
                setPost({
                    title: data.title,
                    body: data.body,
                    userID: data.userId,
                });
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                setError(error);
            });
    }, [postID]);

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
