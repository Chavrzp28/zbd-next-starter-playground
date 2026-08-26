import Head from 'next/head';
import { useEffect, useState } from 'react';

import styles from '@/styles/Home.module.css';
import { SocialHeadTags } from '@/components/social-head-tags';

const projects = [
  {
    number: '01',
    title: 'Arc / Financial clarity',
    category: 'Product design · 2025',
    description:
      'A calmer way to understand money. I led the product direction, information architecture, and visual system for a personal finance platform.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85',
    className: 'projectLarge',
  },
  {
    number: '02',
    title: 'Forma / Brand in motion',
    category: 'Identity · 2024',
    description:
      'A flexible identity for a studio making tools for modern teams, built around a simple idea: structure should never feel rigid.',
    image:
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1400&q=85',
    className: 'projectTall',
  },
  {
    number: '03',
    title: 'Noma / Digital home',
    category: 'Web design · 2024',
    description:
      'An editorial commerce experience for an independent interiors label, balancing tactile imagery with a precise browsing system.',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85',
    className: 'projectWide',
  },
];

const services = [
  ['01', 'Product design', 'From first sketch to shipped interface.'],
  ['02', 'Visual identity', 'Distinctive systems that stay useful.'],
  ['03', 'Web experiences', 'Editorial, expressive, and fast.'],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add(styles.visible);
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(`.${styles.reveal}`).forEach((element) => reveal.observe(element));
    return () => reveal.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Alex Morgan — Independent Designer</title>
        <meta
          name="description"
          content="Independent designer crafting thoughtful digital products, identities, and web experiences."
        />
        <SocialHeadTags
          title="Alex Morgan — Independent Designer"
          description="Independent designer crafting thoughtful digital products, identities, and web experiences."
          image="https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=80"
          url="https://nextjs.zbd.dev"
        />
      </Head>

      <main className={styles.main}>
        <nav className={styles.nav} aria-label="Primary navigation">
          <a className={styles.wordmark} href="#top" aria-label="Alex Morgan home">
            AM<span>.</span>
          </a>
          <div className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}>
            <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
          <a className={styles.availability} href="#contact">
            <span /> Available for select projects
          </a>
          <button
            className={styles.menuButton}
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </nav>

        <section className={styles.hero} id="top">
          <div className={styles.heroEyebrow}>
            <span>Independent designer</span>
            <span>New York · Remote</span>
          </div>
          <h1 className={styles.heroTitle}>
            I make digital things <em>feel</em> inevitable.
          </h1>
          <div className={styles.heroBottom}>
            <p>
              Strategy, product design, and visual identities for teams building what comes next.
            </p>
            <a href="#work" className={styles.scrollLink}>
              <span>Scroll to explore</span>
              <span className={styles.arrow}>↓</span>
            </a>
          </div>
          <div className={styles.heroOrb} aria-hidden="true" />
        </section>

        <section className={styles.work} id="work">
          <div className={`${styles.sectionHeader} ${styles.reveal}`}>
            <p className={styles.kicker}>Selected work</p>
            <p className={styles.sectionNote}>A small selection of recent collaborations.</p>
          </div>

          <div className={styles.projectGrid}>
            {projects.map((project, index) => (
              <article
                key={project.number}
                className={`${styles.project} ${styles[project.className]} ${styles.reveal}`}
                style={{ '--delay': `${index * 90}ms` }}
                onClick={() => setActiveProject(project)}
              >
                <div className={styles.projectImageWrap}>
                  <div
                    className={styles.projectImage}
                    style={{ backgroundImage: `url(${project.image})` }}
                    role="img"
                    aria-label={`${project.title} project preview`}
                  />
                  <span className={styles.projectView}>View case study ↗</span>
                </div>
                <div className={styles.projectMeta}>
                  <div>
                    <span className={styles.projectNumber}>{project.number}</span>
                    <h2>{project.title}</h2>
                  </div>
                  <p>{project.category}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.intro} ${styles.reveal}`} id="about">
          <p className={styles.kicker}>A little about me</p>
          <div className={styles.introCopy}>
            <h2>
              Design is the space between <span>what works</span> and what people love to use.
            </h2>
            <div className={styles.introAside}>
              <p>
                I&apos;m Alex, an independent designer with 9+ years shaping products, brands, and experiences for ambitious teams. I care about clear thinking, generous details, and making complex ideas feel obvious.
              </p>
              <a href="#contact" className={styles.textLink}>More about me <span>↗</span></a>
            </div>
          </div>
        </section>

        <section className={`${styles.services} ${styles.reveal}`}>
          <div className={styles.sectionHeader}>
            <p className={styles.kicker}>What I do</p>
            <p className={styles.sectionNote}>A focused practice, not a menu of everything.</p>
          </div>
          <div className={styles.serviceList}>
            {services.map(([number, title, copy]) => (
              <div className={styles.service} key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
                <span className={styles.serviceArrow}>↗</span>
              </div>
            ))}
          </div>
        </section>

        <section className={`${styles.statement} ${styles.reveal}`}>
          <span className={styles.statementMark}>“</span>
          <p>
            The best work doesn&apos;t announce itself. It makes the next step feel like the only step.
          </p>
        </section>

        <footer className={styles.footer} id="contact">
          <div className={styles.footerTop}>
            <p className={styles.kicker}>Have a good one in mind?</p>
            <a className={styles.email} href="mailto:hello@alexmorgan.design">
              Let&apos;s make it real <span>↗</span>
            </a>
          </div>
          <div className={styles.footerBottom}>
            <span>© 2026 Alex Morgan</span>
            <div>
              <a href="#top">Back to top ↑</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://www.are.na" target="_blank" rel="noreferrer">Are.na</a>
            </div>
          </div>
        </footer>
      </main>

      {activeProject && (
        <div className={styles.modalBackdrop} role="presentation" onClick={() => setActiveProject(null)}>
          <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="case-study-title" onClick={(event) => event.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setActiveProject(null)} aria-label="Close case study">×</button>
            <div className={styles.modalImage} style={{ backgroundImage: `url(${activeProject.image})` }} />
            <div className={styles.modalContent}>
              <span>{activeProject.category}</span>
              <h2 id="case-study-title">{activeProject.title}</h2>
              <p>{activeProject.description}</p>
              <div className={styles.modalDetails}>
                <span>Role <b>Design lead</b></span>
                <span>Scope <b>Strategy · UI · Brand</b></span>
                <span>Year <b>2024—25</b></span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
