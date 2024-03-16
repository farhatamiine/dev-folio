import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export const BentoGrid = ({
                              className,
                              children,
                          }: {
    className?: string;
    children?: ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
                                  className,
                                  description,
                                  title
                              }: {
    className?: string;
    title?: string | ReactNode;
    description?: string | ReactNode;
    header?: ReactNode;
    icon?: ReactNode;
}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-xl overflow-hidden shadow-md group/bento hover:shadow-xl h-full flex items-center justify-center  transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-slate-50 border border-white  flex-col space-y-4",
                className
            )}
        >
            <div className="group-hover/bento:translate-x-2 transition duration-200 w-full">
                <p className={"text-center font-medium text-lg text-gray-800 mb-4"}>{title}</p>
                <div className="flex items-center justify-center">
                    {description}
                </div>
            </div>
        </div>
    );
};
