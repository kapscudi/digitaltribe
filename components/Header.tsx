import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Social } from '@/typing';

type Props = { socials: Social[] };

export default function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-6xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flew-row items-center"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social?.url}
            fgColor="grey"
            bgColor="transparent"
          />
        ))}
      </motion.div>

      {/* <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flew-row items-center  cursor-pointer"
      >
        <Link href="#contact">
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="grey"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-500 ">
            msg me
          </p>
        </Link>
      </motion.div> */}
    </header>
  );
}
