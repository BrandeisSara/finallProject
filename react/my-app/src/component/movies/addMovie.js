import { useNavigate, Outlet, Link } from 'react-router-dom'
import { useState } from "react"
import axios from "axios"
function LoginComp() {
    const [movie, setMovie] = useState({ "name": "", "Genres": [], "imggeurl": "", "Permired": "" })

    const navigate = useNavigate();
    const save = async () => {
        let resp = await axios.post(`http://localhost:8000/api/auth/`, movie)
        setMovie(resp.data)
        console.log(movie)
        alert("successfull!!😊")
    }
    

    return <div style={{ "border": "3px solid pink" }}>
        name:<input type="text" onChange={e => setMovie({ ...movie, "name": e.target.value })} /><br />
        Genres:<input type="text" onChange={e => setMovie({ ...movie, "Genres": e.target.value })} /><br />
        imgge url:<input type="text" onChange={e => setMovie({ ...movie, "imggeUrl": e.target.value })} /><br />
        Permired:<input type="text" onChange={e => setMovie({ ...movie, "Permired": e.target.value })} /><br />
        <input type="button" value="ADD" onClick={save} />
        <input type="button" value="cencel" onClick={() => navigate("/home/movies")} />
    </div>
}
export default LoginComp