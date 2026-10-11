export interface Link {
  label: string;
  href: string;
}

// Kept in two parts so the full address never appears in the bundle as plain text.
export interface EmailAddress {
  user: string;
  domain: string;
}

export interface Highlight {
  title: string;
  text: string;
}

export interface TimelineEntry {
  period: string;
  title: string;
  org?: Link;
  subtitle?: string;
  summary?: string;
  highlights?: Highlight[];
  tags?: string[];
}

export interface Resume {
  name: string;
  role: string;
  facts: string[];
  summary: string;
  email: EmailAddress;
  links: Link[];
  experience: TimelineEntry[];
  education: TimelineEntry[];
  // Not shown on the page; only goes into the no-JavaScript copy (see scripts/inject-static-resume.js).
  skills: string[];
  languages: string[];
}
