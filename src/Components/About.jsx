import React from "react";

export default function About(){

    return (
      <section id='about' className="w-full flex flex-col items-center">
        <h1 className=" my-2 text-center text-3xl font-bold ">
          <span className="text-3xl font-extralight">I </span>About Me
        </h1>
        <div className=" w-fit text-2xl border-2 p-2 m-2 flex flex-col md:justify-center md:items-center ">
            <ul className=" p-2">
                <li className="flex gap-2"><span>➣</span> Junior at IIIT-Gwalior pursuing Bachelor of Technology in IT</li>
                <li className="flex gap-2"><span>➣</span> Proficient in designing and creating beautiful front-ends </li>
                <li className="flex gap-2"><span>➣</span> Strong experience in building and securing the backend of web applications</li>
                <li className="flex gap-2"><span>➣</span> Ability to learn and master any technology in no time </li>
                <li className="flex gap-2"><span>➣</span> Expert at getting work done in challenging and high pressure environments</li>

            </ul>
        </div>
      </section>
    );
}