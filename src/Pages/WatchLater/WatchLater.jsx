import React from "react";
import "./WatchLater.css";
import LeftSideBar from "../../Components/SideBar/LeftSideBar.jsx";
import WHL from "../../Components/WHL/WHL.jsx";
import { useSelector } from "react-redux";
const WatchLater = () => {
  const watchLater = useSelector((state) => state?.watchLaterReducer);

  return (
    <div className="watchlater_page">
      <LeftSideBar />
      <WHL videoList={watchLater} page={"Watch Later"} />;
    </div>
  );
};

export default WatchLater;
