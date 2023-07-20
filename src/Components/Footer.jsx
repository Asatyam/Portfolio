/* eslint-disable @next/next/no-img-element */
import React from "react";


export default function Footer(){

    return (
      <footer className="p-2 rounded flex justify-center gap-4 items-center bg-blue-800 ">
        <p className="font-semibold ">Made by Satyam Agrawal</p>
        <div className="flex gap-2">
          <a href="https://github.com/Asatyam" target="_blank">
            <img className="h-8 " src="/images/github.svg" alt='github link' />
          </a>
          <a
            href="https://www.linkedin.com/in/satyam-agrawal-471943245/"
            target="_blank"
          >
            <img className="h-8 " src="/images/linkedin.svg" alt='linkedin link' />
          </a>
          <a href="https://leetcode.com/agrasatyam1282/" target="_blank">
            <img className="h-8 " src="/images/leetcode.svg" alt='leetcode link' />
          </a>
        </div>
      </footer>
    );
}