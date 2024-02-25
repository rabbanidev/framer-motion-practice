import { motion } from "framer-motion";

const parentVariants = {
  initial: {
    opacity: 0,
    y: "-100vh",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 1,
      type: "spring",
    },
  },
};

const childVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: [1, 2, 3, 4, 5, 6, 7, 8],
    transition: {
      duration: 1.5,
    },
  },
};

const Variants = () => {
  return (
    <motion.div
      className="w-[90vw] h-[90vh] bg-green-500 rounded border flex justify-center items-center"
      variants={parentVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="w-10 h-10 bg-red-500 rounded-full"
        variants={childVariants}
      />
    </motion.div>
  );
};

export default Variants;
