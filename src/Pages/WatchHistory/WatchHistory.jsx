import React from "react";
import "./WatchHistory.css";
import LeftSideBar from "../../Components/SideBar/LeftSideBar.jsx";
import WHL from "../../Components/WHL/WHL.jsx";
import { useSelector } from "react-redux";
const WatchHistory = () => {
  const history = useSelector((state) => state.HistoryReducer);

  return (
    <div className="history_page">
      <LeftSideBar />
      <WHL videoList={history} page={"History"} />;
    </div>
  );
};

export default WatchHistory;
