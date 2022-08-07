import { useState } from 'react';
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useNavigate, Outlet } from 'react-router-dom'
import Movie from './movie'
import axios from 'axios';
import EditComp from './editMovie';
import { useDispatch } from "react-redux"
function MoviesComp() {
  
    const [movie, setMovie] = useState("")
    const [flag, setFlag] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const storeDate = useSelector(state => state)
   
    const f = async () => {
        navigate("add")
        dispatch({ type: "edit" ,payload:flag})
    }
    const f2 = async () => {
        navigate("allMoviesComp")
        dispatch({ type: "edit" ,payload:flag})
    }
    return <div style={{ "border": "3px solid red" }}>
        <h1>Movies</h1>
        <input type="button" value="All Movies" onClick={f2} />

        <input type="button" value="Add Movie" onClick={f}/>

       
        
        {
            movie  &&  <Movie movie={movie} onClick={()=>dispatch({ type: "edit" ,payload:flag})}/>
        }
        {
            storeDate && <EditComp  />
        }
       
        < Outlet />
    </div>
}
export default MoviesComp