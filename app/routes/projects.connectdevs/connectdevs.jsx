import { Footer } from '~/components/footer';
import { TechStack } from '~/components/tech-stack';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
} from '~/layouts/project';
import { Fragment } from 'react';
import {
  FaBrain,
  FaCubes,
  FaDatabase,
  FaGoogle,
  FaKey,
  FaLinkedin,
  FaMicrochip,
} from 'react-icons/fa';
import {
  SiAxios,
  SiNestjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from 'react-icons/si';
import { baseMeta } from '~/utils/meta';
import caseStyles from '~/styles/case-study.module.css';

const title = 'ConnectDevs';
const description =
  'An AI-assisted hiring platform: discovery across large talent graphs, enrichment, screening, and voice-enabled workflows with retrieval-augmented generation.';
const url = 'https://connectdevs.com/';
const roles = ['Senior Software Engineer', 'Full-stack & AI integration'];

const techGroups = [
  {
    title: 'Frontend',
    items: [
      { label: 'React', icon: SiReact },
      { label: 'TypeScript', icon: SiTypescript },
      { label: 'Axios', icon: SiAxios },
      { label: 'shadcn/ui', icon: FaMicrochip },
      { label: 'Zustand', icon: FaCubes },
      { label: 'React Hook Form', icon: FaKey },
      { label: 'Zod', icon: FaKey },
    ],
  },
  {
    title: 'Backend & platform',
    items: [
      { label: 'NestJS', icon: SiNestjs },
      { label: 'PostgreSQL', icon: SiPostgresql },
      { label: 'LinkedIn OAuth', icon: FaLinkedin },
      { label: 'Google OAuth', icon: FaGoogle },
      { label: 'Microservices', icon: FaCubes },
    ],
  },
  {
    title: 'AI & data',
    items: [
      { label: 'RAG', icon: FaBrain },
      { label: 'ChromaDB', icon: FaDatabase },
      { label: 'ElevenLabs', icon: FaMicrochip },
    ],
  },
];

export const meta = () => {
  return baseMeta({
    title: 'ConnectDevs — AI hiring engine',
    description:
      'Case study: React and NestJS, PostgreSQL, OAuth, microservices, RAG with Chroma, and ElevenLabs voice.',
    prefix: 'Projects',
  });
};

export const ConnectDevs = () => {
  return (
    <Fragment>
      <ProjectContainer>
        <ProjectBackground src="/projects/detail-page/connectdevs.png" opacity={0.82} />
        <ProjectHeader title={title} description={description} url={url} roles={roles} />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectSectionHeading>Problem</ProjectSectionHeading>
            <ProjectSectionText>
              Hiring teams face two opposing pressures: enormous applicant volume and the need for
              high-signal evaluation. Keyword-matching alone rewards polished resumes; manual
              screening does not scale; and generic AI scoring can still feel like a black box.
            </ProjectSectionText>
            <ProjectSectionText>
              ConnectDevs targets teams that want faster sourcing and structured assessment without
              surrendering transparency into why a candidate surfaced.
            </ProjectSectionText>
               <ProjectSectionHeading>Solution</ProjectSectionHeading>
            <ProjectSectionText>
              The platform combines a modern React client (shadcn UI, Zustand, React Hook Form, Zod)
              with NestJS services backed by PostgreSQL. OAuth integrations (LinkedIn and Google)
              reduce friction for sign-in and account linking across a microservice-oriented
              architecture.
            </ProjectSectionText>
            <ProjectSectionText>
              AI features lean on retrieval-augmented generation with ChromaDB for vector storage and
              relevant context, plus ElevenLabs for high-quality voice experiences where the product
              calls for spoken interaction.
            </ProjectSectionText>
                        <ProjectSectionHeading>Technology Toolkit</ProjectSectionHeading>
            <TechStack groups={techGroups} />
          </ProjectSectionContent>
        </ProjectSection>
 
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
