import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '@/typing';
import { urlFor } from '@/sanity/sanity';

type Props = { skill: Skill; directionLeft?: boolean };

export default function SkillCard({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="h-18 w-18 md:h-20 md:w-20 xl:h-24 xl:w-24 rounded-full border border-[#403f3f]/50 object-cover filter group-hover:grayscale transition duration-300 ease-in-out"
        src={urlFor(skill?.image).url()}
        alt={skill?.title}
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out  group-hover:bg-white h-18 w-18 md:h-20 md:w-20 xl:h-24 xl:w-24 rounded-full z-0">
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-2xl font-bold text-black opacity-100">
            {skill?.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}
