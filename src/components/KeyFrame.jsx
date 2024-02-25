import { motion } from "framer-motion";

const KeyFrame = () => {
  return (
    <motion.div
      className="m-20 bg-red-500 border w-32 h-32 rounded-full flex items-center justify-center"
      animate={{
        borderRadius: ["0%", "25%", "50%", "25%", "10%"],
        // rotate: [0, 45, 90, 180, 270, 360],
        scale: [0.5, 1, 1.5, 2, 2.5],
      }}
      transition={{
        duration: 1,
      }}
    >
      Hello
    </motion.div>
  );
};

export default KeyFrame;
