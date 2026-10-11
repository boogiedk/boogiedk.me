import React from 'react';
import { Profile } from './components/Profile';
import { Section } from './components/Section';
import { Timeline } from './components/Timeline';
import { resume } from './content/resume';

function App() {
  return (
    <main className="page">
      <Profile
        name={resume.name}
        role={resume.role}
        facts={resume.facts}
        summary={resume.summary}
        email={resume.email}
        links={resume.links}
      />
      <div className="page__content">
        <Section title="Experience">
          <Timeline entries={resume.experience} />
        </Section>
        <Section title="Education">
          <Timeline entries={resume.education} />
        </Section>
        <footer className="page__footer">© {new Date().getFullYear()} boogiedk.me</footer>
      </div>
    </main>
  );
}

export default App;
