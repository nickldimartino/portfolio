import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl  font-semibold">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mt-12 mb-8 flex flex-wrap lg:justify-center"
          >
            <div className="w-full lg:w-1/4 mr-4">
              <motion.img
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                src={project.image}
                alt={project.title}
                height={300}
                width={300}
                className="mb-6 rounded"
              />
            </div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold text-2xl">{project.title}</h6>
              <p className="mb-4 text-neutral-500">{project.description}</p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 -mb-3 rounded-lg bg-transparent px-2 py-1 text-black border-black border-2 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href={project.source}
                  target="_blank"
                  className="text-md text-neutral-500 hover:text-neutral-800 hover:border-neutral-800 border-neutral-500 border-b-2 border-t-2"
                >
                  Source Code
                </a>
                {project.title !== "Py-Pac-Poe" &&
                project.title !== "TriFit" ? (
                  <a
                    href={project.website}
                    target="_blank"
                    className="ml-10 text-md text-neutral-500 hover:text-neutral-800 hover:border-neutral-800 border-neutral-500 border-b-2 border-t-2"
                  >
                    Visit Page
                  </a>
                ) : (
                  <></>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
