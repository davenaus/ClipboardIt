import React from 'react';
import { BlogPost } from '../types';

const ArticleWorkflow: React.FC<{ workflow: BlogPost['workflow'] }> = ({ workflow }) => {
  return (
    <figure className="article-workflow">
      <figcaption>{workflow.title}</figcaption>
      <ol>{workflow.steps.map(([title, detail], index) => (
        <li key={title}>
          <span className="workflow-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
          <strong>{title}</strong>
          <span>{detail}</span>
        </li>
      ))}</ol>
    </figure>
  );
};

export default ArticleWorkflow;
