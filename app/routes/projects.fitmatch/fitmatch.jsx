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

const title = 'Fit:match';
const description =
  'Embeddable Body AI experiences—fast scans, structured insights, and retail or wellness journeys delivered through an isolated widget surface.';
const url = 'https://www.fitmatch.ai/';
const roles = ['Senior Software Engineer', 'Widget & embed platform'];

export const meta = () => {
  return baseMeta({
    title: 'Fit:match — Body AI widget',
    description:
      'Case study: Shadow DOM React widget, NestJS and DynamoDB on Lambda, CircleCI, React Query, and strict form validation with Zod.',
    prefix: 'Projects',
  });
};

export const Fitmatch = () => {
  return (
    <Fragment>
      <ProjectContainer>
        <ProjectHeader title={title} description={description} url={url} roles={roles} />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectSectionHeading>Problem</ProjectSectionHeading>
            <ProjectSectionText>
              Body measurement and fit workflows are sensitive, slow, and hard to embed: partner
              sites need a consistent experience without leaking styles, and product teams need
              telemetry and forms that stay trustworthy across environments.
            </ProjectSectionText>
            <ProjectSectionText>
              The widget work focused on a portable surface that could ship inside third-party
              retail and wellness experiences while keeping API access and UI state predictable.
            </ProjectSectionText>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectSectionHeading>Solution</ProjectSectionHeading>
            <ProjectSectionText>
              The client bundle uses Shadow DOM to isolate styles, React with Tailwind for the
              interactive flow, and Axios plus TanStack Query for resilient data fetching. Forms use
              React Hook Form with Zod schemas to keep validation consistent across steps.
            </ProjectSectionText>
            <ProjectSectionText>
              Backend pieces lean on NestJS with DynamoDB and AWS Lambda for scalable, pay-per-use
              execution, with CircleCI handling repeatable releases.
            </ProjectSectionText>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent className={caseStyles.techSection}>
            <ProjectSectionHeading>Technology</ProjectSectionHeading>
            <div className={caseStyles.techGroup}>
              <div className={caseStyles.techGroupTitle}>Widget &amp; client</div>
              <ul className={caseStyles.techList}>
                <li>React</li>
                <li>Shadow DOM</li>
                <li>Tailwind CSS</li>
                <li>Axios</li>
                <li>TanStack Query (React Query)</li>
                <li>React Hook Form, Zod</li>
              </ul>
            </div>
            <div className={caseStyles.techGroup}>
              <div className={caseStyles.techGroupTitle}>Backend &amp; delivery</div>
              <ul className={caseStyles.techList}>
                <li>NestJS</li>
                <li>Amazon DynamoDB</li>
                <li>AWS Lambda</li>
                <li>CircleCI</li>
              </ul>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
