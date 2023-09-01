import search from "@/styles/search.module.scss";
import { useState, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import data from "@/__mocks__/search.mock.json";

import * as React from "react";

export const Search: React.FC = () => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const formRef = useRef(null);

  const filterValue = data.filter((item) =>
    item.title.toLowerCase().match(inputValue.toLocaleLowerCase())
  );

  const handleOnBlur = () => {
    setTimeout(() => {
      setIsFocus(false);
    }, 130);
  };

  return (
    <div className={search.container}>
      {isFocus && <SearchIcon className={search.logo} />}
      <form
        ref={formRef}
        action="/result"
        method="get"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className={search.input}
          list="data-search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          minLength={2}
          placeholder="Search your fandom..."
          onFocus={() => setIsFocus(true)}
          onBlur={() => handleOnBlur()}
        />
      </form>
      {isFocus && filterValue.length > 0 && (
        <div className={search.dropdown}>
          <ul>
            {filterValue
              .slice(0, 5)
              .sort(
                (a, b) =>
                  a.title.toLowerCase().indexOf(inputValue.toLowerCase()) -
                  b.title.toLowerCase().indexOf(inputValue.toLowerCase())
              )
              .map((item, index) => (
                <li key={index} onClick={() => setInputValue(item.title)}>
                  {item.title}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
