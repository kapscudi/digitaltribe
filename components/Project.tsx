import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/typing';
import { urlFor } from '@/sanity/sanity';

type Props = { projects: Project[] };

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly  mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 tracking-[20px] uppercase text-gray-500 text-2xl">
        Les Projets
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin">
        {projects.map((project, i) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            key={project._id}
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="h-60 rounded-xl object-cover"
              src={urlFor(project?.image).url()}
              alt=""
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className=" capitalize underline decoration-[#F7AB0A]/50">
                  étude de cas {i + 1} sur {projects.length} :
                </span>{' '}
                {project.title}
              </h4>
              <div className="flex items-center space-x-2 justify-center">
                {project.technologies.map((tech) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    className="h-10 w-10"
                    key={tech._id}
                    src={urlFor(tech?.image).url()}
                    alt={tech.title}
                  />
                ))}
              </div>

              <p className="text-md text-center md:text-left">
                {project.Summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 "></div>
    </motion.div>
  );
}
