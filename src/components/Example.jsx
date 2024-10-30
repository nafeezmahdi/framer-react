import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import MenuToggle from "./MenuToggle";
import Navigation from "./Navigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
      // type: "spring": The animation uses a spring effect, adding a natural bounce.
      // stiffness: 20: This low stiffness creates a slow, smooth bounce effect.
      // restDelta: 2: This determines how close to zero the animation velocity should be for it to be considered "at rest," which helps the animation stop more precisely.
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
      //  delay: 0.5: Adds a half-second delay before the animation begins, providing a slight pause before closing.
      // type: "spring": Uses a spring effect for a smooth transition.
      // stiffness: 400: Higher stiffness means a faster return to the closed state.
      // damping: 40: Controls the "bounce" damping, making it quickly settle in the closed state.
    },
  },
};
// The sidebar object provides an animated toggle effect for the sidebar, expanding with a slow, bouncy effect in the open state and shrinking quickly with a slight delay in the closed state. The use of clipPath gives a circular shape that grows and shrinks based on the sidebar's height, enhancing the visual appeal of the open/close transitions.

export default function Example() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  // useCycle hook from Framer Motion, a popular animation library for React.
  // This Framer Motion hook initializes the state with the first value (false) and cycles between the provided values (false and true) each time you call toggleOpen.
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      // Triggering Variants with the animate Prop
      // To switch between these states, you set the animate prop to a state value (e.g., animate="open" or animate="closed").
      animate={isOpen ? "open" : "closed"}
      custom={height}
      // Framer Motion allows you to pass a custom prop to your component, which can then be used inside animation variants as a parameter to control specific values.
      // Since custom={height} is passed in <motion.nav>, when the open animation runs, height becomes the actual height from useDimensions(containerRef).
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      {/* Variants are typically defined as an object, with each key in the object representing a different state. */}
      {/* When these states are triggered (e.g., animate="open" or animate="closed"), the children of the component with these variants will animate in a staggered, synchronized manner */}
      {/* If isOpen is true, animate="open" applies the open variant. */}
      {/* If isOpen is false, animate="closed" applies the closed variant. */}
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
}
