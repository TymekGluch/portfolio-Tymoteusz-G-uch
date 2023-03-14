import React from 'react';
import {
  MyWorkCardContainerStyled,
  MyWorkCardImageStyled,
  MyWorkCardLinkStyled,
  MyWorkCardNameStyled,
  MyWorkCardStyled,
  MyWorkCardTextStyled,
  MyWorkHeadingStyled,
  MyWorkSectionStyled,
  WrapperStyled,
} from './MyWorkSection.styled';
import { MyWorkSectionData } from './MyWorkSectionData';

type MyWorkSectionProps = {};

const MyWorkSection: React.FC<MyWorkSectionProps> = ({}) => {
  return (
    <MyWorkSectionStyled>
      <MyWorkHeadingStyled>My Work</MyWorkHeadingStyled>

      <MyWorkCardContainerStyled>
        {MyWorkSectionData.map((card) => (
          <MyWorkCardLinkStyled key={card.TITLE} href={card.LINK}>
            <WrapperStyled />

            <MyWorkCardStyled>
              <MyWorkCardNameStyled>{card.TITLE}</MyWorkCardNameStyled>

              <MyWorkCardTextStyled>{card.TEXT}</MyWorkCardTextStyled>

              <MyWorkCardImageStyled src={card.IMAGE}></MyWorkCardImageStyled>
            </MyWorkCardStyled>
          </MyWorkCardLinkStyled>
        ))}
      </MyWorkCardContainerStyled>
    </MyWorkSectionStyled>
  );
};

export { MyWorkSection };
