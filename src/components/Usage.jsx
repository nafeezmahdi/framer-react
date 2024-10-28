import { motion } from "framer-motion";

export default function Usage() {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
    />
  );
}

// opacity: 0; means the element is fully transparent (invisible).
// opacity: 1; means the element is fully opaque (visible).

// scale(0) shrinks the element down to nothing.
// scale(1) restores it to its full, original size.

// scale: 2: This scales the element to 200% of its original size in both the X (width) and Y (height) directions.
// scale(1) is the default size (original size).
// scale(2) doubles the size, making the element look larger.
