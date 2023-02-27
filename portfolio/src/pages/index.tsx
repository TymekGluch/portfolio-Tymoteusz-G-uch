import { CircleKnownTechnologies } from '@/componets/CircleKnownTechnologies';
import { MainArticle } from '@/componets/MainArticle';
import { Section } from '@/componets/Section';
import { KNOWN_TECHNOLOGIES } from '@/consts';
import { NextPage } from 'next';
import Image from 'next/image';

const IndexPage: NextPage<{}> = ({}) => {
  return (
    <MainArticle>
      <Section sectionId="about-me-section" sectionWidth="100vw">
        <h2>hi, I am Tymoteusz Głuch.</h2>
        <strong>
          <p>I work as a front-end developer</p>
        </strong>
      </Section>

      <CircleKnownTechnologies length={KNOWN_TECHNOLOGIES.length}>
        {KNOWN_TECHNOLOGIES.map((current) => (
          <Image
            key={current.NAME}
            src={current.SVG_LINK}
            width={40}
            height={40}
            alt={current.NAME}
            title={current.NAME}
          ></Image>
        ))}
      </CircleKnownTechnologies>
    </MainArticle>
  );
};

export default IndexPage;
