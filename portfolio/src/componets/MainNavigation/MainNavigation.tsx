import React from 'react';
import { HamburgerMenu } from '../HamburgerMenu';
import { MainHeadingStyled, MainNavigationStyled } from './MainNavigation.styled';

const MainNavigation = () => (
  <MainNavigationStyled>
    <MainHeadingStyled>TG</MainHeadingStyled>

    <HamburgerMenu>
      <a href="/" role="menuitem">
        About me
      </a>

      <a href="/" role="menuitem">
        My Work
      </a>

      <a href="/" role="menuitem">
        Contact
      </a>
    </HamburgerMenu>
  </MainNavigationStyled>
);

export { MainNavigation };
