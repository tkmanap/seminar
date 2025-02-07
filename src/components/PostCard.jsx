import {useNavigate, useParams} from "react-router";
import useFetch from "../hooks/useFetch.jsx";

const PostCard = () => {
    const {id} = useParams()
    const {data: seminar, isPending, error} = useFetch('http://localhost:3000/seminars/' + id)
    const navigate = useNavigate()

    const handleDeleteClick = () => {
        fetch('http://localhost:3000/seminars/' + id, {
            method: 'DELETE',
        }).then(() => {
            navigate('/')
        });
    }

    return (
        <div>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {seminar && (
                <article>
                    <h2>{seminar.title}</h2>
                    <div>{seminar.description}</div>
                    <p>{seminar.time}</p>
                    <p>{seminar.date}</p>
                    <button onClick={handleDeleteClick}>delete</button>
                </article>
            )}
        </div>
    );
}

export default PostCard;