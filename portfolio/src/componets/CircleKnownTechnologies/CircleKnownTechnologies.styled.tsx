import styled, { keyframes } from 'styled-components';

const rotationAnimation = keyframes`
  0% {transform: rotate(0)}
  100% {transform: rotate(360deg)}
`;

const CircleKnownTechnologiesStyled = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 80vw;
  max-height: max-content;
  color: ${({ theme }) => theme.TEXT_COLOR};
  margin-top: 2rem;
  padding: 4rem;
  gap: 4rem;

  @media screen and (min-width: 735px) {
    gap: 5rem;
  }

  @media screen and (min-width: 815px) {
    padding: 5rem;
    gap: 6rem;
  }

  @media screen and (min-width: 935px) {
    padding: 6rem;
    gap: 8rem;
  }

  @media screen and (min-width: 1024px) {
    position: absolute;
    border: none;
    margin: 0;
    animation: 20s linear infinite ${rotationAnimation};
  }
`;

const HeadindStyled = styled.h2`
  color: ${({ theme }) => theme.TEXT_COLOR};
`;

export { CircleKnownTechnologiesStyled, HeadindStyled };
