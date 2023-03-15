import React from 'react';

const MyWorkSectionData = [
  {
    TITLE: 'Submariner watch app',
    TEXT: 'App written in react, typescript, styled component to show abilitiies',
    IMAGE: '/icons/watch.png',
    LINK: 'https://submariner-watch.netlify.app/',
    IS_IN_PEROGRES: false,
  },
  {
    TITLE: 'MZTS app',
    TEXT: 'Official website powered by Next.js and TypeScript for the Masovian Sports Dance Association.',
    IMAGE:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/2560px-Placeholder_view_vector.svg.png',
    LINK: '/',
    IS_IN_PEROGRES: true,
  },
] as const;

export { MyWorkSectionData };
