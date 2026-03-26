import { Footer } from '~/components/footer';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
} from '~/layouts/project';
import { Fragment } from 'react';
import { baseMeta } from '~/utils/meta';
import caseStyles from '~/styles/case-study.module.css';

const title = 'Guestly';
const description =
  'WhatsApp-native guest communication and AI-assisted operations for hotels—dashboard, campaigns, and PMS-aware workflows.';
const url = 'https://guestly.ai/';
const roles = ['Senior Software Engineer', 'Frontend & platform integration'];

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
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
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
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent className={caseStyles.techSection}>
            <ProjectSectionHeading>Technology</ProjectSectionHeading>
            <div className={caseStyles.techGroup}>
              <div className={caseStyles.techGroupTitle}>Frontend</div>
              <ul className={caseStyles.techList}>
                <li>Next.js, TypeScript, Jest</li>
                <li>shadcn/ui, Tailwind CSS</li>
                <li>TanStack Query (React Query), Zustand</li>
                <li>React Hook Form, Zod</li>
                <li>Lucide icons</li>
              </ul>
            </div>
            <div className={caseStyles.techGroup}>
              <div className={caseStyles.techGroupTitle}>Backend &amp; data</div>
              <ul className={caseStyles.techList}>
                <li>NestJS</li>
                <li>PostgreSQL</li>
                <li>Deployed on AWS Lambda</li>
              </ul>
            </div>
            <div className={caseStyles.techGroup}>
              <div className={caseStyles.techGroupTitle}>Delivery</div>
              <ul className={caseStyles.techList}>
                <li>CircleCI pipelines</li>
              </ul>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
