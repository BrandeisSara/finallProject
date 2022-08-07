
import { useState } from "react"
import axios from "axios"
import { useNavigate, Outlet, Link } from 'react-router-dom'
import AddMovieComp from './addMovie'
function SubWatchedComb(props) {
    const navigate = useNavigate();
    const [flag, setFlag] = useState(false)
    const [movies, setMovies] = useState([])
    const getAllMovies = async () => {
        const {data} = await axios.get(`http://localhost:8000/api/movies`)
         props.moviesWatched.forEach(movieWatched => {
            const index=data.findIndex(movie=>movie._id==movieWatched._id)
            data.splice(index,1)
        })
        setMovies([...data])
    }

    useEffect(() => {
        getAllMovies()
    }, [movies])
    return <div style={{ "border": "3px solid green" }}>
        <Outlet />
        <h4>Movies Watched</h4>    
        <input type="button" value="subscribe to new movie" onClick={()=>setFlag(true)} />
        
        {
            flag && <AddMovieComp id={props.id}/>
        }
        <ul>
            {
                props.watched.length>0 &&
                props.watched.map((s, index) => {
                    return <li key={index}><Link to="/home/movies/allMoviesComp" state={{ oneMovie: s }}>{s.name}</Link>{s.yearPremiered}</li>
                })
            }
        </ul>
    </div>
}
export default SubWatchedComb
