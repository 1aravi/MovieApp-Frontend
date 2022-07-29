import React from "react";
import { useState } from "react";
import { ColorBox } from "./ColorBox";

export function AddColor() {
  const [color, setColor] = useState("pink");
  const styles = {
    fontSize: "24 px",
    backgroundColor: color,
  };
  const [colorList, setColorList] = useState([
    "orange", "pink", "plum", "purple",
  ]);
  return (
    <div>
      <div className="add-color">
        <input onChange={(event) => setColor(event.target.value)}
          style={styles} type="text" placeholder="Enter a color"
          value={color} />
        <button onClick={() => setColorList([...colorList, color])}>AddColor</button>
      </div>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );

}
