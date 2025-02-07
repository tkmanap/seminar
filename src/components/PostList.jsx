import '../App.css'
import {Link} from "react-router";

const PostList = ({seminars}) => {
    return (
        <div className='post'>
            {seminars.map((s) => (
                <div className='card' key={s.id}>
                    <Link to={`/seminars/${s.id}`}>
                        <img className='post__img' src={s.photo} alt="seminar photo"/>
                        <div className="card__body">
                            <h2>{s.title}</h2>
                            <h3>{s.time}</h3>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default PostList;