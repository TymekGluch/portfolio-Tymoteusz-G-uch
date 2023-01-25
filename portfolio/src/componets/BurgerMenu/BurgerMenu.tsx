import React, { useState } from 'react';
import {
  BurgerBackgroudItemStyled,
  BurgerBackgroudStyled,
  BurgerListButtonWrapperStyled,
  BurgerListItemStyled,
  BurgerListStyled,
  BurgerMenuStyled,
} from './BurgerMenu.styled';

type BurgerMenuProps = {
  children: React.ReactNode;
};

const BurgerMenu: React.FC<BurgerMenuProps> = ({ children }) => {
  const [IsAcitve, setIsAcitve] = useState(false);

  return (
    <BurgerMenuStyled>
      <BurgerBackgroudStyled onClick={() => setIsAcitve(!IsAcitve)}>
        <BurgerBackgroudItemStyled isActivated={IsAcitve} />
      </BurgerBackgroudStyled>

      <BurgerListStyled aria-hidden={IsAcitve} isOpen={IsAcitve}>
        <BurgerListButtonWrapperStyled />

        {React.Children.map(children, (child) => (
          <BurgerListItemStyled>{child}</BurgerListItemStyled>
        ))}
      </BurgerListStyled>
    </BurgerMenuStyled>
  );
};

export { BurgerMenu };
