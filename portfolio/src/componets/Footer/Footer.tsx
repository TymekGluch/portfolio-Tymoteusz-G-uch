import Image from 'next/image';
import React from 'react';
import { FooterStyled, SVGLINKStyled, FooterWrapperStyled, LinkStyled } from './Footer.styled';
import { FooterIcon } from './FooterData';

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterStyled>
      <FooterWrapperStyled>
        {FooterIcon.map((icon) => (
          <SVGLINKStyled
            href={icon.LINK}
            key={icon.NAME}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <Image src={icon.IMAGE_LINK} alt={icon.NAME} width={50} height={50}></Image>
          </SVGLINKStyled>
        ))}
      </FooterWrapperStyled>

      <FooterWrapperStyled>
        <LinkStyled href="/">
          <Image src="/icons/PrivacyPolicy.svg" alt="cookies" width={20} height={20} />

          <strong>
            <p>Privacy policy</p>
          </strong>
        </LinkStyled>

        <LinkStyled href="/">
          <Image src="/icons/cookies.svg" alt="cookies" width={20} height={20} />

          <strong>
            <p>Cookies</p>
          </strong>
        </LinkStyled>
      </FooterWrapperStyled>
    </FooterStyled>
  );
};

export { Footer };
