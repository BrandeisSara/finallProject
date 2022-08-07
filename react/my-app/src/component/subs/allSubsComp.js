import { useState } from "react"
import axios from "axios"
import Sub from './sub'
import { useEffect } from "react"
import { useSelector } from "react-redux/es/hooks/useSelector"
function AllMembersComp() {
    const storeDate = useSelector(state => state)
    const [members, setMembers] = useState([{}])
    useEffect(() => {
        const getAllMembers= async () => {
            let { data } = await axios.get(`http://localhost:8000/api/member`)
            setMembers(data)
            console.log(members)
        }
        getAllMembers()
    }, [])

    return <div>
        {
            members.map((mem, index) => {
                return <Sub member={mem} key={index} />
            })
        }
    </div>
}
export default AllMembersComp
