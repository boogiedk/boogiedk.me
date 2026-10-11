import React from 'react';
import { EmailAddress, Link } from '../types/resume';
import { EmailLink } from './EmailLink';
import { ExternalLink } from './ExternalLink';
import './Profile.css';

interface ProfileProps {
  name: string;
  role: string;
  facts?: string[];
  summary?: string;
  email?: EmailAddress;
  links?: Link[];
}

export function Profile({ name, role, facts = [], summary, email, links = [] }: ProfileProps) {
  return (
    <header className="profile">
      <h1 className="profile__name">{name}</h1>
      <p className="profile__role">{role}</p>
      {facts.length > 0 && <p className="profile__facts">{facts.join(' · ')}</p>}
      {summary && <p className="profile__summary">{summary}</p>}
      {(email || links.length > 0) && (
        <ul className="profile__links">
          {email && (
            <li>
              <EmailLink {...email} />
            </li>
          )}
          {links.map((link) => (
            <li key={link.href}>
              <ExternalLink {...link} />
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
