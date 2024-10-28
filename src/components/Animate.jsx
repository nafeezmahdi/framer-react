/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";

export default function Animate() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  //   animate={{ x, y, rotate }}:

  // x: Controls the horizontal position of the element. A positive value moves the element to the right, and a negative value moves it to the left.
  // y: Controls the vertical position of the element. A positive value moves the element downward, and a negative value moves it upward.
  // rotate: Specifies the rotation angle of the element in degrees (°). A positive value rotates it clockwise, while a negative value rotates it counterclockwise.
  //   The animate prop takes these values and applies them smoothly to animate the element to the specified positions and rotation. For example, if x: 100, y: 50, and rotate: 45, the element will move 100px right, 50px down, and rotate 45 degrees clockwise.

  return (
    <div className="example">
      <div>
        <motion.div
          className="box-2"
          animate={{ x, y, rotate }}
          transition={{ type: "spring" }}
        />
      </div>
      <div className="inputs">
        <Input value={x} set={setX}>
          x
        </Input>
        <Input value={y} set={setY}>
          y
        </Input>
        <Input value={rotate} set={setRotate} min={-180} max={180}>
          rotate
        </Input>
      </div>
    </div>
  );
}

export function Input({ value, children, set, min = -200, max = 200 }) {
  return (
    <label>
      <code>{children}</code>
      <input
        value={value}
        type="range"
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value))}
      />
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value) || 0)}
      />
    </label>
  );
}
