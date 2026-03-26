import { classes } from '~/utils/style';
import styles from './tech-stack.module.css';

export function TechStack({ groups = [], className }) {
  return (
    <div className={classes(styles.stack, className)}>
      {groups.map(group => (
        <section className={styles.group} key={group.title}>
          <h3 className={styles.groupTitle}>{group.title}</h3>
          <ul className={styles.grid}>
            {group.items.map(item => {
              const Icon = item.icon;

              return (
                <li className={styles.badge} key={`${group.title}-${item.label}`}>
                  <span className={styles.iconWrap} aria-hidden>
                    <Icon className={styles.icon} />
                  </span>
                  <span className={styles.label}>{item.label}</span>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
