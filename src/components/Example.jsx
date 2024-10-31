import { useRef } from "react";
import { motion } from "framer-motion";

export default function Example() {
  const constraintsRef = useRef(null);
  console.log(constraintsRef);

  return (
    <div className="example-container">
      <motion.div className="drag-area" ref={constraintsRef} />
      {/* This motion.div represents the area that defines the boundary or constraints for dragging. By passing constraintsRef as a ref, this element becomes the boundary within which another element can be dragged. */}
      <motion.div drag dragConstraints={constraintsRef} />
      {/* Framer Motion's dragConstraints with DOM Measurement:
        Framer Motion checks constraintsRef.current to find the dimensions (height, width) and position of the drag-area element in the viewport.
        Using this information, it automatically calculates how far the draggable element (the second motion.div) can move, creating an invisible boundary based on the drag-area size and location.
        When you specify drag on a motion.div, Framer Motion starts listening for pointer (mouse or touch) events on that element.
        As you move your pointer, Framer Motion continuously updates the element’s x and y positions.
        With dragConstraints, Framer Motion calculates the maximum allowable x and y values for the draggable element.
       
        For each frame while dragging:
        Pointer position ➔ Calculate offset ➔ Update x and y values ➔ Apply translateX(x) translateY(y) to the element

        Behind the scenes, it calculates the new position based on:
        The pointer's current position,
        The offset from where the drag started,
        The initial position of the element.
        This offset-based calculation helps the element "stick" to your pointer or touch as it moves.
      */}
    </div>
  );
}
