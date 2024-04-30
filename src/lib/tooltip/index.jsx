import React, { useEffect, useRef, useState } from "react";
import "./tooltip.scss";
import { InfoIcon } from "../assets/Icon";

export default function ToolTip({
  children,
  message = "Pass a `message` props to change the tip text pussy",
  direction = "auto",
  color = "#fff",
  bgColor = "#444",
  icon = true,
}) {
  const [xCord, setXCord] = useState(0);
  const [yCord, setYCord] = useState(0);
  const [screenHeight, setscreenHeight] = useState(window.innerHeight);
  const [screenWidth, setscreenWidth] = useState(window.innerWidth);
  const [position, setposition] = useState(direction);
  const toolTipTextRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setscreenHeight(window.innerHeight);
      setscreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const x = screenWidth - xCord;
    const y = screenHeight - yCord;
    const clean = toolTipTextRef.current;
    if (direction === "auto" && clean) {
      y - clean.offsetHeight > 160 ? setposition("bottom") : setposition("top");
    }
  }, [direction, position, screenWidth, screenHeight, xCord, yCord]);
  const getCord = (e) => {
    setXCord(e.clientX - 6) && setYCord(e.clientY);
    setposition(direction);
  };

  return (
    <div className="enhance-tooltip">
      <div
        ref={toolTipTextRef}
        className="enhance-tooltip-text"
        id={position.toString()}
        style={{
          backgroundColor: bgColor,
          left:
            xCord > screenWidth - 120
              ? screenWidth - 240
              : xCord < 120
              ? 0
              : xCord - 100,
        }}
      >
        <span
          style={{
            borderTopColor: bgColor,
            left: xCord > screenWidth - 120 ? "85%" : xCord < 60 ? 10 : "45%",
          }}
        ></span>
        {icon && <InfoIcon color={color} />}
        <div style={{ width: message.length * 8 + "px" }}>{message}</div>
      </div>
      <div onMouseEnter={getCord}>{children}</div>
    </div>
  );
}
