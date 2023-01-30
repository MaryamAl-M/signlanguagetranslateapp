import React, { useContext, useState } from "react";
import { SignImage } from "../../Utils/SignImage";
import { Context } from "../../context/userProvider";
import imagesData from "../../Utils/ImagesData";
import { useEffect } from "react";
import "./translate.css";
import InputContainer from "../../Utils/input-container/InputContainer";
import Card from "../../Utils/card/Card";
import { BiCloudLightRain } from "react-icons/bi";
const Translate = () => {
  const { user, setUser } = useContext(Context);
  const [searchInput, setSearchInput] = useState("");
  const [filterData, setFilterData] = useState([]);
  const copiedArr = [];

  useEffect(() => {
    const user = localStorage.getItem("user");
    const parseUser = JSON.parse(user);
    if (parseUser) {
      setUser(parseUser);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const submitValue = () => {
    if (checkValidity(searchInput)) {
      searchInput
        .toLowerCase()
        .split("")
        .forEach((input) => {
          imagesData.forEach((item) => {
            if (input === item.key) {
              copiedArr.push(item);
            }
          });
        });
      setUser({ ...user, translations: [...user.translations, searchInput] });
      setFilterData([...copiedArr]);
      setSearchInput("");
    }
  };

  const checkValidity = (words) => {
    // hello one two
    // array words
    // check length
    const wordsLength = words.split(" ")
    if (wordsLength.length > 40) {
      alert("You can not translate more than 40 words")
      return false
    } else if (containOnlyWhiteSpace(searchInput)) {
      alert("Can not translate empty word")
      return false
    }
    else if (containNumber(words)) {
      alert("Your word can not contain number")
      return false
    } else if (containSpecialCharacters(words)) {
      alert("Your word can not contain special character")
      return false
    }
    return true
  }

  const containNumber = (string) => {
    return /[0-9]/.test(string);
  }

  const containSpecialCharacters = (string) => {
    return /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(string)
  }

  const containOnlyWhiteSpace = (string) => {
    return !string.replace(/\s/g, '').length
  }

  return (
    <>
      <div className="upper-body">
        <InputContainer
          handleClick={submitValue}
          style={{ width: "50%", margin: "auto", padding: "5px" }}
        >
          <input
            type="text"
            placeholder="Search here"
            onChange={handleChange}
            value={searchInput}
          />
        </InputContainer>
      </div>
      {filterData.length > 0 && (
        <Card style={{ width: "60%", height: "auto" }}>
          {filterData.map((data, index) => {
            return <SignImage key={index} src={data.src} />;
          })}
        </Card>
      )}
    </>
  );
};
export default Translate;
