import React from "react";
import LeftSideBar from "../../Components/SideBar/LeftSideBar";
import { FaHistory } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import "./Library.css";

import WHLVideoList from "../../Components/WHL/WHLVideoList.jsx";
import { useSelector } from "react-redux";
const Library = () => {
  const CurrentUser = useSelector((state) => state.currentUserReducer);
  const history = useSelector((state) => state.HistoryReducer);
  const watchLater = useSelector((state) => state?.watchLaterReducer);
  const likedVideoList = useSelector((state) => state.likedVideoReducer);

  return (
    <div className="library_page">
      <LeftSideBar />
      <div className="library_cont1">
        <div className="library_cont2">
          <div className="library_cont3">
            <h1 className="library_title">
              <b>
                <FaHistory />
              </b>
              <b>History</b>
            </h1>
            <div className="videolist_library">
              <WHLVideoList
                CurrentUser={CurrentUser?.result._id}
                page={"History"}
                videoList={history}
              />
            </div>
          </div>
          <div className="library_cont3">
            <h1 className="library_title">
              <b>
                <MdOutlineWatchLater />
              </b>
              <b>Watch Later</b>
            </h1>
            <div className="videolist_library">
              <WHLVideoList
                CurrentUser={CurrentUser?.result._id}
                page={"Watch Later"}
                videoList={watchLater}
              />
            </div>
          </div>
          <div className="library_cont3">
            <h1 className="library_title">
              <b>
                <BiSolidLike />
              </b>
              <b>Liked Videos</b>
            </h1>
            <div className="videolist_library">
              <WHLVideoList
                CurrentUser={CurrentUser?.result._id}
                page={"Liked Videos"}
                videoList={likedVideoList}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
