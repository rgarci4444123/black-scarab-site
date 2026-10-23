import content from '@/data/nvidia-robot-guide/body.json';
import type diagrams from '@/data/nvidia-robot-guide/diagrams.json';
import RobotDiagram from './diagrams';
import styles from './guide.module.css';

type Block =
  | {type: 'paragraph' | 'heading'; text: string}
  | {type: 'image'; name: keyof typeof diagrams}
  | {type: 'list'; items: string[]}
  | {type: 'table'; headers: string[]; rows: string[][]}
  | {type: 'rule'};
type Section = {id: string; heading: string; blocks: Block[]};

function Inline({text}: {text: string}) {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={index}>{part.slice(2, -2)}</strong>;
    if (part.startsWith('*') && part.endsWith('*')) return <em key={index}>{part.slice(1, -1)}</em>;
    return part;
  });
}

export default function RobotGuideBody({sectionId}: {sectionId: string}) {
  const section = (content.sections as Section[]).find(section => section.id === sectionId);
  if (!section) return null;
  return <div className={styles.guideCopy}>{section.blocks.map((block, index) => {
    if (block.type === 'paragraph') return <p key={index}><Inline text={block.text} /></p>;
    if (block.type === 'heading') return <h3 key={index}>{block.text}</h3>;
    if (block.type === 'image') return <RobotDiagram key={index} name={block.name} />;
    if (block.type === 'list') return <ul key={index}>{block.items.map((item, i) => <li key={i}><Inline text={item} /></li>)}</ul>;
    if (block.type === 'table') return <div className={styles.guideTableWrap} key={index}><table className={styles.guideTable}><thead><tr>{block.headers.map(header => <th key={header} scope="col">{header}</th>)}</tr></thead><tbody>{block.rows.map((row, r) => <tr key={r}>{row.map((cell, c) => <td key={c}><Inline text={cell} /></td>)}</tr>)}</tbody></table></div>;
    if (block.type === 'rule') return <hr key={index} />;
    return null;
  })}</div>;
}
