import ProfileActions from "../components/Profile/ProfileActions"
import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileHistory from "../components/Profile/ProfileHistory"
import withAuth from "../hoc/withAuth"
import { useUser } from "../context/UserContext";

const Profile = () => {

    const { user } = useUser()

    return (
        <>
         <h1>Profile</h1>

         <ProfileHeader username={user.username}/>
         <ProfileActions/>
         <ProfileHistory translations={user.translations}/>
        </>
       
    )
}
export default withAuth(Profile)