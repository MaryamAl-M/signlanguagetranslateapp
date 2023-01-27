import { Link } from "react-router-dom"


const ProfileActions = () => {
    return(
        <ul>
            <li><Link to="/translations">Translations</Link></li>
            <li><button>Clear history</button></li>
            <li><button>Logout</button></li>
        </ul>
    )
}
export default ProfileActions

import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { storageDelete} from "../../utils/storage"
import { useUser } from "../../context/UserContext"

const ProfileActions = ({ logout }) => {

    const { setUser } = useUser()

    const handldeLogoutClick = () => {
        if (window.confirm('Are you sure that you want to logout?')){
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }

    return (
     
        <ul>
            <li><Link to="/translate">Translations</Link></li>
            <li><button>Clear history</button></li>
            <li><button onClick={handldeLogoutClick}>Logout</button></li>
        </ul>
    )
}
export default ProfileActions

