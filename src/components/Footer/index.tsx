import styled from "styled-components";
import SwitchTheme from "../SwitchTheme";

export default function Footer() {
  return (
    <StyledFooter>
      <SwitchTheme />
      <div className="copyright">
        <span>© All right reserved 2023 - Ilyas boukhechem</span>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: -1px;
    width: 50%;
    left: 25%;
    border-top: 1px solid currentColor;
    opacity: 0.2;
  }
`;
