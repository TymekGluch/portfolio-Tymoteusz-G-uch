import styled from 'styled-components';

const FooterStyled = styled.footer`
  position: static;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0 5rem;
  width: 100vw;
  min-height: 6rem;
  height: fit-content;
  padding: 3rem 2rem;
  background-color: ${({ theme }) => theme.PRIMARY_ITEM_COLOR};
`;

const FooterWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0 2rem;
  padding: 0 0 1rem;

  @media screen and (min-width: 425px) {
    gap: 0 3rem;
  }
`;

const SVGLINKStyled = styled.a`
  object-fit: cover;
  overflow: hidden;
  border-radius: 10%;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const LinkStyled = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  font-size: 20px;
  text-decoration: none;
  color: ${({ theme }) => theme.SECONDARY_TEXT_COLOR};
  cursor: pointer;
`;

export { FooterStyled, SVGLINKStyled, FooterWrapperStyled, LinkStyled };
