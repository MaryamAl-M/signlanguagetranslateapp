
import ProfileHistoryItem from "./ProfileHistoryItem"

import ProfiletranslationHistoryItem from "./ProfileTranslationHistoryItem"


const ProfileHistory = ({translations}) => {

    const translationList = translations.map(

        (translation, index) => <ProfileHistoryItem key={index + '-' + translationId} translation={translation}/>)
    return(
        <section>
            <h4>Your translations history</h4>
            <ul>
                {translationList}

    (translation, index) => <ProfiletranslationHistoryItem key={translation} translation={translation}/>)
    return (
        <section>
            <h4>Your translation History</h4>
            <ul>
            {translationList}

            </ul>
        </section>
    )
}



export default ProfileHistory