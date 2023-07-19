/* eslint-disable @next/next/no-img-element */
import React from "react";


export default function Welcome(){

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
            <h1 className="text-2xl">Hey 👋🏻 !</h1>
            <h1 className="text-6xl">I am Satyam Agrawal</h1>
            <h1 className="my-5 text-3xl">I am also a Web Developer/Student/Devops Enthusiast</h1>
          </div>
        </div>
      </section>
    );
}