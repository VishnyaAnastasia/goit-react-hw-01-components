import styles from './Section.module.css';

export const Section = ({ children }) => {
  return <div className={styles.sectionStyle}>{children}</div>;
};
