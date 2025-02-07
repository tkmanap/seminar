import {Link} from "react-router";

const PostList = ({seminars}) => {
    return (
        <>
            {seminars.map((s) => (
                <div key={s.id}>
                    <Link to={`/seminars/${s.id}`}>
                        <h2>{s.title}</h2>
                        <h3>{s.time}</h3>
                    </Link>
                </div>
            ))}
        </>
    );
};

export default PostList;