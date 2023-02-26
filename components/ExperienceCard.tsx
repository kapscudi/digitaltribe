import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '@/typing';
import { urlFor } from '@/sanity/sanity';

type Props = { exp: Experience };

function ExperienceCard({ exp }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-20 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={urlFor(exp?.companyImage).url()}
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">{exp?.jobTitle}</h4>
        <p className="font-bold text-lg mt-1">{exp?.company}</p>
        <div className="flex flex-wrap space-x-2 my-2 ">
          {exp.technologies.map((tech) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={tech._id}
              className="h-10 w-10 p-1 rounded-full"
              src={urlFor(tech?.image).url()}
              alt={tech?.title}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-200">
          {new Date(exp.dateStarted).toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}{' '}
          -{' '}
          {exp.isCurrentlyWorkingHere
            ? 'en poste'
            : new Date(exp.dateEnded).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
        </p>
        <ul className="list-disc space-y-2 ml-5 text-md max-h-60 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80 pr-5">
          {exp.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
