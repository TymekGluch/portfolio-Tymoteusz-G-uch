import { useOnClickOutsideEffect } from '@/hooks';
import Link from 'next/link';
import React from 'react';
import { HamburgerMenu } from '../HamburgerMenu';
import { MainHeadingStyled, MainNavigationStyled } from './MainNavigation.styled';
import { NavigationListItems } from './MainNavigationData';

const MainNavigation = () => {
  const navigationRef = React.useRef<HTMLDivElement>(null);

  const countOfMenuTogglesRef = React.useRef<number>(0); //important!!!

  const [isActive, setIsActive] = React.useState<boolean>(false);
  const [isShow, setIsShow] = React.useState<boolean>(false);

  const handleClickButton = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>): void => {
    if (currentTarget.getAttribute('aria-expanded') === 'true') {
      setIsActive(false);
    } else {
      setIsShow(true);
      countOfMenuTogglesRef.current = countOfMenuTogglesRef.current + 1;
    }
  };

  const handleTransitionEndMenu = (): void => {
    if (!isActive) {
      setIsShow(false);
    }
  };

  useOnClickOutsideEffect(navigationRef, () => {
    if (isActive) {
      setIsActive(false);
    }
  });

  React.useEffect(() => {
    if (isShow) {
      setIsActive(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countOfMenuTogglesRef.current]);

  return (
    <MainNavigationStyled ref={navigationRef}>
      <MainHeadingStyled href="/">TG</MainHeadingStyled>

      <HamburgerMenu
        handleClick={handleClickButton}
        isShow={isShow}
        isActive={isActive}
        handleTransitionEndMenu={handleTransitionEndMenu}
        handleListItemClick={() => setIsActive(false)}
      >
        {NavigationListItems.map((item) => (
          <a key={item.TEXT} href={item.LINK} role="menuitem">
            {item.TEXT}
          </a>
        ))}
      </HamburgerMenu>
    </MainNavigationStyled>
  );
};

export { MainNavigation };
