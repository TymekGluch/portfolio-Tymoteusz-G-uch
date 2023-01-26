import React, { isValidElement, MouseEvent, useEffect, useRef, useState } from 'react';
import {
  HamburgerButtonItemStyled,
  HamburgerButtonStyled,
  HamburgerListButtonWrapperStyled,
  HamburgerListItemStyled,
  HamburgerListStyled,
  HamburgerMenuStyled,
} from './HamburgerMenu.styled';

type HamburgerMenuProps = {
  children: React.ReactNode;
};

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ children }) => {
  const countOfMenuTogglesRef = useRef<number>(0);

  const [isAcitve, setIsAcitve] = useState<boolean>(false);
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleClickButton = ({ currentTarget }: MouseEvent<HTMLButtonElement>): void => {
    if (currentTarget.getAttribute('aria-expanded') === 'true') {
      setIsAcitve(false);
    } else {
      setIsShow(true);
      countOfMenuTogglesRef.current = countOfMenuTogglesRef.current + 1;
    }
  };

  const handleTransitionEndMenu = (): void => {
    if (!isAcitve) {
      setIsShow(false);
    }
  };

  useEffect(() => {
    if (isShow) {
      setIsAcitve(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countOfMenuTogglesRef.current]);

  return (
    <HamburgerMenuStyled>
      <HamburgerButtonStyled
        onClick={handleClickButton}
        aria-label={isShow ? 'Close the menu' : 'Open the menu'}
        aria-expanded={isShow ? 'true' : 'false'}
        aria-haspopup="true"
        aria-controls="mainmenu"
        type="button"
        id="menubutton"
      >
        <HamburgerButtonItemStyled isActivated={isShow} />
      </HamburgerButtonStyled>

      <HamburgerListStyled
        id="mainmenu"
        role="menu"
        aria-labelledby="menubutton"
        aria-hidden={!isShow ? 'true' : 'false'}
        isOpen={isAcitve}
        isShow={isShow}
        onTransitionEnd={handleTransitionEndMenu}
      >
        <HamburgerListButtonWrapperStyled role="none" />

        {React.Children.map(children, (child) => (
          <HamburgerListItemStyled role="none">{child}</HamburgerListItemStyled>
        ))}
      </HamburgerListStyled>
    </HamburgerMenuStyled>
  );
};

export { HamburgerMenu };
