import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from './Skill';
import { Skill as SkillType } from '@/typing';

type Props = { skills: SkillType[] };

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="flex relative overflow-hidden flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-evenly xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 tracking-[20px] uppercase text-gray-500 text-2xl">
        compétences
      </h3>

      <h3 className="absolute top-36 tracking-[3px] uppercase text-gray-500 text-sm">
        Survol la competence pour voir le niveau
      </h3>
      <div className="grid grid-cols-6 gap-5">
        {skills.slice(0, skills.length / 2).map((skill) => (
          <SkillCard key={skill._id} skill={skill} directionLeft={true} />
        ))}
        {skills.slice(skills.length / 2, skills.length).map((skill) => (
          <SkillCard key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
