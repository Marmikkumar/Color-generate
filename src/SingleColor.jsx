import React, { useEffect, useState } from "react";
import Rgbtohex from "./util";
import "./styles.css";

function SingleColor(props) {
  const [alert, setalert] = useState(false);
  const col = props.rgb.join(",");
  const hex = Rgbtohex(...props.rgb);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setalert(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [alert]);

  function handleclick() {
    setalert(true);
  }

  return (
    <div
      onClick={() => {
        setalert(true);
        navigator.clipboard.writeText(hex);
      }}
      className="arrange"
      style={{
        color: `${props.index > 10 && "white"}`,
        backgroundColor: `rgb(${col})`
      }}
    >
      <p>{hex}</p>
      <p>{props.weight}%</p>
      {alert && <p className="alert">color code copy</p>}
    </div>
  );
}

export default SingleColor;
