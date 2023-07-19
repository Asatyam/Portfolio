/* eslint-disable @next/next/no-img-element */
import React from "react";


export default function SkillIcons({name}){

    return(
        <div className="">
            <div className="h-12 w-12 md:h-16 md:w-16">
                <img
            className="h-full "
             src={`/images/${name}.svg`} alt={`${name} icon`}/>
            </div>
        </div>
    )
}