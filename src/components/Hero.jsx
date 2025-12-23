import { HERO_CONTENT } from "../constants/index";
import profilePic from "../assets/profile-pic.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl tracking-tight lg:mt-16 lg:text-8xl"
            >
              Nick DiMartino
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-green-500 via-slate-500 to-blue-600 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Solutions Engineer
            </motion.span>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-green-500 via-slate-500 to-blue-600 bg-clip-text text-2xl tracking-tight text-transparent"
            >
              AWS Certified Solutions Architect - Associate (SAA)
            </motion.span>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-green-500 via-slate-500 to-blue-600 bg-clip-text text-2xl tracking-tight text-transparent"
            >
              Master's in Engineering Management - Student
            </motion.span>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-green-500 via-slate-500 to-blue-600 bg-clip-text text-2xl tracking-tight text-transparent"
            >
              Bachelor's in Computer Engineering
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-md"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Nick DiMartino"
              className="rounded-full border-4 border-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
