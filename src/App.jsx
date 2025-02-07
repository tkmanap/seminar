import {Route, Routes} from "react-router";
import NavBar from "./components/NavBar.jsx";
import NotFound from "./pages/NotFound.jsx";
import Home from "./pages/Home.jsx";
import CreatePost from "./components/CreatePost.jsx";
import PostCard from "./components/PostCard.jsx";


function App() {
    return (
        <>
            <div>
                <NavBar />
                <div>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/create' element={<CreatePost />} />
                        <Route path='/seminars/:id' element={<PostCard />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default App
