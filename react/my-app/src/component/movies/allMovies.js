import { useState } from "react"
import axios from "axios"
import Movie from './movie'
import { useEffect } from "react"
import { useSelector } from "react-redux/es/hooks/useSelector"
function AllMoviesComp() {
    const [name, setName] = useState("")
    const [movie, setMovie] = useState("")
    const storeDate = useSelector(state => state)
    const find = async () => {
        let { data } = await axios.get(`http://localhost:8000/api/movies/${name}`)
        setMovies(data)
    }
    const [movies, setMovies] = useState([{}])
    useEffect(() => {
        const getAllMovies = async () => {
            let { data } = await axios.get(`http://localhost:8000/api/movies`)
            setMovies(data)
            console.log(movies)
        }
        getAllMovies()
    }, [])
    return <div>
        find:<input type="text" onChange={e => setName(e.target.value)} />
        <input type="button" value="find" onClick={find} />
        {
            movies.map((mov, index) => {
                return <Movie movie={mov} key={index} />

            })
        }
    </div>
}
export default AllMoviesComp
