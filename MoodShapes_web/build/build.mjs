// Render PRIVACY.md and EULA.md → privacy.html / eula.html
// Usage: npm install && npm run build
//
// The .md files in the repo root are the single source of truth for legal
// content. This script wraps each H2 section in <section id="sN">, builds a
// TOC, transforms blockquotes into themed callouts (.warn / .danger), wraps
// tables in .table-wrap, and slots the result into template.html.

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', '..');
const OUT = join(__dirname, '..');
const TEMPLATE = readFileSync(join(__dirname, 'template.html'), 'utf8');

const PAGES = [
  {
    src: 'PRIVACY.md',
    out: 'privacy.html',
    title: 'Privacy Policy — MoodShapes',
    description:
      'The MoodShapes privacy policy. Your moods stay on your device. Anonymous analytics only. No accounts, no personal data sold.',
    kicker: 'Privacy Policy',
    h1: 'Your moods stay <span class="gradient-em">on your phone</span>.',
    lede:
      'MoodShapes is built to be a quiet place for your moods — not a way to harvest them. Your entries never leave your device; only minimal anonymous analytics ever do.',
    nav: 'privacy',
    tldr: [
      ['green', 'On‑device', 'moods, notes, photos, test answers'],
      ['blue', 'Anonymous', 'product analytics only (PostHog EU)'],
      ['lav', 'No&nbsp;sale', 'no ads, no data sale, no tracking'],
    ],
    pair: {
      href: 'eula.html',
      tag: 'Read next',
      title: 'End‑User License Agreement →',
      desc: 'Terms of use, subscriptions, disclaimers, and the “not a medical device” bargain.',
    },
    footer: { other: 'eula.html', otherLabel: 'EULA' },
  },
  {
    src: 'EULA.md',
    out: 'eula.html',
    title: 'EULA & Terms of Use — MoodShapes',
    description:
      'The MoodShapes End-User License Agreement. The terms of use, subscriptions, disclaimers, and not-a-medical-device bargain you accept by using the app.',
    kicker: 'End‑User License Agreement',
    h1: 'The terms <span class="gradient-em">behind the shapes</span>.',
    lede:
      "A binding contract between you and the developer when you install or use MoodShapes. The short version: it's a self‑help tool, not a medical device, you keep your data, and you accept the limits of an app you got for very little money.",
    nav: 'eula',
    tldr: [
      ['green', 'Self‑help', 'not a medical or diagnostic device'],
      ['blue', 'Apple‑sold', 'subscriptions billed and refunded by Apple'],
      ['lav', 'As&nbsp;is', 'no warranties, capped liability, your risk'],
    ],
    pair: {
      href: 'privacy.html',
      tag: 'Read also',
      title: 'Privacy Policy →',
      desc: "What stays on your device, what doesn't, and how analytics work.",
    },
    footer: { other: 'privacy.html', otherLabel: 'Privacy' },
  },
];

marked.setOptions({ gfm: true, breaks: false });

// --- Helpers ---

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function fmtDate(s) {
  if (!s) return '';
  const [y, m, d] = s.split('-');
  return `${parseInt(d, 10)} ${MONTHS[parseInt(m, 10) - 1]} ${y}`;
}

function extractDates(md) {
  const eff = md.match(/\*\*Effective date:\*\*\s*([0-9-]+)/);
  const upd = md.match(/\*\*Last updated:\*\*\s*([0-9-]+)/);
  return { effective: eff?.[1] ?? '', updated: upd?.[1] ?? '' };
}

