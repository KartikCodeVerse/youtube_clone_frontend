import React from "react";
import ShowVideo from "../ShowVideo/ShowVideo.jsx";

import { useSelector } from "react-redux";

const ShowVideoList = ({ id }) => {
  const vids = useSelector((state) => state.videoReducer).data;

  return (
    <div className="video_list">
      {vids
        ?.filter((q) => q._id === id)
        .map((vi, i) => {
          return (
            <div key={i} className="video_box">
              <ShowVideo vid={vi} />
            </div>
          );
        })}
    </div>
  );
};

export default ShowVideoList;
