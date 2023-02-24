import { defaultTheme } from '@/providers';
import React from 'react';
import { useTheme } from 'styled-components';
import { HeadindStyled } from './CircleKnownTechnologies.styled';
import { Section } from '../Section';
import { CircleKnownTechnologiesStyled } from './CircleKnownTechnologies.styled';
import { ItemElement } from '../ItemElement';

type CircleKnownTechnologiesProps = React.PropsWithChildren<{
  length: number;
}>;

const CircleKnownTechnologies: React.FC<CircleKnownTechnologiesProps> = ({ children, length }) => {
  const theme = useTheme();

  return (
    <Section
      sectionId="technologies-section"
      sectionWidth="100vw"
      sectionHeight="fit-content"
      sectionBorderOnPC={`2px solid ${(theme as typeof defaultTheme).PRIMARY_ITEM_COLOR}`}
      isBackgroundColor
      isCircleMod
    >
      <HeadindStyled>Technologies, I work</HeadindStyled>

      <CircleKnownTechnologiesStyled>
        {React.Children.map(children, (child, index) =>
          React.isValidElement(child) ? (
            <ItemElement length={length} circleTransform={index} isCircleMod>
              {React.cloneElement(child)}
            </ItemElement>
          ) : null
        )}
      </CircleKnownTechnologiesStyled>
    </Section>
  );
};

export { CircleKnownTechnologies };
