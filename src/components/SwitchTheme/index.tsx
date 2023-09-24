import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectTheme } from "@/redux/selectors";

import styled from "styled-components";
import { toggleTheme } from "@/redux/reducers/theme";

export default function SwitchTheme() {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  console.log(theme);

  return (
    <StyledSwitchTheme onClick={() => dispatch(toggleTheme())}>
      <div
        className={`icon-container ${
          theme.theme === "dark" ? "dark" : "light"
        }`}
      ></div>
    </StyledSwitchTheme>
  );
}

const StyledSwitchTheme = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.secondary};
  width: 60px;
  height: 25px;
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;

  .icon-container {
    height: 20px;
    width: 20px;
    border-radius: 100%;
    position: absolute;
    top: 2px;
    left: 2px;
    transition: left 0.3s ease-out;
    &.dark {
      background-color: #dcdcdc;

      left: 37px;
    }
    &.light {
      background-color: #ffe469;
    }
  }
`;
