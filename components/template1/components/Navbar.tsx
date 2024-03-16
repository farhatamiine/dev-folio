import React from 'react';

import {cn} from "@/lib/utils";
import {MailIcon} from "lucide-react";
import {Kodchasan} from 'next/font/google';


const Kode = Kodchasan({weight: "700", subsets: ["latin"]})

function Navbar({username}: { username: string }) {
    return (
        <div className={"w-full  absolute top-0  bg-white z-50 md:shadow-md"}>
           <div className={"max-w-7xl mx-auto    flex justify-between  p-5"}>
               <a href="" className={cn("nav-logo", Kode.className)}>
                   {username}
               </a>
               <div className={"hidden md:flex gap-10"}>
                   <a href="#about" className={"nav-link"}>About</a>
                   <a href="#education" className={"nav-link"}>Education</a>
                   <a href="#experience" className={"nav-link"}>Experience</a>
                   <a href="#projects" className={"nav-link"}>Projects</a>
               </div>
               <a href="#contact"
                  className={"hidden bg-yellow-200 md:w-10 md:h-10 md:inline-flex items-center justify-center rounded-full text-gray-950"}>
                   <MailIcon/>
               </a>
           </div>

        </div>
    );
}

export default Navbar;