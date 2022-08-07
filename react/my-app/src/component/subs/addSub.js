import { useNavigate, Outlet, Link } from 'react-router-dom'
import { useState } from "react"
import axios from "axios"
function AddComp() {
    const [sub, setSub] = useState({ "name": "", "email": "", "city": "" })

    const navigate = useNavigate();
    const save = async () => {
        let resp = await axios.post(`http://localhost:8000/api/member/`, sub)
        setSub(resp.data)
        console.log(sub)
        alert("successfull!!😊")
    }


    return <div style={{ "border": "3px solid pink" }}>
        name:<input type="text" onChange={e => setSub({ ...sub, "name": e.target.value })} /><br />
        email:<input type="text" onChange={e => setSub({ ...sub, "email": e.target.value })} /><br />
        city:<input type="text" onChange={e => setSub({ ...sub, "city": e.target.value })} /><br />
        <input type="button" value="ADD" onClick={save} />
        <input type="button" value="cencel" onClick={() => navigate("/home/subs")} />
    </div>
}
export default AddComp