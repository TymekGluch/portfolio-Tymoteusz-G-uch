import { ThemeContext } from '@/contexts';
import React from 'react';
import { Switch } from '../Switch';
import {
  HamburgerButtonItemStyled,
  HamburgerButtonStyled,
  HamburgerListButtonWrapperStyled,
  HamburgerListItemStyled,
  HamburgerListStyled,
  HamburgerMenuStyled,
  ThemePathStyled,
  ThemeSVGStyled,
  DarkThemePathStyled,
  DarkThemeSVGStyled,
} from './HamburgerMenu.styled';

type HamburgerMenuProps = {
  children: React.ReactNode;
};

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ children }) => {
  const countOfMenuTogglesRef = React.useRef<number>(0);

  const [isAcitve, setIsAcitve] = React.useState<boolean>(false);
  const [isShow, setIsShow] = React.useState<boolean>(false);

  const { isDarkTheme, setIsDarkTheme } = React.useContext(ThemeContext);

  const handleClickButton = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>): void => {
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

  React.useEffect(() => {
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
        <HamburgerListButtonWrapperStyled role="none">
          <Switch isChecked={isDarkTheme} handleChange={() => setIsDarkTheme(!isDarkTheme)}>
            <ThemeSVGStyled
              aria-hidden="true"
              isDisplayDarkTheme={isDarkTheme}
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              width="48"
            >
              <ThemePathStyled d="M24 31q2.9 0 4.95-2.05Q31 26.9 31 24q0-2.9-2.05-4.95Q26.9 17 24 17q-2.9 0-4.95 2.05Q17 21.1 17 24q0 2.9 2.05 4.95Q21.1 31 24 31Zm0 3q-4.15 0-7.075-2.925T14 24q0-4.15 2.925-7.075T24 14q4.15 0 7.075 2.925T34 24q0 4.15-2.925 7.075T24 34ZM3.5 25.5q-.65 0-1.075-.425Q2 24.65 2 24q0-.65.425-1.075Q2.85 22.5 3.5 22.5h5q.65 0 1.075.425Q10 23.35 10 24q0 .65-.425 1.075-.425.425-1.075.425Zm36 0q-.65 0-1.075-.425Q38 24.65 38 24q0-.65.425-1.075.425-.425 1.075-.425h5q.65 0 1.075.425Q46 23.35 46 24q0 .65-.425 1.075-.425.425-1.075.425ZM24 10q-.65 0-1.075-.425Q22.5 9.15 22.5 8.5v-5q0-.65.425-1.075Q23.35 2 24 2q.65 0 1.075.425.425.425.425 1.075v5q0 .65-.425 1.075Q24.65 10 24 10Zm0 36q-.65 0-1.075-.425-.425-.425-.425-1.075v-5q0-.65.425-1.075Q23.35 38 24 38q.65 0 1.075.425.425.425.425 1.075v5q0 .65-.425 1.075Q24.65 46 24 46ZM12 14.1l-2.85-2.8q-.45-.45-.425-1.075.025-.625.425-1.075.45-.45 1.075-.45t1.075.45L14.1 12q.4.45.4 1.05 0 .6-.4 1-.4.45-1.025.45-.625 0-1.075-.4Zm24.7 24.75L33.9 36q-.4-.45-.4-1.075t.45-1.025q.4-.45 1-.45t1.05.45l2.85 2.8q.45.45.425 1.075-.025.625-.425 1.075-.45.45-1.075.45t-1.075-.45ZM33.9 14.1q-.45-.45-.45-1.05 0-.6.45-1.05l2.8-2.85q.45-.45 1.075-.425.625.025 1.075.425.45.45.45 1.075t-.45 1.075L36 14.1q-.4.4-1.025.4-.625 0-1.075-.4ZM9.15 38.85q-.45-.45-.45-1.075t.45-1.075L12 33.9q.45-.45 1.05-.45.6 0 1.05.45.45.45.45 1.05 0 .6-.45 1.05l-2.8 2.85q-.45.45-1.075.425-.625-.025-1.075-.425ZM24 24Z" />
            </ThemeSVGStyled>

            <DarkThemeSVGStyled
              aria-hidden="true"
              isDisplayDarkTheme={isDarkTheme}
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              width="48"
            >
              <DarkThemePathStyled d="M29.65 44q-4.4 0-8.325-1.625-3.925-1.625-6.9-4.4-2.975-2.775-4.7-6.475Q8 27.8 8 23.6t1.725-7.925q1.725-3.725 4.7-6.5t6.9-4.4Q25.25 3.15 29.65 3.15q2.35 0 4.4.5Q36.1 4.15 38 5q-4.5 3.2-7.3 8t-2.8 10.55q0 5.8 2.8 10.625T38 42.15q-1.9.85-3.95 1.35-2.05.5-4.4.5Zm0-3h1.325q.625 0 1.025-.05-3.3-3.7-5.2-8.1-1.9-4.4-1.9-9.25t1.9-9.25q1.9-4.4 5.2-8.15-.4-.05-1.025-.05H29.65q-7.65 0-13.15 5.1T11 23.6q0 7.25 5.5 12.325Q22 41 29.65 41ZM24.9 23.55Z" />
            </DarkThemeSVGStyled>
          </Switch>
        </HamburgerListButtonWrapperStyled>

        {React.Children.map(children, (child) => (
          <HamburgerListItemStyled role="none">{child}</HamburgerListItemStyled>
        ))}
      </HamburgerListStyled>
    </HamburgerMenuStyled>
  );
};

export { HamburgerMenu };
