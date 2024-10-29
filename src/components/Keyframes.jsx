import { motion } from "framer-motion";

export default function Keyframes() {
  return (
    <motion.div
      className="box"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 3,
      }}
    />
  );
}

// scale: [1, 2, 2, 1, 1]: The element's scale will change from its original size (1) to double the size (2), hold at double size, then shrink back down to its original size. These values in the array represent keyframes for the scaling animation.
// rotate: [0, 0, 180, 180, 0]: The element will rotate from 0° to 180° halfway through the animation, hold at 180°, and then return back to 0°.
// borderRadius: ["0%", "0%", "50%", "50%", "0%"]: The border radius changes the shape from a square (0%) to a circle (50%) midway, then returns to a square by the end.

// duration: 2: The animation will last for 2 seconds.
// ease: "easeInOut": Sets the easing function, which controls the speed curve. "easeInOut" makes it start and end slowly, speeding up in the middle.
// times: [0, 0.2, 0.5, 0.8, 1]: Defines specific timing for each keyframe, so each animation step corresponds to a point in the timeline. This allows control over when each step in the animation happens.
// repeatDelay: 1: Adds a 1-second delay between each repeat of the animation.
//  repeat: Infinity would make the animation loop infinitely.

// Each number in times matches up with the sequence of values in the animate properties (scale, rotate, borderRadius), creating a timeline for each property. Here’s how each value in the times array applies to the keyframes:

// 0 (0%): The first step in the animation happens right at the start (0 seconds).
// 0.2 (20%): The second step occurs at 0.4 seconds (20% of 2 seconds).
// 0.5 (50%): The third step occurs at 1 second (50% of 2 seconds).
// 0.8 (80%): The fourth step occurs at 1.6 seconds (80% of 2 seconds).
// 1 (100%): The final step happens at 2 seconds, which is the end of the animation.
