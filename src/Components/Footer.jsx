import React from "react";


export default function Footer(){

    return (
      <footer className="rounded flex justify-center items-center bg-blue-800 ">
        <p className="font-semibold ">Made by Satyam Agrawal</p>
        <div className="flex gap-2 relative left-10">
          <a href="https://github.com/Asatyam" target="_blank">
            <img className="h-8 " src="/images/github.svg" />
          </a>
          <a
            href="https://www.linkedin.com/in/satyam-agrawal-471943245/"
            target="_blank"
          >
            <img className="h-8 " src="/images/linkedin.svg" />
          </a>
          <a href="https://leetcode.com/agrasatyam1282/" target="_blank">
            <img className="h-8 " src="/images/leetcode.svg" />
          </a>
        </div>
      </footer>
    );
}