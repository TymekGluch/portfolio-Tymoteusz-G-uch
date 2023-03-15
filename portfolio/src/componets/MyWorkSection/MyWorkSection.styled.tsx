import { defaultTheme } from '@/providers';
import styled from 'styled-components';

const MyWorkSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6rem;
  width: 100vw;
  margin: 6rem 0;
`;

const MyWorkHeadingStyled = styled.h2`
  color: ${({ theme }) => (theme as typeof defaultTheme).TEXT_COLOR};
`;

const MyWorkCardContainerStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
`;

const MyWorkCardStyled = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
  width: 19rem;
  height: 28rem;
  padding: 2rem;
  background-color: ${({ theme }) => (theme as typeof defaultTheme).PRIMARY_ITEM_COLOR};
  border-radius: 1.5rem;
  opacity: ${({ theme }) => (theme === defaultTheme ? '97%' : '80%')};
  transition: opacity 200ms linear;
  z-index: 2;
`;

const MyWorkCardNameStyled = styled.h3`
  display: flex;
  width: fit-content;
  flex-direction: column;
  color: ${({ theme }) => (theme as typeof defaultTheme).SECONDARY_TEXT_COLOR};
  gap: 0.3 rem;

  &::after {
    content: '';
    display: flex;
    width: 1px;
    height: 2px;
    background-color: transparent;
    transition: width 200ms linear, background-color 200ms linear;
  }
`;

const MyWorkCardTextStyled = styled.p`
  color: ${({ theme }) => (theme as typeof defaultTheme).SECONDARY_TEXT_COLOR};
  text-align: center;
  font-weight: 600;
`;

const MyWorkCardImageStyled = styled.img`
  width: 220px;
  height: 180px;
  object-fit: cover;
`;

const MyWorkImageWrapperStyled = styled.div<{ isInProgress: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    position: absolute;
    content: 'In progress';
    display: ${({ isInProgress }) => (isInProgress ? 'flex' : 'none')};
    color: transparent;
    font-weight: 600;
    padding: 0.5rem;
    border-radius: 24px;
    transition: color 200ms linear, background-color 200ms linear;
  }
`;

const WrapperStyled = styled.div`
  position: absolute;
  display: flex;
  width: 19.5rem;
  height: 28.5rem;
  background-color: ${({ theme }) => (theme as typeof defaultTheme).BACKGROUND_COLOR};
  transition: transform 200ms linear;
  transform-origin: right;
  z-index: 1;
`;

const MyWorkCardLinkStyled = styled.a<{ isInProgress: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ isInProgress }) => (isInProgress ? 'not-allowed' : 'pointer')};
  text-decoration: none;
  width: 19.25rem;
  height: 28.25rem;
  background-color: ${({ theme }) => (theme as typeof defaultTheme).TEXT_COLOR};
  border-radius: 1.6rem;
  overflow: hidden;

  &:hover ${WrapperStyled}, &:focus ${WrapperStyled} {
    transform: scaleX(0);
  }

  &:hover ${MyWorkCardStyled}, &:focus ${MyWorkCardStyled} {
    opacity: 100%;
  }

  &:hover ${MyWorkCardNameStyled}, &:focus ${MyWorkCardNameStyled} {
    &::after {
      content: '';
      display: flex;
      width: 1px;
      height: 2px;
      background-color: ${({ theme }) => (theme as typeof defaultTheme).SECONDARY_TEXT_COLOR};
      width: 100%;
    }
  }

  &:hover ${MyWorkImageWrapperStyled}, &:focus ${MyWorkImageWrapperStyled} {
    &::after {
      color: ${({ theme }) => (theme as typeof defaultTheme).SECONDARY_TEXT_COLOR};
      background-color: ${({ theme }) => (theme as typeof defaultTheme).PRIMARY_ITEM_COLOR};
      border: solid 1px ${({ theme }) => (theme as typeof defaultTheme).SECONDARY_TEXT_COLOR};
    }
  }
`;

export {
  MyWorkSectionStyled,
  MyWorkHeadingStyled,
  MyWorkCardContainerStyled,
  MyWorkCardStyled,
  MyWorkCardLinkStyled,
  MyWorkCardTextStyled,
  MyWorkCardImageStyled,
  MyWorkCardNameStyled,
  MyWorkImageWrapperStyled,
  WrapperStyled,
};
