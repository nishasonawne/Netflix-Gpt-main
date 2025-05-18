import React, { useContext, useEffect } from "react";
import { UserContext } from "../utils/UserContext";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopular from "../hooks/usePopular";
import MainContainer from "./maincontainer/MainContainer";
import SecondaryContainer from "./maincontainer/SecondaryContainer";
import GptSearch from "./gpt/GptSearch";
import { useSelector } from "react-redux";
import { RootState } from "../utils/TypeScrptProps";
const Browse = () => {
  const context = useContext(UserContext);
  const gptToggel = useSelector((store: RootState) => store?.gpt?.isGptEnabled);
  if (!context) {
    throw new Error("Login must be used within a UserProvider");
  }
  useNowPlayingMovies();
  usePopular();
  const { loginUser, user } = context;
  return (
    <>
      <Header />
      {
      gptToggel ? 
        <GptSearch />
       : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
};

export default Browse;
