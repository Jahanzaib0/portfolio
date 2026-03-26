import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { useState } from 'react';
import styles from './projects-section-intro.module.css';

export function ProjectsSectionIntro({ id, sectionRef, visible }) {
  const [focused, setFocused] = useState(false);

  return (
    <Section
      className={styles.intro}
      as="section"
      id={id}
      ref={sectionRef}
      tabIndex={-1}
      aria-labelledby={`${id}-heading`}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <Transition in={visible || focused}>
        {({ visible: animVisible }) => (
          <div className={styles.inner}>
            <div className={styles.index} aria-hidden>
              <Divider
                notchWidth="64px"
                notchHeight="8px"
                collapsed={!animVisible}
                collapseDelay={600}
              />
              <span className={styles.indexLabel} data-visible={animVisible}>
                Work
              </span>
            </div>
            <Heading
              level={2}
              as="h2"
              className={styles.title}
              data-visible={animVisible}
              id={`${id}-heading`}
            >
              Here are some of my top projects
            </Heading>
            <Text className={styles.lede} data-visible={animVisible} as="p">
              Each one is a slice of real production engineering—open a case study to see the
              problem, how we solved it, and the stack behind it. If you want depth, you are in the
              right place.
            </Text>
          </div>
        )}
      </Transition>
    </Section>
  );
}
