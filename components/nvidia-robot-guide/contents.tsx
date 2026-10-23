import article from '@/data/nvidia-robot-guide/article.json';
import styles from './guide.module.css';

export default function RobotGuideContents() {
  return <nav aria-label="Guide contents" className={styles.contents}>
    <p>IN THIS GUIDE</p>
    <ol>{article.sections.filter(section => section.heading).map(section => <li key={section.id}><a href={`#${section.id}`}>{section.heading}</a></li>)}<li><a href="#sources">Sources</a></li></ol>
  </nav>;
}
