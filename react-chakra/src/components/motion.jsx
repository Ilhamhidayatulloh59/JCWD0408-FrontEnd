import { motion } from "framer-motion";

function Motion({ children, pos = "left" }) {
  const initial = { opacity: 0 };
  const animate = { opacity: 1 }
  if (pos == "left") {
    initial.x = -40;
    animate.x = 0
  } else if (pos == "right") {
    initial.x = 40;
    animate.x = 0
  } else if (pos == "top") {
    initial.y = -40;
    animate.y = 0
  } else if (pos == "bottom") {
    initial.y = 40;
    animate.y = 0
  }
  return (
    <motion.div
      initial={initial}
      animate={animate}
      exit={initial}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

export default Motion;
