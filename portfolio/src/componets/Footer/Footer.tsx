import Image from 'next/image';
import React from 'react';
import {
  FooterStyled,
  SVGLINKStyled,
  FooterWrapperStyled,
  HeadingStyled,
  SVGWrapperStyled,
} from './Footer.styled';
import { FooterIcon } from './FooterData';

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterStyled id="main-footer">
      <HeadingStyled>you can contact me through these platforms:</HeadingStyled>

      <FooterWrapperStyled>
        {FooterIcon.map((icon) => (
          <SVGWrapperStyled key={icon.NAME}>
            <SVGLINKStyled href={icon.LINK} target={icon.TARGET} rel={icon.REL} title={icon.NAME}>
              <Image src={icon.IMAGE_LINK} alt={icon.NAME} width={50} height={50}></Image>
            </SVGLINKStyled>
          </SVGWrapperStyled>
        ))}
      </FooterWrapperStyled>
    </FooterStyled>
  );
};

export { Footer };
