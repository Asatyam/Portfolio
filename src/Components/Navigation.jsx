import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Navigation(){

    return (
      <nav className="border-b-[1px] bg-transparent backdrop-blur-lg    font-bold text-lg flex gap-4  p-2 px-4 justify-evenly ">
        <AnchorLink href="#about">
          <button> About </button>
        </AnchorLink>
        <AnchorLink href='#skills'><button>Skills</button></AnchorLink>
        <AnchorLink href='#projects'><button>Projects</button></AnchorLink>
        <AnchorLink href='#contact'><button>Contact</button></AnchorLink>
      </nav>
    );
}