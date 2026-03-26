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

const title = 'LYVECOM';
const description =
  'Shopify-native shoppable video, live shopping, and AI-assisted video workflows for brands that want social-native conversion on their own site.';
const url = 'https://www.lyvecom.com/';
const roles = ['Senior Software Engineer', 'Frontend & integrations'];

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
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
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
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent className={caseStyles.techSection}>
            <ProjectSectionHeading>Technology</ProjectSectionHeading>
            <div className={caseStyles.techGroup}>
              <div className={caseStyles.techGroupTitle}>Frontend</div>
              <ul className={caseStyles.techList}>
                <li>React</li>
                <li>Semantic UI</li>
                <li>React Context</li>
                <li>Mux Player</li>
                <li>Shopify OAuth</li>
              </ul>
            </div>
            <div className={caseStyles.techGroup}>
              <div className={caseStyles.techGroupTitle}>Backend &amp; infrastructure</div>
              <ul className={caseStyles.techList}>
                <li>Python, Django</li>
                <li>MongoDB</li>
                <li>AWS EC2</li>
              </ul>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
