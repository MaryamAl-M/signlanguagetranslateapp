import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/userProvider";
import { foundUser, fetchUser, updateTranslations } from "../../API/user";
import { useEffect } from "react";
import "./profile.css";

const Profile = () => {
  const { user, setUser } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    const parseUser = JSON.parse(user);
    if (parseUser) {
      setUser(parseUser);
    }
    
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    updateTranslations(user).then((response) => 
    console.log(response))
  }, [user]);


  const deleteWord = (id) => {
    const removedItem = user.translations.filter((word, index) => index !== id);
    setUser({ ...user, translations: [...removedItem] });
  };

  const clearHistory = () => {
    localStorage.clear();
    setUser({ ...user, translations: [] });
  };

  const logout = () => {
    fetchUser(user.username).then((users) => {
      const found = foundUser(user.username, users);
      if (found) {
        localStorage.clear();
          setUser(null);
          navigate("/");
      }
    });
  };

  return (
    <div className="view-profile-container">
      <div className="profile-inner-container">
        <div className="container">
          <div className="list-header">
            <h3>Last 10 translated word</h3>
          </div>

          <div className="list-container">
            {user &&
              user.translations.slice(0,10).map((word, key) => (
                <div className="list-words" key={key}>
                  <p>{word}</p>
                  <button className="delete-btn" onClick={() => deleteWord(key)}>delete</button>
                </div>
              ))}
          </div>

              </div>
              <br></br><br></br>
              <div className="clearHistory-button">
                <button onClick={clearHistory}>Clear History</button>
              </div>
              <br></br>
              <div className="logout-button">
                <button onClick={logout}>logout</button>
              </div>
              <br></br><br></br>
      </div>
    </div>
  );
};
export default Profile;
