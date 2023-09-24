"use client";

import Header from "@/components/Header";

import { useAppSelector } from "@/redux/hooks";
import { selectTheme } from "@/redux/selectors";

import styled, { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "./lib/registry";
import Footer from "@/components/Footer";

const darkTheme = {
  text: "#fefefe",
  background: "#040404",
  primary: "#343434",
  secondary: "#0c0c0c",
};

const lightTheme = {
  text: "#141414",
  background: "#fefefe",
  primary: "#e9f4ff",
  secondary: "#ced2ff",
};

/**
 * @param children page elements of the app,
 * @returns
 */

export default function App({ children }: { children: React.ReactNode }) {
  const theme = useAppSelector(selectTheme);

  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme.theme === "light" ? lightTheme : darkTheme}>
        <StyledApp id="app">
          <Header />
          {children}
          <Footer />
        </StyledApp>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}

const StyledApp = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  position: relative;
  transition: background-color 0.2s ease-out;
`;
