import {ReactNode} from "react";

export default function EditLayout({children,}: Readonly<{ children: ReactNode; }>) {
    return (
        <main className={"bg-black w-full h-full"}>
            {children}
        </main>
    );
}
