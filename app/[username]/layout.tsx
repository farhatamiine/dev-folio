import {ReactNode} from "react";

export default function UsernameLayout({children,}: Readonly<{ children: ReactNode; }>) {
    return (
        <main className={"h-screen"}>
            {children}
        </main>
    );
}
