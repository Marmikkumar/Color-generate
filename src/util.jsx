// import React from "react";
import "./styles.css";

function componant(c) {
  const hexval = c.toString(16);
  return hexval.length === 1 ? "0" + hexval : hexval;
}

function Rgbtohex(r, g, b) {
  return "#" + componant(r) + componant(g) + componant(b);
}

export default Rgbtohex;
