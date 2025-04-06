import React, { useEffect } from "react";
import "./Musics.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllSongs } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";

const Musics = () => {
  const { songs, loading, error } = useSelector((state) => state.songs);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  useEffect(() => {
    getAllSongs(dispatch);
  }, []);
  console.log("loading ", error);

  return (
    <div className="musics-container">
      <h2 className="music-container-title">Musics</h2>
      <div className="songs-container">
        {loading && !songs ? (
          <p>Loading...</p>
        ) : songs ? (
          songs?.musics?.map((song, index) => {
            return (
              <div
                className="song"
                key={song.id}
                id={song.id}
                onClick={() => navigate(`player/${song.id}`)}

              >
                <h3>{song.name.replace(".webm", "")}</h3>
                <div className="audio">
                  <img src={song.img[index]} alt="logo" className="songImage" />
                </div>
              </div>
            );
          })
        ) : (
          <p>No Songs Found</p>
        )}
      </div>
    </div>
  );
};

export default Musics;
