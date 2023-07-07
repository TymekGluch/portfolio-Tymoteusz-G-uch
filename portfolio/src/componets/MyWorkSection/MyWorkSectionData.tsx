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
    TITLE: 'Imperium nieruchomości',
    TEXT: (<>A website powered by WordPress for a estate agency, created in cooperation with the <a href="https://pro-s.net.pl/" target="_blank" rel="noopener noreferrer">PRO-S agency</a>.</>),
    IMAGE:
      '/icons/imperium.png',
    LINK: 'https://imperium-nieruchomosci.pl/',
    IS_IN_PEROGRES: false,
  },
  {
    TITLE: 'Wspominamy.pl',
    TEXT: (<>A WordPress web application for embedding multimedia galleries related to people whose time has taken from us away, created in cooperation with the <a href="https://pro-s.net.pl/" target="_blank" rel="noopener noreferrer">PRO-S agency</a>.</>),
    IMAGE:
      '/icons/wspominamy.png',
    LINK: 'https://wspominaj.pl/',
    IS_IN_PEROGRES: false,
  },
  {
    TITLE: 'MZTS app',
    TEXT: 'Official web application powered by Next.js and TypeScript for the Masovian Sports Dance Association.',
    IMAGE:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/2560px-Placeholder_view_vector.svg.png',
    LINK: '/',
    IS_IN_PEROGRES: true,
  },
] as const;

export { MyWorkSectionData };
