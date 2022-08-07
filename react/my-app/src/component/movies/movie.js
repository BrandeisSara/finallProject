
import axios from "axios"
import { useDispatch } from "react-redux"
import { useNavigate, useLocation, Outlet } from 'react-router-dom'
import { useState } from "react"
import MovieWatchedComb from './movieWatched'
function MoviesComp(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const location = useLocation()
  const [genres, setGenres] = useState([props.movie.genres])
  const [flag, setFlag] = useState(true)
  const { oneMovie } = location.state ? location.state : ""
  let movie = {}
  if (oneMovie) {
    movie = {... oneMovie }
  }
  else {
    movie = {...props.movie }
  }
  const edit = async () => {
    sessionStorage.setItem('name',JSON.stringify(props.movie) )
    navigate(-1)
    dispatch({ type: "edit", payload: flag })
  }
  const delite = async () => {
    let name = props.movie._id
    let status = await axios.delete(`http://localhost:8000/api/movies/${name}`)
    console.log(status)
    alert("successfull!!😊" + status)
  }


  return <div>
    <div style={{ "border": "3px solid black", "width": "300px" }}>
      <Outlet/>
      {movie.name} , {movie.yearPremiered}<br />
      {genres[0]}{genres[1]}{genres[2]}
      <img src={movie.imgUrl} style={{ "width": "100px", "height": "100px" }}></img>
      <input type="button" value="delite" onClick={delite} />
      <input type="button" value="edit" onClick={edit} name={movie.name} />
      {
        <MovieWatchedComb watched={props.movie._id} />
      }
    </div>
  </div>
}
export default MoviesComp
