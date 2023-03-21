import { defaultTheme } from '@/providers';
import styled from 'styled-components';

const CookiesStyled = styled.section<{ isExist: boolean; isOpen: boolean }>`
  position: sticky;
  display: ${({ isExist = true }) => (isExist ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: fit-content;
  background-color: ${({ theme }) => (theme as typeof defaultTheme).PRIMARY_ITEM_COLOR};
  padding: 1rem 0;
  gap: 0.5rem;
  bottom: 0;
  z-index: 10;
  transform: ${({ isOpen = true }) => (isOpen ? 'scaleY(1)' : 'scaleY(0)')};
  transition: transform 200ms ease-in;
  transform-origin: bottom;
`;

const CookiesWrapperStyled = styled.div`
  display: flex;
  width: fit-content;
  height: 100%;
  gap: 0.5rem;
`;

const CookiesHeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  width: 100%;
`;

const CookiesHeadingStyled = styled.h2`
  color: ${({ theme }) => (theme as typeof defaultTheme).SECONDARY_TEXT_COLOR};
  font-size: 18.72px;
`;

const CookiesTextStyled = styled.p`
  color: ${({ theme }) => (theme as typeof defaultTheme).SECONDARY_TEXT_COLOR};
  width: 90%;
  text-align: center;
  font-weight: 600;
`;

const CookiesButtonStyled = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.25rem;
  height: 2.25rem;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  overflow: hidden;
  z-index: 1;
`;

const CookiesButtonBagroundStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    display: flex;
    position: absolute;
    width: 2.21rem;
    height: 2.21rem;
    background-color: ${({ theme }) => (theme as typeof defaultTheme).SECONDARY_TEXT_COLOR};
    border-radius: 50%;
    z-index: -1;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 200ms ease-in-out;
  }

  &:hover,
  &:focus {
    &::after {
      transform: scale(1);
    }
  }
`;

const CookiesButtonShape = styled.div`
  position: relative;
  display: flex;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${({ theme }) => (theme as typeof defaultTheme).PRIMARY_ITEM_COLOR};
  transform: rotate(45deg);

  &::before {
    position: absolute;
    content: '';
    display: flex;
    width: 1.5rem;
    height: 0.3rem;
    border-radius: 24px;
    background-color: ${({ theme }) => (theme as typeof defaultTheme).SECONDARY_TEXT_COLOR};
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &::after {
    position: absolute;
    content: '';
    display: flex;
    width: 0.3rem;
    height: 1.5rem;
    border-radius: 24px;
    background-color: ${({ theme }) => (theme as typeof defaultTheme).SECONDARY_TEXT_COLOR};
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export {
  CookiesStyled,
  CookiesWrapperStyled,
  CookiesHeadingStyled,
  CookiesTextStyled,
  CookiesHeaderStyled,
  CookiesButtonStyled,
  CookiesButtonBagroundStyled,
  CookiesButtonShape,
};
