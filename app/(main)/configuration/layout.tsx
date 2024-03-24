import Navbar from "@/components/ui/navbar";
import { ReactNode } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <main className={""}>
      <div className="max-w-7xl mx-auto pt-5">{children}</div>
    </main>
  );
}
