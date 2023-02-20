import styled from 'styled-components';

export const MainNavigationStyled = styled.header`
  position: relative;
  width: 100vw;
  height: 3.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: solid 2px ${({ theme }) => theme.PRIMARY_ITEM_COLOR};
  background-color: ${({ theme }) => theme.BACKGROUND_COLOR};
  z-index: 1000;

  @media screen and (min-width: 1024px) {
    padding: 0 10vw;
    justify-content: space-between;
  }
`;

export const MainHeadingStyled = styled.h1`
  color: ${({ theme }) => theme.TEXT_COLOR};
  font-size: 2rem;
`;
