import { COLORS } from '@/consts';
import styled from 'styled-components';

export const HamburgerMenuStyled = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 3rem;
  height: 3rem;
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    width: fit-content;
    height: 100%;
    align-items: center;
  }
`;

export const HamburgerButtonStyled = styled.button`
  display: flex;
  width: 3rem;
  height: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const HamburgerButtonItemStyled = styled.div<{ isActivated: boolean }>`
  display: block;
  width: 75%;
  height: 0.4rem;
  background-color: ${({ isActivated = false, theme }) =>
    isActivated ? 'transparent' : theme.PRIMARY_ITEM_COLOR};
  transition: background-color 100ms;
  border-radius: 24px;

  &::before {
    content: '';
    display: flex;
    width: 100%;
    height: 0.4rem;
    background-color: ${({ theme }) => theme.PRIMARY_ITEM_COLOR};
    transform-origin: center;
    transform: ${({ isActivated = false }) =>
      isActivated ? 'translate(0, 0%) rotate(45deg);' : 'translate(0, -180%)'};
    transition: transform 100ms;
    border-radius: 24px;
  }

  &::after {
    content: '';
    display: flex;
    width: 100%;
    height: 0.4rem;
    background-color: ${({ theme }) => theme.PRIMARY_ITEM_COLOR};
    transform: ${({ isActivated = false }) =>
      isActivated ? 'translate(0, -100%) rotate(-45deg);' : 'translate(0, 80%)'};
    transform-origin: center;
    transition: transform 100ms;
    border-radius: 24px;
  }
`;

export const HamburgerListStyled = styled.ul<{ isOpen: boolean; isShow: boolean }>`
  position: absolute;
  top: 3.5rem;
  transform: scaleY(${({ isOpen = false }) => (isOpen ? `1` : `0`)});
  left: 0;
  width: 100vw;
  height: fit-content;
  display: ${({ isShow = false }) => (isShow ? `flex` : `none`)};
  flex-direction: column;
  border-bottom: solid 2px ${({ theme }) => theme.PRIMARY_ITEM_COLOR};
  transition: transform 200ms linear;
  transform-origin: top;
  background-color: ${({ theme }) => theme.BACKGROUND_COLOR};

  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 100%;
    position: static;
    display: flex;
    flex-direction: row;
    justify-content: center;
    z-index: 1;
    transform: translateY(0);
    border: none;
  }
`;

export const HamburgerListButtonWrapperStyled = styled.li`
  width: 100vw;
  height: fit-content;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1.5rem 0;

  @media screen and (min-width: 1024px) {
    padding: 0 5rem 0 0;
    order: 4;
    width: 12rem;
    height: 100%;
  }
`;

export const HamburgerListItemStyled = styled.li`
  width: 100vw;
  height: 3rem;
  font-size: 1.5rem;

  a {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.TEXT_COLOR};
    text-decoration: none;

    &:hover {
      background-color: ${({ theme }) => theme.PRIMARY_ITEM_COLOR};
      color: ${({ theme }) => theme.SECONDARY_TEXT_COLOR};
    }

    &:active {
      background-color: ${({ theme }) => theme.PRIMARY_ITEM_COLOR};
      color: ${({ theme }) => theme.SECONDARY_TEXT_COLOR};
    }
  }

  @media screen and (min-width: 1024px) {
    width: 10rem;
    height: 100%;
  }
`;

export const ThemeSVGStyled = styled.svg<{ isDisplayDarkTheme: boolean }>`
  display: ${({ isDisplayDarkTheme = false }) => (isDisplayDarkTheme ? 'none' : 'flex')};
  height: 100%;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
`;
export const ThemePathStyled = styled.path`
  display: flex;
  transform: scale(0.56);
  fill: black;
  stroke: black;
  stroke-width: 0.1rem;
`;
export const DarkThemeSVGStyled = styled.svg<{ isDisplayDarkTheme: boolean }>`
  display: ${({ isDisplayDarkTheme = false }) => (isDisplayDarkTheme ? 'flex' : 'none')};
  height: 100%;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
`;
export const DarkThemePathStyled = styled.path`
  display: flex;
  transform: scale(0.5) rotate(-45deg) translate(-50%, -35%);
  transform-origin: center;
  fill: ${({ theme }) => theme.SECONDARY_TEXT_COLOR};
  stroke: ${({ theme }) => theme.SECONDARY_TEXT_COLOR};
  stroke-width: 0.1rem;
`;
