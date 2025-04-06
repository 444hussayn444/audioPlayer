import React, { useEffect, useState } from "react";
import "./style.css";
const Starting = () => {
  const [loadingCount, setLoadingCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingCount((prev) => (prev !== 100 ? prev + 20 : prev));
    }, 500);
    if (loadingCount === 100) {
      clearInterval(interval);
    }
  }, [loadingCount]);

  return (
    <div
      className="loading-container"
      style={{
        position:"fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        padding: "20px",
        backgroundColor: "rgb(2, 17, 56)",
        flexDirection: "column",
        top: "0",
        zIndex:"1"
      }}
    >
      <div
        className="Title"
        style={{
          position: "relative",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          top: "20%",
        }}
      >
        <h2
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "90px",
          }}
        >
          Start Listening
        </h2>
      </div>
      <div
        className="div"
        style={{
          position: "relative",
          width: "100%",
          border: "2px solid rgba(0, 222, 251, 0.795)",
          margin: "350px 40px",
          padding: "20px",
          borderRadius: "0px 50px 0px 50px",
          display: "flex",
          justifyContent: "left",
          alignItems: "left",
          overflow: "hidden",
          boxShadow: "0px 0px 8px 0px rgba(0, 222, 251, 0.98)",

        }}
      >
        <div
          className="progress-bar"
          style={{
            position: "absolute",
            left: "0",
            top: "0",
            width: `${loadingCount}%`,
            backgroundColor: "rgb(0, 222, 251)",
            padding: "20px",
            boxShadow: "0px 0px 66px 0px rgba(0, 222, 251, 0.98)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Starting;
