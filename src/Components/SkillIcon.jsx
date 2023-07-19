/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';

export default function SkillIcons({ name }) {
  return (
    <motion.div 
    initial = {{opacity:0}}
     whileInView={{ x: 10, opacity:1 }}
     whileHover={{rotate:360,scale:1.5}}
     transition={{duration:0.5}}
     >
      <div className=" ">
        <div className="h-12 w-12 md:h-16 md:w-16">
          <img
            className="h-full "
            src={`/images/${name}.svg`}
            alt={`${name} icon`}
          />
        </div>
      </div>
    </motion.div>
  );
}
