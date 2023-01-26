import { COLORS } from '@/consts/COLORS';
import styled from 'styled-components';

export const MainNavigationStyled = styled.header`
  width: 100vw;
  height: 3.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: solid 2px ${COLORS.PRIMARY_ITEM_COLOR};
  background-color: ${COLORS.BACKGROUND_COLOR};

  @media screen and (min-width: 1024px) {
    padding: 0 10vw;
    justify-content: space-between;
  }
`;

export const MainHeadingStyled = styled.h1`
  color: ${COLORS.TEXT_COLOR};
  font-size: 2rem;
`;
