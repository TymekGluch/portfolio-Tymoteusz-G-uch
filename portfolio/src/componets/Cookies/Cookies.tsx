import Image from 'next/image';
import React from 'react';
import {
  CookiesHeadingStyled,
  CookiesStyled,
  CookiesTextStyled,
  CookiesWrapperStyled,
  CookiesHeaderStyled,
  CookiesButtonStyled,
  CookiesButtonBagroundStyled,
  CookiesButtonShape,
} from './Cookies.styled';

const Cookies = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  const [isExist, setIsExist] = React.useState<boolean>(true);

  const HandleClick = (): void => {
    setIsOpen(false);

    setTimeout(() => {
      setIsExist(false);
    }, 200);
  };

  return (
    <CookiesStyled isOpen={isOpen} isExist={isExist}>
      <CookiesHeaderStyled>
        <CookiesWrapperStyled>
          <CookiesHeadingStyled>Cookies</CookiesHeadingStyled>

          <Image src="/icons/cookies.svg" alt="cookies icon" width={25} height={25} />
        </CookiesWrapperStyled>

        <CookiesButtonStyled title="close cookies" onClick={HandleClick} aria-label="close cookies">
          <CookiesButtonBagroundStyled>
            <CookiesButtonShape />
          </CookiesButtonBagroundStyled>
        </CookiesButtonStyled>
      </CookiesHeaderStyled>

      <CookiesTextStyled>
        This site uses cookies to improve your browsing experience and show personalized ads. By
        using this site, you consent to the use of cookies.
      </CookiesTextStyled>
    </CookiesStyled>
  );
};

export { Cookies };
