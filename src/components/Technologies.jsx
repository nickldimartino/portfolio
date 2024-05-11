import { motion } from "framer-motion";
import {
  SiAmazonaws,
  SiBmcsoftware,
  SiCss3,
  SiDjango,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMarkdown,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div id="technologies" className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl  font-semibold">
        Technologies
      </h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiNextdotjs className="text-7xl text-next" />
          <p className="flex justify-center mt-1 text-next text-sm">Next</p>
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiReact className="text-7xl text-react" />
          <p className="flex justify-center mt-1 text-react text-sm">React</p>
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTypescript className="text-7xl text-typescript" />
          <p className="flex justify-center mt-1 text-typescript text-sm">
            Typescript
          </p>
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJavascript className="text-7xl text-javascript" />
          <p className="flex justify-center mt-1 text-javascript text-sm">
            JavaScript
          </p>
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiNodedotjs className="text-7xl text-node" />
          <p className="flex justify-center mt-1 text-node text-sm">Node</p>
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-mongodb" />
          <p className="flex justify-center mt-1 text-mongodb text-sm">
            MongoDB
          </p>
        </motion.div>
        <motion.div
          variants={iconVariants(2.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiExpress className="text-7xl text-express" />
          <p className="flex justify-center mt-1 text-express text-sm">
            Express
          </p>
        </motion.div>
        <motion.div
          variants={iconVariants(3.1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTailwindcss className="text-7xl text-tailwind" />
          <p className="flex justify-center mt-1 text-tailwind text-sm">
            Tailwind
          </p>
        </motion.div>
        <motion.div
          variants={iconVariants(1.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiCss3 className="text-7xl text-css3" />
          <p className="flex justify-center mt-1 text-css3 text-sm">CSS3</p>
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiHtml5 className="text-7xl text-html5" />
          <p className="flex justify-center mt-1 text-html5 text-sm">HTML5</p>
        </motion.div>
        <motion.div
          variants={iconVariants(4.6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPython className="text-7xl text-python" />
          <p className="flex justify-center mt-1 text-python text-sm">Python</p>
        </motion.div>
        <motion.div
          variants={iconVariants(2.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandCpp className="text-7xl text-cpp" />
          <p className="flex justify-center mt-1 text-cpp text-sm">C++</p>
        </motion.div>
        <motion.div
          variants={iconVariants(1.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiGit className="text-7xl text-git" />
          <p className="flex justify-center mt-1 text-git text-sm">Git</p>
        </motion.div>
        <motion.div
          variants={iconVariants(2.1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJest className="text-7xl text-jest" />
          <p className="flex justify-center mt-1 text-jest text-sm">Jest</p>
        </motion.div>
        <motion.div
          variants={iconVariants(4.6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiDjango className="text-7xl text-django" />
          <p className="flex justify-center mt-1 text-django">Django</p>
        </motion.div>
        <motion.div
          variants={iconVariants(3.1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiAmazonaws className="text-7xl text-aws" />
          <p className="flex justify-center mt-1 text-aws text-sm">AWS</p>
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMarkdown className="text-7xl text-markdown" />
          <p className="flex justify-center mt-1 text-markdown text-sm">
            Markdown
          </p>
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongoose className="text-7xl text-mongoose" />
          <p className="flex justify-center mt-1 text-mongoose text-sm">
            Mongoose
          </p>
        </motion.div>
        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPostgresql className="text-7xl text-postgresql" />
          <p className="flex justify-center mt-1 text-postgresql text-sm">
            PostgreSQL
          </p>
        </motion.div>
        <motion.div
          variants={iconVariants(1.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPostman className="text-7xl text-postman" />
          <p className="flex justify-center mt-1 text-postman text-sm">
            Postman
          </p>
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiBmcsoftware className="text-7xl text-ibm" />
          <p className="flex justify-center mt-1 text-ibm text-sm">Rhapsody</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
