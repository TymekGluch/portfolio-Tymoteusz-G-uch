import { COLORS } from '@/consts/COLORS';
import Link from 'next/link';
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
  background-color: ${({ isActivated = false }) =>
    isActivated ? 'transparent' : COLORS.PRIMARY_ITEM_COLOR};
  transition: background-color 100ms;
  border-radius: 24px;

  &::before {
    content: '';
    display: flex;
    width: 100%;
    height: 0.4rem;
    background-color: ${COLORS.PRIMARY_ITEM_COLOR};
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
    background-color: ${COLORS.PRIMARY_ITEM_COLOR};
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
  transform: translateY(${({ isOpen = false }) => (isOpen ? `0` : `-100%`)});
  left: 0;
  width: 100vw;
  height: fit-content;
  display: ${({ isShow = false }) => (isShow ? `flex` : `none`)};
  flex-direction: column;
  border-bottom: solid 2px ${COLORS.PRIMARY_ITEM_COLOR};
  transition: transform 200ms linear;
  z-index: -1;

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
  align-items: flex-start;

  @media screen and (min-width: 1024px) {
    width: fit-content;
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
    color: ${COLORS.TEXT_COLOR};
    text-decoration: none;

    &:hover {
      background-color: ${COLORS.PRIMARY_ITEM_COLOR};
      color: #fff;
    }

    &:active {
      background-color: ${COLORS.PRIMARY_ITEM_COLOR};
      color: #fff;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 12rem;
    height: 100%;
  }
`;
