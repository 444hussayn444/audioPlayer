import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FaStepForward } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaStepBackward } from "react-icons/fa";
import { IoCaretForwardOutline } from "react-icons/io5";

const Player = () => {
  const { songs } = useSelector((state) => state.songs);
  const audioRef = useRef(null);
  const { id } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  console.log(id);
  const [currentTime, setCurrentTime] = useState();
  const [duration, setDuration] = useState();

  const findSong = songs?.musics?.find((s) => s.id === id);
  console.log(findSong);

  useEffect(() => {
    let audio = new Audio();
    if (findSong) {
      audio.src = findSong.url;
      audioRef.current = audio;
    }
    audio.ontimeupdate = (e) =>{
       let currentT = e.target.currentTime
       let durationTime = e.target.duration
       console.log(currentT)
    }
  }, [findSong]);

  function play() {
    audioRef.current.play();
    setIsPlaying(true);
  }
  function pause() {
    audioRef.current.pause();
    setIsPlaying(false);
  }

  return (
    <div className="player-container">
      {findSong ? (
        <>
          <h3 className="player-title-container">Audio Player</h3>
          <div className="player">
            <div className="pic">
              <img className="songImg" src={findSong?.img[0]} alt="" />
            </div>
            <div className="timeline">
              <div className="line"></div>
              <div className="time">
                <div className="currentTime">00:00</div>
                <div className="duration">00:00</div>
              </div>
            </div>
            <div className="options">
              <div className="back">
                <FaStepBackward className="backIcon options-icons" />
              </div>
              <div className="pause">
                {isPlaying ? (
                  <FaPause
                    className="pauseIcon options-icons"
                    onClick={pause}
                  />
                ) : (
                  <IoCaretForwardOutline
                    className="startIcon options-icons"
                    onClick={play}
                  />
                )}
              </div>
              <div className="forward">
                <FaStepForward className="forwardIcon options-icons" />
              </div>
            </div>
          </div>
        </>
      ) : (
        <p style={{ color: "whitesmoke", fontSize: "30px" }}>
          Please Select Song
        </p>
      )}
    </div>
  );
};

export default Player;
