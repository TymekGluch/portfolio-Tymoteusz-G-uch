import React from 'react';
import { SwitchChildrenWrapperStyled, SwitchInputStyled, SwitchLabelStyled } from './Switch.styled';

type SwitchProps = {
  children: React.ReactNode;
  isChecked: boolean;

  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Switch: React.FC<SwitchProps> = ({ children, isChecked, handleChange }) => {
  return (
    <SwitchLabelStyled>
      <SwitchInputStyled type="checkbox" checked={isChecked} onChange={handleChange} />

      <SwitchChildrenWrapperStyled>{children}</SwitchChildrenWrapperStyled>
    </SwitchLabelStyled>
  );
};

export { Switch };
