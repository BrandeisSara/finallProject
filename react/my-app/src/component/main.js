import Home from "./home"
import Login from './login'
import Movies from './movies/movies'
import AallMoviesComp from './movies/allMovies'
import Add from './movies/addMovie'
import EditComp from "./movies/editMovie"
import Movie from './movies/movie'
import { Route, Routes } from 'react-router-dom'
import Subs from "./subs/subs"
import AllSubsComp from "./subs/allSubsComp"
import AddSubComp from "./subs/addSub"
import AddMovieComp from './subs/addMovie'
import SubWatchedComb from "./subs/subWatched"
function MainComp() {

    return <div style={{ "border": "3px solid red" }}>
        <h1>Movies- Subscriptions Web Site</h1>

        <Routes>
            <Route path="/home" element={<Home />} >
                <Route path="movies" element={<Movies />} >
                    <Route path="movie/:name" element={<Movie />} > </Route>
                    <Route path="allMoviesComp" element={<AallMoviesComp />} > </Route>
                    <Route path="EditComp" element={<EditComp />} ></Route>
                    <Route path="add" element={<Add />} ></Route>
                    <Route path="movie/:obj" element={<Movie />} ></Route>
                </Route>
                <Route path="subs" element={<Subs />} >
                    <Route path="allSubsComp" element={<AllSubsComp />} >
                        <Route path="addMovie/:id" element={<AddMovieComp />} ></Route>
                        {/* <Route path="SubWatchedComb" element={<SubWatchedComb />} >
                            <Route path="addMovie" element={<AddMovieComp />} ></Route>
                        </Route> */}
                    </Route>
                    <Route path="AddSubComp" element={<AddSubComp />} ></Route>
                </Route>
            </Route>
            <Route path="/" element={<Login />} ></Route>
            {/* <Route path="EditComp" element={<Home />} ></Route> */}
        </Routes>
    </div>
}
export default MainComp