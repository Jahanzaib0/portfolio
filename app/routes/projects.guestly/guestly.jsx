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
import { FaCloud, FaCode, FaDatabase, FaShieldAlt, FaWpforms } from 'react-icons/fa';
import {
  SiCircleci,
  SiJest,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { baseMeta } from '~/utils/meta';
import caseStyles from '~/styles/case-study.module.css';

const title = 'Guestly';
const description =
  'WhatsApp-native guest communication and AI-assisted operations for hotels—dashboard, campaigns, and PMS-aware workflows.';
const url = 'https://guestly.ai/';
const roles = ['Senior Software Engineer', 'Full Stack Developer'];

const techGroups = [
  {
    title: 'Frontend',
    items: [
      { label: 'Next.js', icon: SiNextdotjs },
      { label: 'TypeScript', icon: SiTypescript },
      { label: 'Jest', icon: SiJest },
      { label: 'Tailwind CSS', icon: SiTailwindcss },
      { label: 'React Query', icon: SiReact },
      { label: 'Zustand', icon: FaCode },
      { label: 'React Hook Form', icon: FaWpforms },
      { label: 'Zod', icon: FaShieldAlt },
    ],
  },
  {
    title: 'Backend & data',
    items: [
      { label: 'NestJS', icon: SiNestjs },
      { label: 'PostgreSQL', icon: SiPostgresql },
      { label: 'AWS Lambda', icon: FaCloud },
    ],
  },
  {
    title: 'Delivery',
    items: [
      { label: 'CircleCI', icon: SiCircleci },
      { label: 'Cloud Deployments', icon: FaCloud },
      { label: 'Reliable APIs', icon: FaDatabase },
    ],
  },
];

export const meta = () => {
  return baseMeta({
    title: 'Guestly — WhatsApp for hospitality',
    description:
      'Case study: building a Next.js and NestJS stack for AI-assisted guest messaging, PostgreSQL on AWS Lambda, and CircleCI delivery.',
    prefix: 'Projects',
  });
};

export const Guestly = () => {
  return (
    <Fragment>
      <ProjectContainer>
        <ProjectBackground src="/projects/detail-page/guestly.png" opacity={0.82} />
        <ProjectHeader title={title} description={description} url={url} roles={roles} />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectSectionHeading>Problem</ProjectSectionHeading>
            <ProjectSectionText>
              Hotels and hospitality teams juggle email, phone, and ad-hoc messaging while guests
              expect instant answers on the channel they already use. Staff burn time on repetitive
              FAQs, booking tweaks, and upsell moments that never reach the right guest at the right
              time.
            </ProjectSectionText>
            <ProjectSectionText>
              The product needed a single place to run conversations end-to-end: fast UI for
              operators, reliable automation, and integrations that respect existing PMS workflows.
            </ProjectSectionText>
                <ProjectSectionHeading>Solution</ProjectSectionHeading>
            <ProjectSectionText>
              Guestly centers WhatsApp as the guest-facing channel and pairs it with an intelligent
              assistant for common flows—while still giving teams a real inbox when human judgment
              matters. The stack emphasizes typed APIs, predictable form flows, and client state that
              stays fast as conversations and campaigns scale.
            </ProjectSectionText>
            <ProjectSectionText>
              On the backend, services are structured for clear boundaries (auth, messaging,
              property data) with PostgreSQL as the source of truth and deployment pipelines that
              keep releases boring on purpose.
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
