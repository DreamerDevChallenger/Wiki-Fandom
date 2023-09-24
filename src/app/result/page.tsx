"use client";

import type { Metadata } from "next";
import search from "@/__mocks__/search.mock.json";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import styled from "styled-components";

export const metadata: Metadata = {
  title: "Result Page",
};

export default function Result() {
  const searchParams = useSearchParams().get("search");

  return (
    <StyledResult>
      <section>
        {search
          .filter((result) =>
            result.title
              .toLowerCase()
              .includes(searchParams ? searchParams.toLowerCase() : "")
          )
          .map((result, index) => (
            <div key={index}>
              <Link href={`/wiki/${result.title.replaceAll(" ", "_")}`}>
                {result.title}
              </Link>
            </div>
          ))}
      </section>
    </StyledResult>
  );
}

const StyledResult = styled.main``;
