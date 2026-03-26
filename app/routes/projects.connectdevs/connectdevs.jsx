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

const title = 'ConnectDevs';
const description =
  'An AI-assisted hiring platform: discovery across large talent graphs, enrichment, screening, and voice-enabled workflows with retrieval-augmented generation.';
const url = 'https://connectdevs.com/';
const roles = ['Senior Software Engineer', 'Full-stack & AI integration'];

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
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
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
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent className={caseStyles.techSection}>
            <ProjectSectionHeading>Technology</ProjectSectionHeading>
            <div className={caseStyles.techGroup}>
              <div className={caseStyles.techGroupTitle}>Frontend</div>
              <ul className={caseStyles.techList}>
                <li>React</li>
                <li>Axios</li>
                <li>shadcn/ui</li>
                <li>Zustand</li>
                <li>Lucide icons</li>
                <li>React Hook Form, Zod</li>
              </ul>
            </div>
            <div className={caseStyles.techGroup}>
              <div className={caseStyles.techGroupTitle}>Backend &amp; platform</div>
              <ul className={caseStyles.techList}>
                <li>NestJS</li>
                <li>PostgreSQL</li>
                <li>LinkedIn OAuth, Google OAuth</li>
                <li>Microservice architecture</li>
              </ul>
            </div>
            <div className={caseStyles.techGroup}>
              <div className={caseStyles.techGroupTitle}>AI &amp; data</div>
              <ul className={caseStyles.techList}>
                <li>RAG workflows</li>
                <li>ChromaDB</li>
                <li>ElevenLabs integration</li>
              </ul>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
