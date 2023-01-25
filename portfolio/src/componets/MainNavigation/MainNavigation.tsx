import React from 'react';
import { BurgerMenu } from '../BurgerMenu';
import { MainHeadingStyled, MainNavigationStyled } from './MainNavigation.styled';

const MainNavigation = () => (
  <MainNavigationStyled>
    <MainHeadingStyled>TG</MainHeadingStyled>

    <BurgerMenu>
      <a>About me</a>
      <a>My Work</a>
      <a>Contact</a>
    </BurgerMenu>
  </MainNavigationStyled>
);

export { MainNavigation };
