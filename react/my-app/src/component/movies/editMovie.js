import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import { useNavigate} from 'react-router-dom'
function EditComp(props) {
    
    const [movie, setMovie] = useState({})
    const navigate = useNavigate();
    
    useEffect(() => {
        const getMovies = async () => {
            setMovie(JSON.parse(sessionStorage.getItem('name')))
        }
        getMovies()
    }, [])
    const edit = async () => {
        let id = movie._id
        let movie1=movie
        let status = await axios.put(`http://localhost:8000/api/movies/${id}/`,movie1)
        console.log(status)
        alert("successfull!!😊" + status)
    }
    return <div>
        <div style={{ "border": "3px solid black", "width": "300px" }}>
            <h4>Edit Movie:</h4>
            name:<input type="text" onChange={e => setMovie({ ...movie, "name": e.target.value })} value={movie.name} /><br /> 
            Genres:<input type="text" onChange={e => setMovie({ ...movie, "genres": e.target.value })} value={movie.genres} /><br />
            imgge url:<input type="text" onChange={e => setMovie({ ...movie, "imgUrl": e.target.value })} value={movie.imgUrl} /><br />
            Permired:<input type="text" onChange={e => setMovie({ ...movie, "yearPremiered": e.target.value })} value={movie.yearPremiered} /><br />
            <input type="button" value="update" onClick={edit}/>
            <input type="button" value="cencel" onClick={(e) => navigate("/home/movies/allMoviesComp")} /> 
            
        </div>
    </div>
}
export default EditComp
