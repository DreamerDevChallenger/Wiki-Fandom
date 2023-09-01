"use client";

import HeaderHome from "@/components/Header/header-home";
import HeaderResult from "@/components/Header/header-result";
import { useAppSelector } from "@/redux/hooks";
import { selectTheme } from "@/redux/selectors";

import { usePathname } from "next/navigation";

export default function App({ children }: { children: React.ReactNode }) {
  const theme = useAppSelector(selectTheme);
  const pathname = usePathname();

  return (
    <div id="app" className={theme === "light" ? "light" : "dark"}>
      {pathname === "/" && <HeaderHome />}
      {pathname === "/result" && <HeaderResult />}

      {children}
    </div>
  );
}
