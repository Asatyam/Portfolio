import React from "react";
import SkillIcons from "./SkillIcon";
import {motion} from 'framer-motion'

export default function Skills({}){

    const skills = [
        {name: 'git'},
        {name:'github'},
        {name: 'rest',},
        {name: 'postman',},
        {name: 'html5',},
        {name: 'css3',},
        {name: 'javascript',},
        {name: 'react',},
        {name: 'npm',},
        {name: 'nodejs',},
        {name: 'express',},
        {name: 'jest',},
        {name: 'webpack',},
        {name: 'vite',},
        {name: 'c',},
        {name: 'cpp',},
        {name: 'python',},
        {name: 'mysql',},
        {name: 'mongodb',},
        {name: 'tensorflow',},
        {name: 'nextjs',},
        {name: 'postgres',},
        {name: 'tailwind',},
        {name: 'typescript',},
        {name: 'vuejs',},
        {name: 'nuxtjs',},
        {name: 'prisma',},
        {name: 'redux',},
    ]
    const variants = {
      visible: { opacity: 1 },
      hidden: { opacity: 0 },
    };

    return (
      <motion.div variants={variants}>
          <section id='skills' className="m-2  py-4 h-fit flex flex-col gap-8 items-center justify-center ">
            <h1 className="text-white  font-bold text-center text-3xl">
              <span className=" font-extralight text-4xl">I</span> Tools I have
              worked with
            </h1>
            <div className=" w-4/5 p-2 flex flex-wrap gap-12 justify-center items-center">
              {skills.map((skill) => (
                <SkillIcons key={skill.name} name={skill.name} />
              ))}
            </div>
          </section>
      </motion.div>
    );
}