import { useNavigate, Outlet, Link } from 'react-router-dom'

function HomeComp() {
    const login = async () => {

        <h1>hii</h1>
    }
    
    const navigate = useNavigate();
   
    return <div style={{ "border": "3px solid pink" }}>
        <input type="button" value="Movies" onClick={(e)=>{ navigate("movies")}} />
        <input type="button" value="Subscription" onClick={(e)=>{ navigate("subs")}} />
        <input type="button" value="Users Mangement" onClick={login} />
        <input type="button" value="Log out" onClick={login} />

        < Outlet />
    </div>
}
export default HomeComp