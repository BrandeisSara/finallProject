import { useState } from 'react';
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useNavigate, Outlet } from 'react-router-dom'
import EditSubComp from "./editSub";
import axios from 'axios';
import { useDispatch } from "react-redux"
function SubsComp() {
    
    const [flag, setFlag] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const storeDate = useSelector(state => state)
    return <div style={{ "border": "3px solid red" }}>
        <h1>Subs</h1>
        <input type="button" value="All Subs" onClick={() => navigate("allSubsComp")} />

        <input type="button" value="Add Subs" onClick={() => navigate("AddSubComp")} />
        {
        true && <EditSubComp onClick={()=>dispatch({ type: "edit" ,payload:flag})}/>
        }
        < Outlet />
    </div>
}
export default SubsComp