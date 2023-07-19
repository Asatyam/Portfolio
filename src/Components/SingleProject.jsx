/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

export default function SingleProject({name, title,  description,github, live}){

    let i = 0;
    return(
        <motion.div whileHover={{ scale:1.01 }}>
            <div className="p-4 border-2 m-2 grid gap-4 lg:grid-cols-2 shadow-[0px_0px_5px_2px] ">
                <div className="">
                    <img
                    className="h-full object-contain"
                    src={`/${name}/Home.png`} alt={title}/>
                </div>
                <div className=" grid  mx-4">
                        <h1 className="text-3xl font-extrabold">{title}</h1>
                        <div className="flex gap-2">
                            <a href={github} target="_blank"><img className="h-8 " src='/images/github.svg' alt='github-link'/></a>
                            <a href={live} target="_blank"><img className="h-8 " src='/images/link.png' alt='live link'/></a>
                        </div>
                    <ul className=" text-lg font-medium grid  ">
                       {description.map((descr)=><li key= {i++} className="flex gap-2"> <span> ➣ </span> {descr}</li>)}
                    </ul>
                </div>
            
            </div>
        </motion.div>

    )
}