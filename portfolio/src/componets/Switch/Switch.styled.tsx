import styled from 'styled-components';

export const SwitchInputStyled = styled.input`
  appearance: none;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const SwitchChildrenWrapperStyled = styled.div`
  height: 1.7rem;
  width: 1.7rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.BACKGROUND_COLOR};
  overflow: hidden;
  transition: transform 200ms;
  position: relative;
`;

export const SwitchLabelStyled = styled.label`
  width: 4rem;
  height: 2rem;
  border-radius: 2rem;
  border: none;
  background-color: ${({ theme }) => theme.PRIMARY_ITEM_COLOR};
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 0.15rem;

  &:hover {
    cursor: pointer;
    opacity: 50%;
  }

  &:focus {
    cursor: pointer;
    opacity: 50%;
  }

  ${SwitchInputStyled}:checked + ${SwitchChildrenWrapperStyled} {
    transform: translateX(2rem);
  }
`;
