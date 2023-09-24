"use client";

import Image from "next/legacy/image";
import logo from "@/assets/flame.svg";
import Link from "next/link";
import Search from "@/components/Search";

import styled from "styled-components";
import { usePathname } from "next/navigation";

export default function HeaderResult() {
  const pathname = usePathname();
  return (
    <StyledHeader>
      <Link href={"/"} className="left-header">
        <div className="logo-container">
          <Image
            src={logo}
            objectFit="cover"
            layout="fill"
            alt={`logo`}
            priority
          />
        </div>
        <h1>Wiki Fandom</h1>
      </Link>
      {pathname !== "/" && (
        <div className="center-header">
          <Search />
        </div>
      )}
      <nav className="right-header"></nav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  padding: 20px 30px;
  gap: 24px;
  display: flex;
  align-items: center;
  position: sticky;
  z-index: 10;
  box-shadow: 0 0 2px -1px;

  .left-header {
    display: flex;
    flex-wrap: no-wrap;
    gap: 12px;
    align-items: center;
    text-transform: capitalize;
    font-style: italic;

    h1 {
      font-size: 18px;
      white-space: nowrap;
    }

    .logo-container {
      position: relative;
      width: 40px;
      height: 40px;
    }
  }

  .center-header {
    display: inline-block;
    width: 100%;
  }

  .right-header {
    display: flex;
    flex: 1;
    justify-content: flex-end;

    ul {
      display: flex;
      gap: 12px;

      li {
        position: relative;
        &::after {
          content: "";
          position: absolute;
          bottom: -1px;
          left: 0;
          height: 1px;
          width: 100%;
          background-color: currentColor;
          transform-origin: bottom right;
          transform: scaleX(0);
          transition: transform 0.2s ease-in;
        }

        &:hover,
        &:focus {
          &::after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }
        }
      }
    }
  }
`;
