import useFetch from "../hooks/useFetch.jsx";
import PostList from "../components/PostList.jsx";

const Home = () => {
    const {data: seminars, isPending, error} = useFetch('http://localhost:3000/seminars')

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {seminars && <PostList seminars={seminars}/>}
        </div>
    )
};

export default Home;