import { Footer } from '~/components/footer';
import { projects } from '~/projects-data';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { ProjectsSectionIntro } from './projects-section-intro';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import { baseMeta } from '~/utils/meta';
import styles from './home.module.css';

export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: `${config.name} — Senior Software Engineer`,
    description: `Portfolio of ${config.name} — Senior Software Engineer with 4+ years building production web platforms, AI-enabled products, and scalable full-stack systems.`,
  });
};

const projectModels = [
  {
    type: 'image',
    alt: 'Guestly dashboard and WhatsApp conversation UI',
    src: '/projects/guestly-chat.png',
    width: 800,
    height: 350,
  },
  {
    type: 'image',
    alt: 'LYVECOM shoppable video commerce experience',
    src: 'https://images.squarespace-cdn.com/content/v1/5f42ce624278dc3363ba9ec2/15d01078-84c8-4c24-92be-0f8eeafa8ba9/LYVECOM_Live+Shopping_2.png',
    width: 1200,
    height: 800,
  },
  {
    type: 'image',
    alt: 'Fit:match Body AI platform',
    src: '/projects/fitmatch-hero.png',
    width: 1200,
    height: 800,
  },
  {
    type: 'video',
    videoSrc: '/projects/connectdevs-bg.mp4',
  },
];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectsIntro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [
      intro,
      projectsIntro,
      projectOne,
      projectTwo,
      projectThree,
      projectFour,
      details,
    ];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            setVisibleSections(prevSections => {
              if (prevSections.includes(section)) return prevSections;
              return [...prevSections, section];
            });
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      if (section.current) sectionObserver.observe(section.current);
    });

    if (intro.current) indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, []);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectsSectionIntro
        id="projects"
        sectionRef={projectsIntro}
        visible={visibleSections.includes(projectsIntro.current)}
      />
      {projects.map((project, i) => (
        <ProjectSummary
          key={project.slug}
          id={`project-${i + 1}`}
          sectionRef={[projectOne, projectTwo, projectThree, projectFour][i]}
          visible={visibleSections.includes([projectOne, projectTwo, projectThree, projectFour][i].current)}
          index={i + 1}
          title={project.name}
          description={project.teaser}
          buttonText="View project"
          buttonLink={`/projects/${project.slug}`}
          alternate={i % 2 === 1}
          first={false}
          model={projectModels[i]}
        />
      ))}
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
