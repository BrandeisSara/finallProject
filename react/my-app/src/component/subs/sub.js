import { useEffect } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from "react"
import SubWatchedComb from "./subWatched"
function MoviesComp(props) {
    console.log(props.member._id)
    const [flag, setFlag] = useState(false)
    const [subs, setSubs] = useState([])
    const location = useLocation()
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { oneMovie } = location.state ? location.state : ""
    let member = {}
    if (oneMovie) {
        member = { ...oneMovie }
    }
    else {
        member = { ...props.member}
    }
    const edit = async (e) => {
        console.log(props.member)
        sessionStorage.setItem('member',JSON.stringify(props.member) )
        navigate(-1)
        dispatch({ type: "edit", payload: flag })
    }
    const delite = async () => {
        let id = props.member._id
        let status = await axios.delete(`http://localhost:8000/api/member/${id}` )
        console.log(status)
        alert("successfull!!😊" + status)
    }
    useEffect(() => {
        const getAllMembers = async () => {
            
            let id = props.member._id
            let { data } = await axios.get(`http://localhost:8000/api/member/${id}`)
            setSubs(data)
            console.log(subs)
        }
        getAllMembers()
    }, [])

    function addmovie() {
        setSubs([...subs])
    }

    return <div>
        <div style={{ "border": "3px solid black", "width": "300px" }}>
            email: {member.email}<br />
            city:{member.city}<br />

            <input type="button" value="delite" onClick={delite} />
            <input type="button" value="edit" onClick={edit} name={member.email} />
            {
                subs && <SubWatchedComb watched={subs} id={member._id} callback={(data) => addmovie(data)} />
            }
        </div>
    </div>
}
export default MoviesComp