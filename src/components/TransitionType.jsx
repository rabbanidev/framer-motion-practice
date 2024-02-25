import { motion } from "framer-motion";

const TransitionType = () => {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          x: "-100vw",
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
      >
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before the final copy is available.
      </motion.div>

      <br />

      <motion.div
        initial={{
          opacity: 0,
          x: "-100vw",
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
          type: "spring",
        }}
      >
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before the final copy is available.
      </motion.div>

      <br />

      <motion.div
        initial={{
          opacity: 0,
          x: "-100vw",
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
          type: "spring",
          bounce: 0.8,
        }}
      >
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before the final copy is available.
      </motion.div>
    </>
  );
};

export default TransitionType;
