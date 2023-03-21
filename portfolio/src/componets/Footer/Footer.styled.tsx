import { defaultTheme } from '@/providers';
import styled from 'styled-components';

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem 5rem;
  width: 100vw;
  min-height: 6rem;
  height: fit-content;
  padding: 2rem 2rem;
  background-color: ${({ theme }) => theme.PRIMARY_ITEM_COLOR};
  box-shadow: 0 100px 0 0 #4c35af;
`;

const HeadingStyled = styled.h2`
  color: ${({ theme }) => (theme as typeof defaultTheme).SECONDARY_TEXT_COLOR};
  text-align: center;
  font-size: 18.72px;
`;

const FooterWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0 1rem;
  padding: 0 0 1rem;

  @media screen and (min-width: 425px) {
    gap: 0 3rem;
  }
`;

const SVGWrapperStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    background-color: ${({ theme }) => (theme as typeof defaultTheme).SECONDARY_TEXT_COLOR};
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

const SVGLINKStyled = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
  overflow: hidden;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  border: solid 2px ${({ theme }) => (theme as typeof defaultTheme).PRIMARY_ITEM_COLOR};
  z-index: 1;
`;

export { FooterStyled, SVGLINKStyled, FooterWrapperStyled, HeadingStyled, SVGWrapperStyled };
