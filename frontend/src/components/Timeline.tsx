import React from 'react';
import { TimelineEntry } from '../types/resume';
import { ExternalLink } from './ExternalLink';
import './Timeline.css';

interface TimelineProps {
  entries: TimelineEntry[];
}

export function Timeline({ entries }: TimelineProps) {
  return (
    <ol className="timeline">
      {entries.map((entry, index) => (
        <TimelineItem
          key={`${entry.period}-${entry.title}`}
          entry={entry}
          sameOrgAsPrevious={index > 0 && !!entry.org && entry.org.href === entries[index - 1].org?.href}
        />
      ))}
    </ol>
  );
}

interface TimelineItemProps {
  entry: TimelineEntry;
  // Consecutive roles at one company are drawn as a single block, without a divider.
  sameOrgAsPrevious: boolean;
}

function TimelineItem({ entry, sameOrgAsPrevious }: TimelineItemProps) {
  const { period, title, org, subtitle, summary, highlights, tags } = entry;

  return (
    <li className={sameOrgAsPrevious ? 'entry entry--continued' : 'entry'}>
      <p className="entry__period">{period}</p>
      <div className="entry__body">
        <h3 className="entry__title">
          {title}
          {org && (
            <span className="entry__org">
              <ExternalLink {...org} />
            </span>
          )}
        </h3>
        {subtitle && <p className="entry__subtitle">{subtitle}</p>}
        {summary && <p className="entry__summary">{summary}</p>}
        {highlights && (
          <ul className="entry__highlights">
            {highlights.map(({ title, text }) => (
              <li key={title}>
                <b>{title}.</b> {text}
              </li>
            ))}
          </ul>
        )}
        {tags && (
          <ul className="entry__tags">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}
