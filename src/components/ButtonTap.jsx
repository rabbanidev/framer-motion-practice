import { motion } from "framer-motion";
import { useState } from "react";

const ButtonTap = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex gap-x-5">
      <motion.button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        whileTap={{
          scale: 0.9,
        }}
        whileHover={{
          scale: 1.1,
        }}
      >
        Tap Me
      </motion.button>

      <motion.button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        whileHover={{
          scale: 1.1,
          transition: { yoyo: Infinity },
        }}
      >
        Tap Me
      </motion.button>

      <motion.div initial={false} animate={isOpen ? "open" : "closed"}>
        <motion.button
          className="bg-black  text-white font-bold w-32 py-2 px-4 rounded flex justify-between items-center"
          whileTap={{
            scale: 0.97,
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
          <motion.div
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
          >
            <svg width="15" height="15" viewBox="0 0 20 20">
              <path d="M0 7 L 20 7 L 10 16" fill="white" stroke="white" />
            </svg>
          </motion.div>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ButtonTap;
