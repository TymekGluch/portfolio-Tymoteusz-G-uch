import React from 'react';
import { ItemElementStyled } from './ItemElement.styled';

type ItemElementProps = React.PropsWithChildren<{
  isCircleMod?: boolean;
  circleTransform?: number;
  length: number;
}>;

const ItemElement: React.FC<ItemElementProps> = ({
  children,
  isCircleMod = false,
  circleTransform = 0,
  length,
}) => {
  return (
    <ItemElementStyled length={length} index={circleTransform} isCircle={isCircleMod}>
      {children}
    </ItemElementStyled>
  );
};

export { ItemElement };
