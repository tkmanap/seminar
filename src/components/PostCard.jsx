import {useNavigate, useParams} from "react-router";
import useFetch from "../hooks/useFetch.jsx";
import {useState} from "react";
import EditSeminar from "./EditSeminar.jsx";

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


    const [isModalOpen, setIsModalOpen] = useState(false);  // State to control modal visibility

    const handleEditClick = () => {
        setIsModalOpen(true);  // Open the modal
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Close the modal
    };

    return (
        <div>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {seminar && (
                <div>
                    <h2>{seminar.title}</h2>
                    <div>{seminar.description}</div>
                    <p>{seminar.time}</p>
                    <p>{seminar.date}</p>
                    <img src={seminar.photo} alt="seminar photo"/>
                    <button onClick={handleEditClick}>Edit</button>
                    <button onClick={handleDeleteClick}>Delete</button>

                    {isModalOpen && (
                        <EditSeminar
                            seminar={seminar}
                            onClose={handleCloseModal}
                            seminarId={id}
                        />
                    )

                    }
                </div>
            )}
        </div>
    );
}

export default PostCard;