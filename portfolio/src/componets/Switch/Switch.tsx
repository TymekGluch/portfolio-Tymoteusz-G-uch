import React from 'react';
import { SwitchChildrenWrapperStyled, SwitchInputStyled, SwitchLabelStyled } from './Switch.styled';

type SwitchProps = {
  children: React.ReactNode;
  isChecked: boolean;

  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

// TODO: add tag p with visibility="hidden"

const Switch: React.FC<SwitchProps> = ({ children, isChecked, handleChange }) => {
  return (
    <SwitchLabelStyled role="menuitemcheckbox">
      <SwitchInputStyled
        role="switch"
        type="checkbox"
        checked={isChecked}
        aria-checked={isChecked}
        onChange={handleChange}
      />
      <SwitchChildrenWrapperStyled aria-hidden="true">{children}</SwitchChildrenWrapperStyled>
    </SwitchLabelStyled>
  );
};

export { Switch };
