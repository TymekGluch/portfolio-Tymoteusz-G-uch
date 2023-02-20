import React from 'react';
import { MainArticleStyled } from './MainArticle.styled';

type MainArticleProps = {
  children: React.ReactNode;
};

const MainArticle: React.FC<MainArticleProps> = ({ children }) => {
  return <MainArticleStyled>{children}</MainArticleStyled>;
};

export { MainArticle };
