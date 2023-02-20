import styled, { css } from 'styled-components';

const ItemElementStyled = styled.li<{ isCircle: boolean; index: number; length: number }>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ isCircle, length, index }) =>
    isCircle &&
    css`
      @media screen and (min-width: 1024px) {
        position: absolute;
        display: flex;
        align-items: start;
        width: fit-content;
        height: 180px;
        transform: translateY(-50%) rotate(${(360 / length) * index}deg);
        transform-origin: center bottom;
      }
    `}
`;

export { ItemElementStyled };
