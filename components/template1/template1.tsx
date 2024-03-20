import React from "react";
import Navbar from "./components/Navbar";
import { MailIcon } from "lucide-react";
import Hero from "@/components/template1/components/Hero";

interface Template1Props {
  username: string;
}

function Template1({ username }: Template1Props) {
  return (
    <main className={"h-full w-full relative"}>
      <Navbar username={username} />
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className={"flex items-center justify-center flex-col"}>
          <img
            src="me.jpg"
            alt=""
            className={"w-40 h-40 rounded-full border-2 border-black"}
          />
          <p className="text-2xl capitalize sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            {username} farhat
          </p>
          <p
            className={
              "text-xl md:text-2xl bg-clip-text text-center  md:w-[40rem] font-medium"
            }
          >
            Designing and developing visually stunning and technically
            proficient websites for clients worldwide.
          </p>

          <button className="inline-flex h-12 mt-5 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <MailIcon className={"mr-2"} /> Contact Me
          </button>
        </div>
      </div>
      <Hero />
      <div className="h-[50rem] w-full"></div>
    </main>
  );
}

export default Template1;
