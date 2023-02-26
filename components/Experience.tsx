import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '@/typing';

type Props = { experiences: Experience[] };

export default function Experiences({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 tracking-[20px] uppercase text-gray-500 text-2xl">
        experience
      </h3>
      <div className="w-full flex space-x-8 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {experiences.map((exp) => (
          <ExperienceCard key={exp._id} exp={exp} />
        ))}
      </div>
    </motion.div>
  );
}
