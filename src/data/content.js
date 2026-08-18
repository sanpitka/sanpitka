/**
 * ALL user-visible text for the site lives here, in both languages.
 * Components read from this file and contain no copy of their own — so to change
 * wording, add a project, or reorder anything, you only edit this file.
 *
 * Image paths are relative to public/ (no leading slash) — asset() adds the base.
 *
 * Per-project `tech` lists come from the repos' actual language breakdowns.
 *
 * TODO (Sanna): three things need your eyes.
 *   1. Python is listed under skills because it is 63% of SmartCanvas — but your
 *      role there was UI implementation and user tests. If you did not actually
 *      work in the Python backend, drop it. Never overclaim on your own CV.
 *   2. The iXBRL project has no `tech` list because the repo is private and I
 *      have no data for it. Add one if you want it shown.
 *   3. The Finnish copy is a faithful translation, but the voice is yours —
 *      expect to rewrite it in your own words.
 */

export const content = {
  en: {
    meta: {
      skipToContent: 'Skip to content',
    },

    nav: {
      brand: 'Sanna Pitkänen',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
    },

    langToggle: {
      label: 'Switch language to Finnish',
      short: 'FI',
      long: 'Suomeksi',
    },

    hero: {
      eyebrow: 'Oulu, Finland · she/her',
      name: 'Sanna Pitkänen',
      tagline: 'Community educator and musician turned software developer.',
      intro:
        'I build interfaces for people who are not developers. Two careers in teaching and music taught me how to read a room and explain hard things simply — I now bring that to UI design, frontend work and user research.',
      ctaProjects: 'See my projects',
      ctaContact: 'Get in touch',
      portrait: {
        src: 'portrait.svg',
        alt: 'Portrait of Sanna Pitkänen',
      },
      facts: [
        { value: 'MSc', label: 'Information Processing Sciences' },
        { value: '3.5 yrs', label: 'for both BSc and MSc' },
        { value: '3', label: 'careers, so far' },
      ],
    },

    about: {
      heading: 'Why coding?',
      paragraphs: [
        'It is 2021. I have just come back from maternity leave — and nobody is there. Covid lockdowns had closed the early childhood music groups and family clubs I used to lead. My days went into filming videos for client families (fun, though I suspected only the grandparents watched) and sitting behind a window in case someone showed up to talk. Nobody ever did.',
        'So I took an Open University course to stop my brain from melting. It was genuinely fun, so I took another, and another — until I noticed I had completed enough to walk into university through the Open University route. I took it, and I have not regretted it once. Both degrees took me three and a half years, with very good grades: I love learning, and it turns out I am good at it.',
      ],
      educationHeading: 'Education',
      education: [
        {
          years: '2022–2025',
          title: 'MSc, Information Processing Sciences',
          org: 'University of Oulu',
          note: 'BSc and MSc in 3.5 years, entered via the Open University route',
        },
        {
          years: '2012–2015',
          title: 'Musician',
          org: 'Oulu Conservatory',
        },
        {
          years: '2008–2011',
          title: 'Community educator',
          org: 'Centria University of Applied Sciences',
        },
      ],
      asideHeading: 'Away from the keyboard',
      interests: [
        'Handcrafts',
        'Scouts leader',
        'Languages',
        'Orienteering',
        'The Legend of Zelda',
      ],
    },

    skills: {
      heading: 'What I do',
      intro:
        'Three project teams, two earlier careers, and a habit of asking who actually has to use this.',
      groups: [
        {
          title: 'Frontend & code',
          items: [
            'JavaScript',
            'TypeScript',
            'Vue',
            'Python',
            'HTML & CSS',
            'Git & GitHub',
          ],
        },
        {
          title: 'Design',
          items: [
            'UI design',
            'Graphic design',
            'Accessibility',
            'Prototyping',
          ],
        },
        {
          title: 'Research & people',
          items: [
            'User testing',
            'Project management',
            'Teaching & facilitation',
            'Teamwork',
          ],
        },
      ],
    },

    projects: {
      heading: 'Projects',
      intro: 'Three teams, three very different sets of users.',
      hint: 'Swipe, or use the arrows and dots below',
      privateLabel: 'Private repository',
      roleLabel: 'My role',
      techLabel: 'Built with',
      prev: 'Previous project',
      next: 'Next project',
      dotLabel: (n, title) => `Go to project ${n}: ${title}`,
      slideLabel: (n, total, title) => `${n} of ${total}: ${title}`,
      status: (n, total, title) => `Project ${n} of ${total}: ${title}`,
      items: [
        {
          id: 'ledrama',
          title: 'Ledrama GUI',
          year: '2024',
          context: "Bachelor's project",
          client: 'Vector-Suomen verkkopeliyhdistys ry',
          role: 'Project manager, graphic design, frontend implementation',
          blurb:
            'A team of five built a graphical interface for configuring and controlling LED pipes at the Vectorama gaming event. I led the project and designed and implemented the frontend — the operators needed to reprogram lighting live, mid-event, without touching code.',
          tags: ['Frontend', 'UI design', 'Project management', 'Team of 5'],
          tech: ['JavaScript', 'Vue', 'HTML & CSS'],
          image: {
            src: 'projects/ledrama.svg',
            alt: 'Placeholder image for the Ledrama GUI project',
          },
          links: [
            {
              label: 'GitHub',
              href: 'https://github.com/sanpitka/Ledrama',
              icon: 'github-icon',
            },
          ],
        },
        {
          id: 'smartcanvas',
          title: 'SmartCanvas',
          year: '2025',
          context: "Master's project",
          client: 'INTERACT research unit, University of Oulu',
          role: 'UI design and implementation, user tests',
          blurb:
            'Our team of seven was the tenth group to work on the multi-year SmartCanvas project. We untangled the spaghetti code left by earlier years and pushed the interface toward something more intuitive and language-free. We also built local filters celebrating Oulu as European Capital of Culture 2026.',
          tags: ['UI design', 'User testing', 'Refactoring', 'Team of 7'],
          tech: ['Python', 'TypeScript', 'CSS', 'GLSL'],
          image: {
            src: 'projects/smartcanvas.svg',
            alt: 'Placeholder image for the SmartCanvas project',
          },
          links: [
            {
              label: 'GitHub',
              href: 'https://github.com/sanpitka/SmartCanvas',
              icon: 'github-icon',
            },
          ],
        },
        {
          id: 'ixbrl',
          title: 'iXBRL reporting tool',
          year: '2026',
          context: 'Ongoing, with my brother',
          client: 'Independent project',
          role: 'Design and development',
          blurb:
            'My brother and I are building a multifunctional tool for preparing financial statements in iXBRL format. A domain where the rules are strict, the documents are long, and the people filing them are accountants rather than engineers.',
          tags: ['iXBRL', 'Financial reporting', 'In progress'],
          image: {
            src: 'projects/ixbrl.svg',
            alt: 'Placeholder image for the iXBRL reporting tool project',
          },
          private: true,
          links: [],
        },
      ],
    },

    contact: {
      heading: "Let's talk",
      body: 'Looking for someone who can design an interface, build it, and then sit down with the people who have to use it? Get in touch.',
      links: [
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/sanna-pitk%C3%A4nen-92782a256/',
          icon: 'linkedin-icon',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/sanpitka',
          icon: 'github-icon',
        },
      ],
    },

    footer: {
      credit: 'Built with React and far too much care for a one-page site.',
      copyright: '© 2026 Sanna Pitkänen',
    },
  },

  fi: {
    meta: {
      skipToContent: 'Siirry sisältöön',
    },

    nav: {
      brand: 'Sanna Pitkänen',
      about: 'Minusta',
      skills: 'Osaaminen',
      projects: 'Projektit',
      contact: 'Yhteystiedot',
      menuOpen: 'Avaa valikko',
      menuClose: 'Sulje valikko',
    },

    langToggle: {
      label: 'Vaihda kieli englanniksi',
      short: 'EN',
      long: 'In English',
    },

    hero: {
      eyebrow: 'Oulu · hän',
      name: 'Sanna Pitkänen',
      tagline: 'Yhteisöpedagogi ja muusikko, josta tuli ohjelmistokehittäjä.',
      intro:
        'Teen käyttöliittymiä ihmisille, jotka eivät ole kehittäjiä. Kaksi aiempaa uraa opetuksen ja musiikin parissa opettivat minut lukemaan tilanteita ja selittämään vaikeat asiat yksinkertaisesti — sen tuon nyt käyttöliittymäsuunnitteluun, frontend-työhön ja käyttäjätutkimukseen.',
      ctaProjects: 'Katso projektini',
      ctaContact: 'Ota yhteyttä',
      portrait: {
        src: 'portrait.svg',
        alt: 'Sanna Pitkäsen kuva',
      },
      facts: [
        { value: 'FM', label: 'tietojenkäsittelytiede' },
        { value: '3,5 v', label: 'sekä kandi että maisteri' },
        { value: '3', label: 'uraa tähän mennessä' },
      ],
    },

    about: {
      heading: 'Miksi koodaaminen?',
      paragraphs: [
        'On vuosi 2021. Olen juuri palannut äitiysvapaalta — eikä paikalla ole ketään. Koronasulut olivat sulkeneet musiikkileikkikoulut ja perhekerhot, joita olin ohjannut. Päiväni kuluivat videoiden kuvaamiseen asiakasperheille (mikä oli hauskaa, vaikka epäilin että vain isovanhemmat niitä katsoivat) ja ikkunan takana istumiseen siltä varalta, että joku tulisi juttelemaan. Kukaan ei koskaan tullut.',
        'Niinpä ilmoittautuin avoimen yliopiston kurssille, ettei aivoni sulaisi. Se oli aidosti hauskaa, joten otin toisen, ja vielä yhden — kunnes huomasin suorittaneeni tarpeeksi päästäkseni yliopistoon avoimen väylän kautta. Tartuin tilaisuuteen enkä ole katunut hetkeäkään. Molemmat tutkinnot kestivät minulta kolme ja puoli vuotta, ja arvosanat olivat kiitettäviä: rakastan oppimista, ja ilmeisesti olen siinä hyvä.',
      ],
      educationHeading: 'Koulutus',
      education: [
        {
          years: '2022–2025',
          title: 'FM, tietojenkäsittelytiede',
          org: 'Oulun yliopisto',
          note: 'Kandi ja maisteri 3,5 vuodessa, sisään avoimen väylän kautta',
        },
        {
          years: '2012–2015',
          title: 'Muusikko',
          org: 'Oulun konservatorio',
        },
        {
          years: '2008–2011',
          title: 'Yhteisöpedagogi',
          org: 'Centria-ammattikorkeakoulu',
        },
      ],
      asideHeading: 'Näppäimistön ulkopuolella',
      interests: [
        'Käsityöt',
        'Partiojohtaja',
        'Kielet',
        'Suunnistus',
        'The Legend of Zelda',
      ],
    },

    skills: {
      heading: 'Mitä teen',
      intro:
        'Kolme projektitiimiä, kaksi aiempaa uraa ja tapa kysyä, kenen tätä oikeasti pitää käyttää.',
      groups: [
        {
          title: 'Frontend ja koodi',
          items: [
            'JavaScript',
            'TypeScript',
            'Vue',
            'Python',
            'HTML ja CSS',
            'Git ja GitHub',
          ],
        },
        {
          title: 'Suunnittelu',
          items: [
            'Käyttöliittymäsuunnittelu',
            'Graafinen suunnittelu',
            'Saavutettavuus',
            'Prototypointi',
          ],
        },
        {
          title: 'Tutkimus ja ihmiset',
          items: [
            'Käyttäjätestaus',
            'Projektinhallinta',
            'Opetus ja ohjaus',
            'Tiimityö',
          ],
        },
      ],
    },

    projects: {
      heading: 'Projektit',
      intro: 'Kolme tiimiä, kolme hyvin erilaista käyttäjäkuntaa.',
      hint: 'Pyyhkäise, tai käytä nuolia ja pisteitä alla',
      privateLabel: 'Yksityinen repositorio',
      roleLabel: 'Roolini',
      techLabel: 'Teknologiat',
      prev: 'Edellinen projekti',
      next: 'Seuraava projekti',
      dotLabel: (n, title) => `Siirry projektiin ${n}: ${title}`,
      slideLabel: (n, total, title) => `${n} / ${total}: ${title}`,
      status: (n, total, title) => `Projekti ${n} / ${total}: ${title}`,
      items: [
        {
          id: 'ledrama',
          title: 'Ledrama GUI',
          year: '2024',
          context: 'Kandidaatintyön projekti',
          client: 'Vector-Suomen verkkopeliyhdistys ry',
          role: 'Projektipäällikkö, graafinen suunnittelu, frontendin toteutus',
          blurb:
            'Viiden hengen tiimimme rakensi graafisen käyttöliittymän LED-putkien konfigurointiin ja ohjaamiseen Vectorama-tapahtumassa. Vetin projektin sekä suunnittelin ja toteutin frontendin — operaattoreiden oli pystyttävä ohjelmoimaan valot uudelleen kesken tapahtuman ilman koodiin koskemista.',
          tags: [
            'Frontend',
            'Käyttöliittymäsuunnittelu',
            'Projektinhallinta',
            '5 hengen tiimi',
          ],
          tech: ['JavaScript', 'Vue', 'HTML ja CSS'],
          image: {
            src: 'projects/ledrama.svg',
            alt: 'Paikanpitäjäkuva Ledrama GUI -projektille',
          },
          links: [
            {
              label: 'GitHub',
              href: 'https://github.com/sanpitka/Ledrama',
              icon: 'github-icon',
            },
          ],
        },
        {
          id: 'smartcanvas',
          title: 'SmartCanvas',
          year: '2025',
          context: 'Maisterivaiheen projekti',
          client: 'INTERACT-tutkimusyksikkö, Oulun yliopisto',
          role: 'Käyttöliittymän suunnittelu ja toteutus, käyttäjätestit',
          blurb:
            'Seitsemän hengen tiimimme oli kymmenes ryhmä monivuotisessa SmartCanvas-projektissa. Selvitimme aiempien vuosien aikana kasautunutta spagettikoodia ja veimme käyttöliittymää intuitiivisempaan ja kielettömään suuntaan. Teimme myös paikallisia suodattimia Oulun kulttuuripääkaupunkivuodelle 2026.',
          tags: [
            'Käyttöliittymäsuunnittelu',
            'Käyttäjätestaus',
            'Refaktorointi',
            '7 hengen tiimi',
          ],
          tech: ['Python', 'TypeScript', 'CSS', 'GLSL'],
          image: {
            src: 'projects/smartcanvas.svg',
            alt: 'Paikanpitäjäkuva SmartCanvas-projektille',
          },
          links: [
            {
              label: 'GitHub',
              href: 'https://github.com/sanpitka/SmartCanvas',
              icon: 'github-icon',
            },
          ],
        },
        {
          id: 'ixbrl',
          title: 'iXBRL-raportointityökalu',
          year: '2026',
          context: 'Käynnissä, veljeni kanssa',
          client: 'Oma projekti',
          role: 'Suunnittelu ja kehitys',
          blurb:
            'Veljeni ja minä kehitämme monipuolista työkalua tilinpäätösten laatimiseen iXBRL-muodossa. Toimiala, jossa säännöt ovat tiukat, dokumentit pitkiä ja tekijät kirjanpitäjiä eivät insinöörejä.',
          tags: ['iXBRL', 'Tilinpäätösraportointi', 'Kehityksessä'],
          image: {
            src: 'projects/ixbrl.svg',
            alt: 'Paikanpitäjäkuva iXBRL-raportointityökalulle',
          },
          private: true,
          links: [],
        },
      ],
    },

    contact: {
      heading: 'Jutellaan',
      body: 'Etsitkö jotakuta, joka osaa suunnitella käyttöliittymän, toteuttaa sen ja sitten istua alas niiden ihmisten kanssa, joiden sitä pitää käyttää? Ota yhteyttä.',
      links: [
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/sanna-pitk%C3%A4nen-92782a256/',
          icon: 'linkedin-icon',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/sanpitka',
          icon: 'github-icon',
        },
      ],
    },

    footer: {
      credit:
        'Tehty Reactilla ja aivan liiallisella huolellisuudella yhden sivun sivustoa varten.',
      copyright: '© 2026 Sanna Pitkänen',
    },
  },
}

export const languages = ['en', 'fi']
