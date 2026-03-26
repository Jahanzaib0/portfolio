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
import { FaCloud, FaCode, FaDatabase, FaWpforms } from 'react-icons/fa';
import { SiAxios, SiCircleci, SiNestjs, SiReact, SiTailwindcss } from 'react-icons/si';
import { baseMeta } from '~/utils/meta';
import caseStyles from '~/styles/case-study.module.css';

const title = 'Fit:match';
const description =
  'Embeddable Body AI experiences—fast scans, structured insights, and retail or wellness journeys delivered through an isolated widget surface.';
const url = 'https://www.fitmatch.ai/';
const roles = ['Senior Software Engineer', 'Full Stack Developer'];

const techGroups = [
  {
    title: 'Widget & client',
    items: [
      { label: 'React', icon: SiReact },
      { label: 'Shadow DOM', icon: FaCode },
      { label: 'Tailwind CSS', icon: SiTailwindcss },
      { label: 'Axios', icon: SiAxios },
      { label: 'React Query', icon: SiReact },
      { label: 'React Hook Form', icon: FaWpforms },
      { label: 'Zod', icon: FaCode },
    ],
  },
  {
    title: 'Backend & delivery',
    items: [
      { label: 'NestJS', icon: SiNestjs },
      { label: 'DynamoDB', icon: FaDatabase },
      { label: 'AWS Lambda', icon: FaCloud },
      { label: 'CircleCI', icon: SiCircleci },
      { label: 'Cloud workflows', icon: FaCloud },
    ],
  },
];

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
        <ProjectBackground src="/projects/detail-page/fitmatch.png" opacity={0.82} />
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
                <ProjectSectionHeading>Technology Toolkit</ProjectSectionHeading>
            <TechStack groups={techGroups} />
          </ProjectSectionContent>
        </ProjectSection>
       
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
