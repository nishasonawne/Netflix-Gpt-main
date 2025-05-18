import React, { useCallback, useContext, useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../utils/UserContext";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/Constant";
import {toggleGpt} from "../reduxStore/GptSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../utils/TypeScrptProps";
import { setLanguage } from "../reduxStore/LanguageSlice";
const Header = () => {
  const navigation = useNavigate();
  const context = useContext(UserContext);
  const dispatch= useDispatch();
  if (!context) {
    throw new Error("Login must be used within a UserProvider");
  }
  const { user, logoutUser, loginUser } = context;
    const gptToggel = useSelector(
      (store: RootState) => store?.gpt?.isGptEnabled
    );
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        logoutUser();
        navigation("/");
      })
      .catch((error) => {});
  };
  useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("onAuthStateChanged called");
        loginUser(user);
         navigation("/browse");
      } else {
         navigation("/");
      }
    });
    return ()=> unsubscribe();
  }, []);
const handleClick = useCallback(() => {
  dispatch(toggleGpt());
}, []);
const handleLanguage=(e:any)=>{
  dispatch(setLanguage(e.target.value));
}
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-20" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
          {gptToggel &&
          <select
            className="p-2 m-2 bg-gray-900 text-white"
            onChange={handleLanguage}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select> 
         }
          <button
            className="mx-4 my-2 px-4 py-2 bg-purple-800 text-white rounded-lg"
            onClick={handleClick}
          >
          { gptToggel ? "HomePage":"Gpt Search"}
          </button>
          <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />
          <button onClick={handleLogout} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
