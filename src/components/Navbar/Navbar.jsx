import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"

//export default function Navbar(){
  //  return <nav className="nav">
    //    <a href="/" className="site-title" >Lost in Translation</a>
      
    //</nav>
//}
const Navbar =  () => {

    const { user } = useUser()


    return (
        <nav>
            <ul>
                <li>Translations</li>
            </ul>
            { user !== null &&
              <ul>
                <li>
                    <NavLink to="/translate">Translations</NavLink>
                </li>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                
            </ul>   
            }
           


        </nav>
    )
}
export default Navbar