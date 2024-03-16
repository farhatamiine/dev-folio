import {BentoGrid, BentoGridItem} from '@/components/ui/bento-grid';
import React from 'react';
import {Noto_Serif} from "next/font/google";
import {cn} from "@/lib/utils";
import {InfiniteMovingCards} from "@/components/ui/infinite-moving-cards";
import {SiJavascript, SiSpringboot, SiTypescript} from "react-icons/si";
import {FaReact} from "react-icons/fa";
import {FaJava} from "react-icons/fa6";

interface HeroProps {

}

const Noto = Noto_Serif({weight: "700", subsets: ["latin"]})

const AboutMeDescription = () => {
    return (
        <div className={cn("font-medium text-base text-gray-800 leading-loose space-y-4")}>
            <p className={""}>I&apos;m Amine</p>
            <p>
                I&apos;m a passionate software engineer with a knack for building
                user-friendly and robust web applications.
            </p>
            <p>
                I have 3 years of experience crafting full-stack solutions using
                React for the frontend and Spring Boot for the backend. I thrive in collaborative environments and enjoy
                tackling complex challenges with creative approaches.
            </p>
        </div>
    )
}
const Skeleton = () => (
    <div
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const Experience = () => {
    return (
        <div className={"font-base text-center text-xl"}>
            3+
            Years <br/>of Experiences
        </div>
    )
}


const InfiniteMovingCardsDemo = () => {
    return (
        <div
            className="h-full w-full  rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="fast"
            />
        </div>
    );
}

const testimonials = [
    {

        title: <img src={"spring.png"} className={"w-10 h-10"}/>,
    },
    {

        title: <img src={"java.png"} className={"w-10 h-10"} alt={"java"}/>,
    },
    {

        title: <img  alt={"typescript"} src={"typescript.png"} className={"w-10 h-10"}/>,
    },
    {

        title:  <img src={"mysql.png"}  alt={"typescript"} className={"w-10 h-10"}/>,
    },
];
const items = [
    {


        description: <AboutMeDescription/>,
        className: "md:col-span-2",
    },
    {
        description: <img src="me.jpg" alt=""
                          className={"w-40 h-40 rounded-full grayscale hover:grayscale-0 cursor-pointer"}/>,
        className: "md:col-span-1",
    },
    {
        description: <Experience/>,
        className: "md:col-span-1",

    },
    {
        description: <InfiniteMovingCardsDemo />,
        className: "md:col-span-1",
        title:"My Tech Stack"
    },
    {
        description: "Understand the impact of effective communication in our lives.",
        className: "md:col-span-1",
    },
];

function Hero({}: HeroProps) {
    return (
        <section className={"w-full p-5 md:p-24 bg-[#F7F7F8] h-full"} id={"about"}>
            <h2 className={"text-4xl text-center font-bold mb-10"}>About Me</h2>
            <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[15rem] relative">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        description={item.description}
                        className={item.className}
                        title={item.title}
                    />
                ))}
            </BentoGrid>
        </section>
    );
}

export default Hero;