import styled from 'styled-components';

export const SectionStyled = styled.section<{
  position: string;
  width: string;
  height: string;
  border: string;
  sectionBorderOnPC: string;
  borderRadius: string;
  isBackground: boolean;
  isCircle: boolean;
}>`
  position: ${({ position }) => position};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 3rem 1rem;
  margin: 4rem 0 0 0;
  scroll-margin-top: 3.5rem;
  border-top: ${({ border }) => border};
  border-bottom: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ theme, isBackground }) =>
    isBackground ? theme.BACKGROUND_COLOR : theme.PRIMARY_ITEM_COLOR};
  color: ${({ theme }) => theme.SECONDARY_TEXT_COLOR};
  text-align: center;

  @media screen and (min-width: 1024px) {
    position: ${({ isCircle }) => (isCircle ? 'relative' : 'static')};
    width: ${({ isCircle }) => (isCircle ? '250PX' : '100vw')};
    height: ${({ isCircle }) => (isCircle ? '250PX' : 'fit-content')};
    border: ${({ isCircle, sectionBorderOnPC }) => (isCircle ? sectionBorderOnPC : '0')};
    border-radius: ${({ isCircle, borderRadius }) => (isCircle ? '50%' : borderRadius)};
    margin-top: ${({ isCircle }) => (isCircle ? '7rem' : '')};
    padding: 3rem 2rem;
  }
`;
