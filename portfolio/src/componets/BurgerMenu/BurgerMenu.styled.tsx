import { COLORS } from '@/consts/COLORS';
import styled from 'styled-components';

export const BurgerBackgroudStyled = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
`;

export const BurgerBackgroudItemStyled = styled.div<{ isActivated: boolean }>`
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

export const BurgerListStyled = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  top: 3.5rem;
  transform: translateY(${({ isOpen = false }) => (isOpen ? `0` : `-100%`)});
  left: 0;
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-bottom: solid 2px ${COLORS.PRIMARY_ITEM_COLOR};
  transition: transform 200ms linear;
  z-index: -1;
`;

export const BurgerListButtonWrapperStyled = styled.li`
  width: 100vw;
  height: fit-content;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const BurgerListItemStyled = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 3rem;
  padding: 0 1.5rem;
  font-size: 1.5rem;
  color: ${COLORS.TEXT_COLOR};

  &:active {
    background-color: ${COLORS.PRIMARY_ITEM_COLOR};
  }
`;

export const BurgerMenuStyled = styled.nav`
  display: flex;
  flex-direction: column;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`;
