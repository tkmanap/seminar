import {useState, useEffect} from "react";
import './Modal.css'

const EditSeminarModal = ({seminar, onClose, seminarId}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [photo, setPhoto] = useState('');

    useEffect(() => {
        if (seminar) {
            setTitle(seminar.title || '');
            setDescription(seminar.description || '');
            setDate(seminar.date || '');
            setTime(seminar.time || '');
            setPhoto(seminar.photo || '');
        }
    }, [seminar]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedSeminar = {
            title,
            description,
            date,
            time,
            photo
        };

        try {
            const response = await fetch(`http://localhost:3000/seminars/${seminarId}`, {
                method: 'PUT', // Or 'PATCH'
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedSeminar)
            });

            if (!response.ok) {
                throw new Error('Could not update seminar');
            }

            onClose();
            refreshData();
        } catch (error) {
            console.error("Error updating seminar:", error);
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Edit Seminar</h2>
                <span className="close" onClick={onClose}>×</span>
                <form onSubmit={handleSubmit}>

                    <label>Title:</label>
                    <input type="text" value={title}
                           onChange={(e) => setTitle(e.target.value)} required/>

                    <label>Description:</label>
                    <textarea value={description}
                              onChange={(e) => setDescription(e.target.value)} required/>

                    <label>Date:</label>
                    <input type="text" value={date} onChange={(e) => setDate(e.target.value)}
                           required/>

                    <label>Time:</label>
                    <input type="text" value={time} onChange={(e) => setTime(e.target.value)}
                           required/>

                    <label>Photo URL:</label>
                    <input type="text" value={photo}
                           onChange={(e) => setPhoto(e.target.value)}/>

                    {photo && (
                        <img
                            src={photo}
                            alt="Seminar Photo Preview"
                            style={{maxWidth: '200px', marginTop: '10px'}}
                        />
                    )}
                    <button type="submit">Update Seminar</button>
                </form>
            </div>
        </div>
    );
};

export default EditSeminarModal;