import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  flex: 0 0 auto;
  padding: 0.12rem 0.62rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 6.2rem;
`;
export const Title = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1ac073;
`;
export const LinkIcon = styled.div`
  width: 20%;
  height: 100%;
  svg {
    width: 100%;
    height: 100%;
  }
`;
export const Links = styled.nav`
  display: flex;
  flex-direction: column;
  .active {
    position: relative;
    &::after {
      content: "";
      top: 0;
      bottom: 0;
      transform: translateX(-30%);
      position: absolute;
      display: block;
      width: 30%;
      height: 100%;
      background-image: linear-gradient(
        90deg,
        #1ac073 0%,
        rgba(26, 192, 115, 0) 91.25%
      );
      opacity: 0.2;
      border-radius: 0.3rem;
    }
    ${LinkIcon} {
      svg {
        filter: grayscale(0);
      }
    }
  }
`;
export const LinkContainer = styled(NavLink)`
  padding: 0.62rem 0.93rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${LinkIcon} {
    svg {
      filter: grayscale(1);
    }
  }
`;

export const Link = styled.span`
  flex: 1;
  width: 6.2rem;
  padding-left: 0.81rem;
  font-size: 0.93rem;
`;
export const DrawerFooter = styled.div`
  position: relative;
  margin-top: auto;
`;
export const LogOutImg = styled.div`
  width: 20%;
  height: 30%;
  margin-left: 0.62rem;
  cursor: pointer;
  display: inline-block;
  svg {
    width: 100%;
    height: 100%;
  }
`;
