"use client";

import home from "@/styles/home.module.scss";
import logo from "@/assets/flame.svg";
import Image from "next/legacy/image";

import Search from "@/components/Search";

export default function Home() {
  return (
    <main className={home.container}>
      <section className={home.section}>
        <div className={home.logo_container}>
          <div className={home.logo_block}>
            <Image
              src={logo}
              objectFit="cover"
              layout="fill"
              alt={`logo`}
              priority
            />
          </div>
          <h1>
            <i>Wiki Fandom</i>
          </h1>
        </div>
        <Search />
      </section>
    </main>
  );
}
