import { motion } from "framer-motion";
import MenuItem from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    // staggerChildren: 0.07: Each child element’s animation will start with a delay of 0.07 seconds, creating a smooth staggered effect as the sidebar opens.
    // delayChildren: 0.2: The entire group of child animations will start with a 0.2-second delay, so there’s a slight pause before the staggered animations begin when the sidebar opens.
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
    // staggerChildren: 0.05: Each child element’s animation will start with a 0.05-second delay, so the reverse animation will happen a bit faster than in the open state.
    // staggerDirection: -1: This reverses the stagger direction, meaning the last child element will animate first, creating a collapsing effect as the sidebar closes.
  },
};

export default function Navigation() {
  return (
    <motion.ul variants={variants}>
      {itemIds.map((i) => (
        <MenuItem i={i} key={i} />
      ))}
    </motion.ul>
  );
}

const itemIds = [0, 1, 2, 3, 4];
