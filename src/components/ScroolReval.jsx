import { motion } from "framer-motion";

export default function ScroolReval() {
  const loremArray = [
    "lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
    "curabitur",
    "vel",
    "hendrerit",
    "libero",
    "lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
    "curabitur",
    "vel",
    "hendrerit",
    "libero",
    "lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
    "curabitur",
    "vel",
    "hendrerit",
    "libero",
  ];

  return (
    <div className="flex flex-col items-center gap-10">
      {loremArray.map((loremText, index) => (
        <Box key={index} text={loremText} index={index} />
      ))}
      <Box />
    </div>
  );
}

const Box = ({ text, index }) => {
  return (
    <motion.div
      className="w-32 h-32 bg-pink-300 text-white rounded border flex justify-center items-center"
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? "-100vh" : "100vh",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
        },
      }}
      viewport={{
        once: true,
      }}
    >
      {text}
    </motion.div>
  );
};
