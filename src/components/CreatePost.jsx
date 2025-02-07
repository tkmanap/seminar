import {useNavigate} from "react-router";
import {useState} from "react";

const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body}

        setIsPending(true)

        fetch('http://localhost:3000/seminars', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added')
            setIsPending(false)
            navigate('/')
        })
    }

    return (
        <div className="create">
            <h2>Add a New seminar</h2>
            <form onSubmit={handleSubmit}>
                <label>Seminar title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Seminar description:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                {!isPending && <button>Add seminar</button>}
                {isPending && <button disabled>Adding seminar...</button>}
                <p>{ title }</p>
            </form>
        </div>
    );
}

export default CreatePost;