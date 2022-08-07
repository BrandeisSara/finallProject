import { useNavigate, Outlet, Link } from 'react-router-dom'
import { useState } from "react"
import axios from "axios"
function AddMovieComp(props) {
    const [movie, setMovie] = useState({ member_id: props.id})
    const Subscribe = async () => {
        let resp = await axios.post(`http://localhost:8000/api/subs`, movie)
         setMovie(resp.data)
        console.log(movie)
        alert("successfull!!😊")
        props.callback(movie)
    }

    return <div style={{ "border": "3px solid pink" }}>
        <Outlet/>
        <h3>Add a new Movie</h3>
        date:<input type="date" onChange={e => setMovie({ ...movie, "date": e.target.value })} /><br />
        <input type="text" onChange={e => setMovie({ ...movie, "movie_id": e.target.value })} /><br />
        <input type="button" value="Subscribe" onClick={Subscribe} />
    </div>
}
export default AddMovieComp