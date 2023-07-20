/* eslint-disable @next/next/no-img-element */
import React,{useState, useEffect} from "react";
import styles from './Name.module.css'
import { motion } from "framer-motion";
export default function Welcome(){



    const roles = ['Full Stack Web Developer', 'Student','DevOps Enthusiast']
    const [curr, setCurr] = useState(roles[0]);

    useEffect(() => {
        let i = 0;
      const interval = setInterval(() => {
        setCurr(roles[i])
        i = (i + 1)%3;
      }, 4000);
      return () => {
        clearInterval(interval);
      };
    }, []);
    return (
      <section className="m-4 flex justify-center font-bold  ">
        <div className=" items-center m-2 justify-center  grid gap-2  md:grid-cols-2">
          <div className="my-2 grid justify-center items-center ">
            <img
              className="h-64 rounded-full border-4 border-cyan-400"
              src="/images/profile.png"
              alt="profile image"
            />
          </div>
          <div>
            <h1 className="text-2xl">Hey 👋🏻 ! I am</h1>
            <h1 className="text-3xl"></h1>
            <h1 className="text-5xl">Satyam Agrawal</h1>

            <h1 className="my-2 text-xl">
              <div className="flex gap-2">
                <div>I am a </div>
                <div className="">
                  <motion.div
                    animate={{ scale: [0, 0.5, 1, 0.5, 0] }}
                    transition={{
                      ease: 'backInOut',
                      duration: 4,
                      repeat: Infinity,
                    }}
                  >
                    {curr}
                  </motion.div>
                </div>
              </div>
            </h1>
          </div>
        </div>
      </section>
    );
}