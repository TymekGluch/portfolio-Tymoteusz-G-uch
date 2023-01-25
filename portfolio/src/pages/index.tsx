import { MainNavigation } from '@/componets/MainNavigation/index';
import { NextPage } from 'next';

const IndexPage: NextPage<{}> = ({}) => {
  return (
    <article>
      <MainNavigation></MainNavigation>
    </article>
  );
};

export default IndexPage;
