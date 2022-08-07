import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, Route, Routes } from 'react-router-dom'

function LoginComp() {
    const [user, setUser] = useState({ "userName": "", "password": "" })
    const login = async () => {
        let resp = await axios.post(`http://localhost:8000/api/auth/`, user)
        if (resp.data === "no such a user") {
            alert("thar are no same user😊")

        }
        else {
            setUser(resp.data)
            alert("successfull!!😊")
            NavigateStart()
        }
    }
    const navigate = useNavigate();
    const NavigateStart = () => {
        navigate("/Home")
    }
    return <div >
        
       
        <div style={{ "border": "3px solid blue" }}>
            
            <h4>Login in Page</h4>
            password:<input type="text" onChange={e => setUser({ ...user, "password": e.target.value })} /><br />
            user name:<input type="text" onChange={e => setUser({ ...user, "userName": e.target.value })} /><br />
            <input type="button" value="login" onClick={login} />
        </div>

    </div>
}
export default LoginComp