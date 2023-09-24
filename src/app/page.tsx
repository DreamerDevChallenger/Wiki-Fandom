"use client";

import logo from "@/assets/flame.svg";
import Image from "next/legacy/image";

import Search from "@/components/Search";

import styled from "styled-components";

export default function Home() {
  return (
    <StyledHome>
      <section>
        <div className="logo-container">
          <div className="logo-block">
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
    </StyledHome>
  );
}

const StyledHome = styled.main`
  display: flex;
  justify-content: center;
  padding: 100px;

  section {
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 100%;
    align-items: center;
    .logo-container {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 15px;
      .logo-block {
        height: 75px;
        width: 75px;
        position: relative;
      }
    }
  }
`;
