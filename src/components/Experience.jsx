import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div id="experience" className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl  font-semibold">Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mt-12 mb-8 flex flex-wrap lg:justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-500 font-semibold">
                {experience.year}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                {experience.company === "Sharp Action Sports" ? (
                  <span className="text-sm text-blue-500">
                    {experience.company}
                  </span>
                ) : (
                  <a
                    href={experience.companyWebsite}
                    target="_blank"
                    className="text-sm text-blue-500 hover:underline"
                  >
                    {experience.company}
                  </a>
                )}
              </h6>
              <ul>
                {experience.description.map((description, index) => (
                  <li key={index} className="mb-4 text-neutral-500">
                    {description}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 -mb-3 rounded-lg bg-transparent px-2 py-1 text-sm font-medium text-black border-black border-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
