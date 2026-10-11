import React from 'react';
import { Link } from '../types/resume';

export function ExternalLink({ label, href }: Link) {
  const opensNewTab = href.startsWith('http');

  return (
    <a href={href} {...(opensNewTab && { target: '_blank', rel: 'noopener noreferrer' })}>
      {label}
    </a>
  );
}
