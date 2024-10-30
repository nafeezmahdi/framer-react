/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
      //       stiffness: 1000: Controls the spring’s stiffness, making the movement feel snappy and quick.
      // velocity: -100: Sets an initial upward velocity, making the element move slightly faster in the opening direction.
    },
    // y: 0: Positions the element at its initial vertical position (y = 0), meaning no vertical offset.
    // opacity: 1: Sets the element to be fully visible.
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      // y: { stiffness: 1000 }: Uses the same high stiffness value for a quick, snappy transition but without an initial velocity, making the closing feel less dynamic.
    },
    //     y: 50: Positions the element 50 pixels lower than its starting position (y = 0), shifting it downwards to make it appear slightly off-screen or out of focus.
    // opacity: 0: Sets the element to be completely transparent (invisible).
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export default function MenuItem({ i }) {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder" style={style} />
      <div className="text-placeholder" style={style} />
    </motion.li>
  );
}
