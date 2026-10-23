import Image from 'next/image';
import diagrams from '@/data/nvidia-robot-guide/diagrams.json';
import styles from './guide.module.css';

export default function RobotDiagram({name}: {name: keyof typeof diagrams}) {
  const diagram = diagrams[name];
  const original = `/article-images/nvidia-robot-guide/images/${diagram.asset}`;
  const src = `${original}?v=${diagram.revision}`;
  return <figure className={styles.lessonFigure} id={`diagram-${name}`} data-robot-diagram={name}>
    <h3 className="sr-only">{diagram.title}</h3>
    <a className={styles.lessonImageLink} href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size image: ${diagram.title}`}>
      <Image src={src} alt={diagram.description} width={diagram.width} height={diagram.height} sizes="(max-width: 600px) 100vw, 824px" unoptimized className={styles.lessonImage} />
    </a>
    <figcaption className={styles.lessonCaption}><span>{diagram.caption}</span><a href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size image: ${diagram.title}`}>Open full size</a></figcaption>
  </figure>;
}
