import React from "react";
import "./LikedVideo.css";
import LeftSideBar from "../../Components/SideBar/LeftSideBar.jsx";
import WHL from "../../Components/WHL/WHL.jsx";

import { useSelector } from "react-redux";
const LikedVideo = () => {
  const likedVideoList = useSelector((state) => state.likedVideoReducer);

  return (
    <div className="linkedvideo_page">
      <LeftSideBar />
      <WHL videoList={likedVideoList} page={"LikedVideo"} />;
    </div>
  );
};

export default LikedVideo;
