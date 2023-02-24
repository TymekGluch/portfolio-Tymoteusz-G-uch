import Image from 'next/image';
import React from 'react';
import { FooterStyled, FooterLinkStyled, FooterWrapperStyled, LinkStyled } from './Footer.styled';

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterStyled>
      <FooterWrapperStyled>
        <FooterLinkStyled
          href="https://www.linkedin.com/in/tymoteusz-g%C5%82uch-a30543267/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <Image src="/icons/linkedin.svg" alt="linkedin" width={50} height={50}></Image>
        </FooterLinkStyled>

        <FooterLinkStyled
          href="https://useme.com/en/roles/contractor/tymoteuszgluch,257012/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <Image src="/icons/useme.png" alt="useme" width={50} height={50}></Image>
        </FooterLinkStyled>

        <FooterLinkStyled
          href="https://github.com/TymekGluch"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <Image src="/icons/github.svg" alt="github" width={50} height={50}></Image>
        </FooterLinkStyled>
      </FooterWrapperStyled>

      <FooterWrapperStyled>
        <LinkStyled href="">
          <Image src="/icons/PrivacyPolicy.svg" alt="cookies" width={20} height={20} />

          <strong>
            <p>Privacy policy</p>
          </strong>
        </LinkStyled>

        <LinkStyled href="">
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
