import Image from 'next/image';
import React, { useEffect } from 'react';
import cookie from 'cookiejs';
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
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isExist, setIsExist] = React.useState<boolean>(false);

  const HandleClick = (): void => {
    cookie.set('cookies-baner-showed', 'true', { expires: 30 });

    setIsOpen(false);
    //todo: onTransitionEnd
  };

  const handleTransitionEnd = (): void => {
    isOpen && setIsExist(true);
  };

  React.useEffect(() => {
    const isCookiesBanerShowed = cookie.get('cookies-baner-showed') === 'true';

    if (!isCookiesBanerShowed) {
      setIsExist(true);
    }
    console.log(cookie.get('cookies-baner-showed'), !isCookiesBanerShowed);
  }, []);

  React.useEffect(() => {
    if (isExist) {
      setIsOpen(true);
    }
  }, [isExist]);

  return (
    <CookiesStyled isOpen={isOpen} isExist={isExist} onTransitionEnd={handleTransitionEnd}>
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
