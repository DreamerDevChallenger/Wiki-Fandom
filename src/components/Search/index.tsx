import { useState, useRef, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import data from "@/__mocks__/search.mock.json";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import styled, { keyframes } from "styled-components";

export default function Search() {
  // Hooks
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string | any>("");
  const router = useRouter();
  const formRef = useRef(null);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const valueParams = searchParams.get("search");

  useEffect(() => {
    pathname === "/result" && setInputValue(valueParams);
  }, []);

  const filterValue = data.filter((item) =>
    item.title.toLowerCase().match(inputValue.toLocaleLowerCase())
  );

  const handleOnBlur = () => {
    setTimeout(() => {
      setIsFocus(false);
    }, 130);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/result?search=${inputValue}`);
  };

  interface PropClick {
    e: React.MouseEvent;
    item: {
      title: string;
    };
  }

  const handleClick = ({ e, item }: PropClick) => {
    e.preventDefault();
    setInputValue(item.title);
    router.push(`/result?search=${item.title}`);
  };

  return (
    <StyledSearch>
      {isFocus && <SearchIcon className="logo" />}
      <form ref={formRef} action="/result" method="get" onSubmit={handleSubmit}>
        <input
          className="search-input"
          list="data-search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          minLength={2}
          placeholder="Search your fandom..."
          onFocus={() => setIsFocus(true)}
          onBlur={handleOnBlur}
        />
      </form>
      {isFocus && filterValue.length > 0 && (
        <div className="search-dropdown">
          <ul>
            {filterValue
              .slice(0, 5)
              .sort(
                (a, b) =>
                  a.title.toLowerCase().indexOf(inputValue.toLowerCase()) -
                  b.title.toLowerCase().indexOf(inputValue.toLowerCase())
              )
              .map((item, index) => (
                <li key={index} onClick={(e) => handleClick({ e, item })}>
                  {item.title}
                </li>
              ))}
          </ul>
        </div>
      )}
    </StyledSearch>
  );
}

const animationAppear = keyframes`  
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledSearch = styled.div`
  width: 100%;
  max-width: 400px;
  position: relative;

  .logo {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }

  .search-input {
    width: 100%;
    height: 40px;
    background-color: ${({ theme }) => theme.secondary};
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    padding: 0 20px;
    transition: 0.3s padding;
    outline: 0;

    &:focus {
      border: 1px solid rgba(255, 255, 255, 0.5);
      padding: 0 40px;
    }
  }

  .search-dropdown {
    width: 100%;
    position: absolute;
    top: 50px;
    background-color: ${({ theme }) => theme.secondary};
    border: solid 1px rgba($color: #fff, $alpha: 0.1);
    border-radius: 15px;
    animation: ${animationAppear} 0.3s ease-in-out;
    overflow: hidden;

    ul {
      li {
        padding: 10px 20px;
        cursor: pointer;
        transition: 0.2s;
        &:hover {
          background-color: ${({ theme }) => theme.primary};
        }
      }
    }
  }
`;
