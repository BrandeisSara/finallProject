import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
function EditSubComp() {

    const [sub, setSub] = useState({})
    const navigate = useNavigate();
    const edit = async () => {
        let id = sub._id
        let movie = sub
        let status = await axios.put(`http://localhost:8000/api/member/${id}`+ movie)
        console.log(status)
        alert("successfull!!😊" + status)
    }
   
    useEffect(() => {
        const getMovies = async () => {
            setSub(JSON.parse(sessionStorage.getItem('member')))
        }
        getMovies()
    }, [])
    return <div>
        <div style={{ "border": "3px solid black", "width": "300px" }}>
            <h4>Edit Sub:</h4>
            {/* name:<input type="text" onChange={e => setSub({ ...sub, "name": e.target.value })} /><br /> */}
          
            email:<input type="text" onChange={e => setSub({ ...sub, "email": e.target.value })} value={sub && sub.email} /><br />
            city:<input type="text" onChange={e => setSub({ ...sub, "city": e.target.value })} value={sub &&sub.city} /><br />
          
            <input type="button" value="edit" onClick={edit} />
            <input type="button" value="cencel" onClick={() => navigate("/home/subs")} />
        </div>
    </div>
}
export default EditSubComp
