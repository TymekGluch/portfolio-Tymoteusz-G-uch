import React from 'react';
import {
  MyWorkCardContainerStyled,
  MyWorkCardImageStyled,
  MyWorkCardLinkStyled,
  MyWorkCardNameStyled,
  MyWorkCardStyled,
  MyWorkCardTextStyled,
  MyWorkHeadingStyled,
  MyWorkImageWrapperStyled,
  MyWorkSectionStyled,
  WrapperStyled,
} from './MyWorkSection.styled';
import { MyWorkSectionData } from './MyWorkSectionData';

const MyWorkSection: React.FC = () => {
  const handleCLick: (event: React.MouseEvent<HTMLAnchorElement>) => void = (event) => {
    event.preventDefault();
  };

  return (
    <MyWorkSectionStyled>
      <MyWorkHeadingStyled>My Work</MyWorkHeadingStyled>

      <MyWorkCardContainerStyled>
        {MyWorkSectionData.map((card) => (
          <MyWorkCardLinkStyled
            key={card.TITLE}
            href={card.LINK}
            target="_blank"
            rel="noopener noreferrer"
            isInProgress={card.IS_IN_PEROGRES}
            onClick={(event) => card.IS_IN_PEROGRES && handleCLick(event)}
          >
            <WrapperStyled />

            <MyWorkCardStyled>
              <MyWorkCardNameStyled>{card.TITLE}</MyWorkCardNameStyled>

              <MyWorkCardTextStyled>{card.TEXT}</MyWorkCardTextStyled>

              <MyWorkImageWrapperStyled isInProgress={card.IS_IN_PEROGRES}>
                <MyWorkCardImageStyled src={card.IMAGE} />
              </MyWorkImageWrapperStyled>
            </MyWorkCardStyled>
          </MyWorkCardLinkStyled>
        ))}
      </MyWorkCardContainerStyled>
    </MyWorkSectionStyled>
  );
};

export { MyWorkSection };
