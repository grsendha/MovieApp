import React from "react";

const Progress = () => {
  return (
    <div className="consensus tight">
      <div className="outer_ring">
        <div
          className="user_score_chart 6305deb6dcb6a30080060fdd"
          data-percent="79"
          data-track-color="#204529"
          data-bar-color="#21d07a"
        >
          <div className="percent">
            <span className="icon icon-r79"></span>
          </div>
          <canvas
            height="68"
            width="68"
            style={{ height: "34px", width: "34px" }}
          ></canvas>
        </div>
      </div>
    </div>
  );
};

export default Progress;
