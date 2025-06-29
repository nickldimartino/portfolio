import { motion } from "framer-motion";
import { CERTIFICATIONS } from "../constants/index";

const Certifications = () => {
  return (
    <div id="certifications" className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl  font-semibold">
        Certifications
      </h2>
      <div>
        {CERTIFICATIONS.map((certification, index) => (
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
                {certification.year}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {certification.role} -{" "}
                <a
                  href={certification.companyWebsite}
                  target="_blank"
                  className="text-sm text-blue-500 hover:underline"
                >
                  {certification.company}
                </a>
              </h6>
              <h5 className="mb-2 font-semibold">
                Certificate Validation Number -{" "}
                <span
                  className="text-sm text-blue-500"
                >
                  {certification.validationNum}
                </span>
              </h5>
              <ul>
                {certification.description.map((description, index) => (
                  <li key={index} className="mb-4 text-neutral-500">
                    {description}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap">
                {certification.technologies.map((tech, index) => (
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

export default Certifications;
