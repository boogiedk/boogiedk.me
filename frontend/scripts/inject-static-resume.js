// Runs after the production build and puts a plain HTML copy of the resume
// into build/index.html inside <noscript>.
//
// The page is rendered by JavaScript, so a client that does not run scripts
// (an AI assistant that was given the link, a text browser) would otherwise get
// an empty document. Regular visitors never see this copy. It also carries the
// skills and languages lists, which are not shown on the page itself.

const fs = require('fs');
const path = require('path');
const ts = require('typescript');

// Lets this script require the same TypeScript content file the app uses.
require.extensions['.ts'] = (module, filename) => {
  const { outputText } = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2019 },
  });
  module._compile(outputText, filename);
};

const { resume } = require('../src/content/resume.ts');

const INDEX_PATH = path.join(__dirname, '..', 'build', 'index.html');
const PLACEHOLDER = '<noscript>You need to enable JavaScript to run this app.</noscript>';

const escapeHtml = (text) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const tag = (name, text) => `<${name}>${escapeHtml(text)}</${name}>`;

const link = ({ label, href }) => `<a href="${escapeHtml(href)}">${escapeHtml(label)}</a>`;

function renderEntry({ period, title, org, subtitle, summary, highlights, tags }) {
  const heading = [title, org && org.label].filter(Boolean).join(', ');

  return [
    tag('h3', `${heading} (${period})`),
    subtitle && tag('p', subtitle),
    summary && tag('p', summary),
    highlights &&
      `<ul>${highlights.map(({ title, text }) => `<li><b>${escapeHtml(title)}.</b> ${escapeHtml(text)}</li>`).join('')}</ul>`,
    tags && tag('p', `Stack: ${tags.join(', ')}`),
  ]
    .filter(Boolean)
    .join('');
}

const staticResume = [
  tag('h1', resume.name),
  tag('p', [resume.role, ...resume.facts].join(' · ')),
  tag('p', resume.summary),
  `<p>${resume.links.map(link).join(', ')}</p>`,
  tag('h2', 'Skills'),
  tag('p', resume.skills.join(', ')),
  tag('h2', 'Languages'),
  tag('p', resume.languages.join(', ')),
  tag('h2', 'Experience'),
  ...resume.experience.map(renderEntry),
  tag('h2', 'Education'),
  ...resume.education.map(renderEntry),
].join('');

const html = fs.readFileSync(INDEX_PATH, 'utf8');

if (!html.includes(PLACEHOLDER)) {
  console.error(`inject-static-resume: <noscript> placeholder not found in ${INDEX_PATH}`);
  process.exit(1);
}

fs.writeFileSync(INDEX_PATH, html.replace(PLACEHOLDER, `<noscript><main class="page static">${staticResume}</main></noscript>`));
console.log('inject-static-resume: added the no-JavaScript copy of the resume to build/index.html');