// Strip top YAML-ish frontmatter line ("# Privacy Policy" / "# End-User...") so
// the rendered article does not duplicate the page <h1>.
function stripLeadingH1(md) {
  return md.replace(/^#\s+[^\n]+\n+/, '');
}

// Strip the trailing standalone "---" lines: they create redundant <hr>
// between sections that already have a top border.
function stripHorizontalRules(html) {
  return html.replace(/<hr\s*\/?>\s*/g, '');
}

// Wrap GFM tables in .table-wrap for horizontal scrolling on mobile.
function wrapTables(html) {
  return html.replace(/<table>([\s\S]*?)<\/table>/g, (m) => `<div class="table-wrap">${m}</div>`);
}

// Convert <blockquote>…</blockquote> → <div class="callout […]">…</div>.
// Picks .danger / .warn based on keywords in the quote body.
function transformBlockquotes(html) {
  return html.replace(/<blockquote>([\s\S]*?)<\/blockquote>/g, (_, inner) => {
    const lower = inner.toLowerCase();
    let cls = 'callout';
    if (
      lower.includes('not a medical device') ||
      lower.includes('does not provide emergency')
    ) {
      cls += ' danger';
    } else if (
      lower.includes('important.') ||
      lower.includes('read carefully')
    ) {
      cls += ' warn';
    }
    return `<div class="${cls}">${inner.trim()}</div>`;
  });
}

// Wrap each H2 (and its content up to the next H2) in <section id="sN">,
// prepend a <span class="section-tag">Section N</span>, and strip the
// leading "N. " prefix from the H2 text to avoid number duplication.
// Returns { html, toc }.
function sectionize(html) {
  const intro = [];
  const sections = [];
  const re = /<h2[^>]*>([\s\S]*?)<\/h2>/g;

  // Collect H2 positions
  const positions = [];
  let m;
  while ((m = re.exec(html)) !== null) {
    positions.push({ start: m.index, end: re.lastIndex, raw: m[0], text: m[1] });
  }

  if (positions.length === 0) return { html, toc: '' };

  intro.push(html.slice(0, positions[0].start));

  for (let i = 0; i < positions.length; i++) {
    const p = positions[i];
    const next = positions[i + 1];
    const bodyStart = p.end;
    const bodyEnd = next ? next.start : html.length;
    const cleanText = p.text.replace(/^\s*\d+\.\s*/, '').trim();
    const heading = `<h2>${cleanText}</h2>`;
    const tag = `<span class="section-tag">Section ${i + 1}</span>`;
    const body = html.slice(bodyStart, bodyEnd);
    sections.push({
      id: `s${i + 1}`,
      label: cleanText.replace(/\.$/, ''),
      html: `<section id="s${i + 1}">${tag}${heading}${body}</section>`,
    });
  }

  const tocHtml = sections
    .map((s) => `        <li><a href="#${s.id}">${s.label}</a></li>`)
    .join('\n');

  return {
    html: intro.join('') + sections.map((s) => s.html).join('\n'),
    toc: tocHtml,
  };
}

function tldrHtml(items) {
  return items
    .map(
      ([cls, num, lab]) =>
        `      <div class="tldr-card ${cls}"><div class="num">${num}</div><div class="lab">${lab}</div></div>`,
    )
    .join('\n');
}

function pairHtml(pair) {
  return `      <a href="${pair.href}">
        <span class="pair-tag">${pair.tag}</span>
        <span class="pair-title">${pair.title}</span>
        <span class="pair-desc">${pair.desc}</span>
      </a>
      <a href="index.html">
        <span class="pair-tag">Back to</span>
        <span class="pair-title">MoodShapes home ←</span>
        <span class="pair-desc">Five shapes, your inner weather, the App Store link.</span>
      </a>`;
}

function navLinksHtml(current) {
  const link = (href, label, key) =>
    `        <a href="${href}"${current === key ? ' class="is-current"' : ''}>${label}</a>`;
  return [
    link('index.html#features', 'Features', ''),
    link('index.html#moods', 'Moods', ''),
    link('privacy.html', 'Privacy', 'privacy'),
    link('eula.html', 'EULA', 'eula'),
  ].join('\n');
}

// --- Main ---

for (const p of PAGES) {
  const md = readFileSync(join(ROOT, p.src), 'utf8');
  const dates = extractDates(md);
  const cleanMd = stripLeadingH1(md);

  let html = marked.parse(cleanMd);
  html = stripHorizontalRules(html);
  html = wrapTables(html);
  html = transformBlockquotes(html);

  const { html: bodyHtml, toc } = sectionize(html);

  const filled = TEMPLATE
    .replaceAll('{{title}}', p.title)
    .replaceAll('{{description}}', p.description)
    .replaceAll('{{kicker}}', p.kicker)
    .replaceAll('{{h1}}', p.h1)
    .replaceAll('{{lede}}', p.lede)
    .replaceAll(
      '{{meta}}',
      `Effective ${fmtDate(dates.effective)} · Last updated ${fmtDate(dates.updated)}`,
    )
    .replaceAll('{{tldr}}', tldrHtml(p.tldr))
    .replaceAll('{{toc}}', toc)
    .replaceAll('{{body}}', bodyHtml)
    .replaceAll('{{legal_pair}}', pairHtml(p.pair))
    .replaceAll('{{nav_links}}', navLinksHtml(p.nav))
    .replaceAll('{{footer_other}}', p.footer.other)
    .replaceAll('{{footer_other_label}}', p.footer.otherLabel);

  writeFileSync(join(OUT, p.out), filled);
  console.log(`✓ ${p.src}  →  ${p.out}`);
}
