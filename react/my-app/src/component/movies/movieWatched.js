import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import { useNavigate, Outlet, Link } from 'react-router-dom'
function MovieWatchedComb(props) {
    
    const [subs, setSubs] = useState()
    useEffect(() => {

        getAllMembers()
      }, [])
      const getAllMembers = async () => {
        let id = props.watched
        let { data } = await axios.get(`http://localhost:8000/api/subs/${id}`)
        setSubs(data)
      }
    return <div style={{ "border": "3px solid green" }}>
        <Outlet/>
        <h4>Movies Watched</h4>
         
        <ul>
        {
            subs&& subs.map((s,index)=>{
               return <li key={index}><Link to="/home/subs/allSubsComp" state={{oneMovie:s}}>{s.city}</Link></li>
            })
        }
         </ul>
    </div>
}
export default MovieWatchedComb