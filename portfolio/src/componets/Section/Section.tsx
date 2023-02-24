import React from 'react';
import { SectionStyled } from './Section.styled';

type SectionProps = React.PropsWithChildren<{
  sectionPosition?: string;
  sectionId: string;
  sectionWidth?: string;
  sectionHeight?: string;
  sectionBorder?: string;
  sectionBorderOnPC?: string;
  sectionBorderRadius?: string;
  isBackgroundColor?: boolean;
  isCircleMod?: boolean;
}>;

const Section: React.FC<SectionProps> = ({
  children,
  sectionId,
  sectionPosition = 'static',
  sectionWidth = '80vw',
  sectionHeight = 'fit-content',
  sectionBorder = 'none',
  sectionBorderOnPC = 'none',
  sectionBorderRadius = '0',
  isBackgroundColor = false,
  isCircleMod = false,
}) => {
  return (
    <SectionStyled
      id={sectionId}
      position={sectionPosition}
      width={sectionWidth}
      height={sectionHeight}
      border={sectionBorder}
      sectionBorderOnPC={sectionBorderOnPC}
      borderRadius={sectionBorderRadius}
      isBackground={isBackgroundColor}
      isCircle={isCircleMod}
    >
      {children}
    </SectionStyled>
  );
};

export { Section };
