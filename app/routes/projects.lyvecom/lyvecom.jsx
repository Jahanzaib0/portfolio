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
import { FaCloud, FaCode, FaDatabase, FaPlayCircle } from 'react-icons/fa';
import { SiDjango, SiMongodb, SiPython, SiReact, SiShopify } from 'react-icons/si';
import { baseMeta } from '~/utils/meta';
import caseStyles from '~/styles/case-study.module.css';

const title = 'LYVECOM';
const description =
  'Shopify-native shoppable video, live shopping, and AI-assisted video workflows for brands that want social-native conversion on their own site.';
const url = 'https://www.lyvecom.com/';
const roles = ['Senior Software Engineer', 'Frontend & integrations'];

const techGroups = [
  {
    title: 'Frontend',
    items: [
      { label: 'React', icon: SiReact },
      { label: 'Semantic UI', icon: FaCode },
      { label: 'Context API', icon: FaCode },
      { label: 'Mux Player', icon: FaPlayCircle },
      { label: 'Shopify OAuth', icon: SiShopify },
    ],
  },
  {
    title: 'Backend & infrastructure',
    items: [
      { label: 'Python', icon: SiPython },
      { label: 'Django', icon: SiDjango },
      { label: 'MongoDB', icon: SiMongodb },
      { label: 'AWS EC2', icon: FaCloud },
      { label: 'Service APIs', icon: FaDatabase },
    ],
  },
];

export const meta = () => {
  return baseMeta({
    title: 'LYVECOM — shoppable video commerce',
    description:
      'Case study: React, Semantic UI, Mux, Shopify OAuth, and a Django/MongoDB services layer on AWS EC2.',
    prefix: 'Projects',
  });
};

export const Lyvecom = () => {
  return (
    <Fragment>
      <ProjectContainer>
        <ProjectBackground src="/projects/detail-page/lyve.png" opacity={0.82} />
        <ProjectHeader title={title} description={description} url={url} roles={roles} />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectSectionHeading>Problem</ProjectSectionHeading>
            <ProjectSectionText>
              Short-form video drives discovery on social platforms, but merchants still need that
              same energy on their owned storefront—without sacrificing load time, checkout trust,
              or integrations with the rest of their stack.
            </ProjectSectionText>
            <ProjectSectionText>
              LYVECOM targets that gap: embeddable, shoppable video experiences that live where
              shoppers already browse, with clear paths to product and cart.
            </ProjectSectionText>
               <ProjectSectionHeading>Solution</ProjectSectionHeading>
            <ProjectSectionText>
              The product combines high-performance video playback (including Mux-backed
              experiences), Shopify-native authentication, and a React surface built with Semantic
              UI and React Context for cross-cutting state.
            </ProjectSectionText>
            <ProjectSectionText>
              Supporting services use Python and Django with MongoDB, deployed on AWS EC2—aligned
              with long-running workloads and integration-heavy ecommerce flows.
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
