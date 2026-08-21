/**
 * ALL user-visible text for the site lives here, in both languages.
 */

export const content = {
  en: {
    meta: {
      skipToContent: 'Skip to content',
    },

    nav: {
      brand: 'Sanna Pitkänen',
      about: 'About me',
      projects: 'Projects',
      contact: 'Contact',
    },

    langToggle: {
      label: 'Switch language to Finnish',
      long: 'Suomeksi',
    },

    hero: {
      eyebrow: 'Portfolio',
      name: 'Sanna Pitkänen',
      tagline: 'Junior software developer',
      intro:
        'What do a software developer and a craftsperson have in common?\n' +
        'At the very least, the skill to listen to the client, pick the right tools, and make something that is actually needed.',
      ctaProjects: 'My projects',
      ctaContact: 'Get in touch',
      portrait: {
        src: 'portrait.jpg',
        alt: "Sanna Pitkänen smiling in front of a framed panel made from Vallila's Oulu fabric",
      }
    },

    about: {
      heading: 'About me',
      paragraphs: [
        'What will I be when I grow up? According to my little brother, a "celloist" – I had just been given my first instrument. ' +
        'I was thinking doctor, childminder or priest. In the end, an interest sparked by the school visits of my final upper-secondary year ' +
        'led me to study civic activities and youth work at a university of applied sciences. Through my summer jobs ' +
        'I also grew interested in music as a profession and applied to the Oulu Conservatory. I found work as a children’s instructor with a music focus, ' +
        'a job that combined both the education and the music side of my training.',
        '2021 was a time of change. I wandered onto the Open University’s pages looking for something meaningful to do ' +
        'as a counterweight to the inactivity the coronavirus pandemic had brought. That same inactivity and boredom also led me to ' +
        'join the Oulu chapter of Mensa Finland and to believe I might have what it takes to be a knowledge worker. ' +
        'Around the same time I joined the scouts and realised that educational work ' +
        'can also be done as a hobby in one’s free time, which frees up working hours for other interesting things. ' +
        'With those thoughts, I dared to enrol as a degree student. After graduating I have worked at the university ' +
        'on a project with the INTERACT research unit.',
        'What will I be when I grow up? Maybe a software developer, maybe a researcher! The options are open, ' +
        'the most important criterion being that the learning never stops.',
      ],
      educationHeading: 'Education',
      education: [
        {
          years: '2022–2025',
          title: 'BSc + MSc, Information Processing Science',
          org: 'University of Oulu',
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
    },

    projects: {
      heading: 'Projects',
      intro: 'The technical side of these projects can be seen on my GitHub.',
      privateLabel: 'Private repository',
      roleLabel: 'My role',
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
          role: 'Project manager, graphic design, frontend implementation, writing the user manual',
          blurb:
            'A friend of mine, active in the Vector gaming association, had advance word about one of the assignments on the bachelor’s project course: ' +
            'students would build a graphical interface for configuring and controlling LED light pipes driven by MQTT messages. ' +
            'She talked me into signing up for the project, and it was worth it. I landed the role of project manager in our efficient team, making sure ' +
            'the pack stayed together and the mood stayed fun. Once the project wrapped up, I got to volunteer at the Vectorama event and see our work in real use.',
          tags: [
            'JavaScript',
            'Vue',
            'HTML',
            'CSS',
            'Node-RED',
          ],
          image: {
            src: 'projects/ledrama2.jpg',
            alt: 'A photo of the lighting at the Vectorama event. Photo: Mikko Törmänen.',
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
            'SmartCanvas, an art installation that carries the user into different landscapes, was a multi-year student project ' +
            'in which our seven-person team was the tenth group to take part. ' +
            'Having got to know what the earlier groups had built, I wanted to make the art wall more intuitive and to remove the written instructions. ' +
            'My team liked the prototype I made in Figma, so my idea made it into use. ' +
            'I also designed and implemented an animation imitating brush strokes, which told the user that the program had begun processing the image. ' +
            'Because the SmartCanvas installation was going on display during Oulu’s year as European Capital of Culture in 2026, I spent one spring afternoon cycling around Oulu ' +
            'and photographing places that would suit the art wall as new, local backgrounds — Pikisaari, seen in the image, among them. ',
          tags: [
            'TypeScript',
            'UX/UI',
            'User testing',
          ],
          image: {
            src: 'projects/smartcanvas3.png',
            alt: 'SmartCanvas image with Pikisaari filter',
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
          context: 'In progress',
          client: 'My own project',
          role: 'Design and development, communicating with the client',
          blurb:
            'My brother asked me to build an application that would make preparing iXBRL-format financial statements easy for, say, ' +
            'a housing company. My goal is to come away with both a reporting tool for my brother and 10 credits ' +
            'from the University of Helsinki Open University’s Full Stack project course. I expect the project to strengthen my ' +
            'web development skills and to teach me a thing or two about accounting as well.',
          tags: ['React', 'TypeScript', 'CSS', 'JSON', 'iXBRL',],
          image: {
            src: 'projects/ixbrl.jpg',
            alt: 'A photo of a financial statement, a pen and a pocket calculator on a desk. Pixabay/stevepb',
          },
          private: true,
          links: [],
        },
      ],
    },

    contact: {
      heading: "Contact me",
      body: 'It\'s fun to get to know people. Including you.',
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
      copyright: '© 2026 Sanna Pitkänen',
    },
  },

  fi: {
    meta: {
      skipToContent: 'Siirry sisältöön',
    },

    nav: {
      brand: 'Sanna Pitkänen',
      about: 'Esittely',
      projects: 'Projektit',
      contact: 'Yhteystiedot',
    },

    langToggle: {
      label: 'Vaihda kieli englanniksi',
      long: 'In English',
    },

    hero: {
      eyebrow: 'Portfolio',
      name: 'Sanna Pitkänen',
      tagline: 'Junior-ohjelmistokehittäjä',
      intro:
        'Mitä yhteistä on ohjelmistokehittäjällä ja käsityöläisellä?\n' +
        'Ainakin taito kuunnella asiakasta, valita oikeat työvälineet ja luoda jotain tarpeellista.',
      ctaProjects: 'Projektini',
      ctaContact: 'Ota yhteyttä',
      portrait: {
        src: 'portrait.jpg',
        alt: 'Sanna Pitkänen hymyilee Vallilan Oulu-kankaasta tehdyn taulun edessä',
      }
    },

    about: {
      heading: 'Esittely',
      paragraphs: [
        'Mikä minusta tulee isona? Veljeni mukaan "sellosti" – olin juuri saanut ensimmäisen soittimeni. ' +
        'Minä mietin lääkäriä, lastenhoitajaa tai pappia. Lopulta päädyin abivuoden oppilaitosvierailujen herättämän kiinnostuksen ' +
        'myötä opiskelemaan kansalaistoimintaa ja nuorisotyötä ammattikorkeakouluun. Kesätyökokemusteni kautta ' +
        'kiinnostuin myös musiikista ammattina ja hakeuduin Oulun konservatorioon. Sain töitä musiikkipainotteisena lastenohjaajana, ' +
        'missä yhdistyivät sekä kasvatusalan että musiikin osaaminen.',
        'Vuosi 2021 oli muutoksen aikaa. Eksyin avoimen yliopiston sivuille etsimään mielekästä tekemistä ' +
        'vastapainoksi koronapandemian aiheuttamaan passiivisuuteen. Passiivisuus ja tylsistyminen saivat minut myös ' +
        'liittymään Suomen Mensan Oulun paikallisosaston jäseneksi ja uskomaan, että minussa voisi olla rahkeita tietotyöläiseksi. ' + 
        'Liityin samoihin aikoihin partioon ja oivalsin, että kasvatustyötä ' +
        'on mahdollista tehdä myös harrastuspohjalta vapaa-ajalla, jolloin työajan voi käyttää muuhun kiinnostavaan. ' +
        'Näiden ajatusten myötä uskaltauduin lähtemään tutkinto-opiskelijaksi. Valmistumiseni jälkeen olen työskennellyt ' +
        'yliopistolla INTERACT-tutkimusryhmän projektissa.',
        'Mikä minusta tulee isona? Ehkä ohjelmistokehittäjä, ehkä tutkija! Vaihtoehdot ovat avoinna, '+
        'tärkeimpänä kriteerinä se, että oppiminen ei lopu koskaan.',
      ],
      educationHeading: 'Koulutus',
      education: [
        {
          years: '2022–2025',
          title: 'LuK + FM, tietojenkäsittelytiede',
          org: 'Oulun yliopisto',
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
    },

    projects: {
      heading: 'Projektit',
      intro: 'Projektien tekninen sisältö on nähtävissä GitHubissani.',
      privateLabel: 'Yksityinen repositorio',
      roleLabel: 'Roolini',
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
          context: 'Kandiprojekti',
          client: 'Vector-Suomen verkkopeliyhdistys ry',
          role: 'Projektipäällikkö, graafinen suunnittelu, frontendin toteutus, käyttöohjeen laatiminen',
          blurb:
            'Vector-verkkopeliyhdistyksessä aktiivisesti mukana oleva ystäväni tiesi kertoa ennakkotietoa yhdestä kandiprojektikurssin toimeksiannosta: ' +
            'opiskelijoiden tulisi tehdä graafinen käyttöliittymä MQTT-viesteillä ohjattavien LED-valoputkien konfigurointiin ja hallintaan. ' +
            'Ilmoittauduin hänen houkuttelemanaan mukaan tähän projektiin, ja se kannatti. Pääsin tehokkaan tiimimme projektipäällikön rooliin huolehtimaan siitä, ' +
            'että pakka pysyy kasassa ja meininki hauskana. Projektin päätyttyä pääsin vielä osallistumaan talkoolaisena Vectorama-tapahtumaan ja näkemään työmme tuloksen tosikäytössä.',
          tags: [
            'JavaScript',
            'Vue',
            'HTML',
            'CSS',
            'Node-RED',
          ],
          image: {
            src: 'projects/ledrama2.jpg',
            alt: 'Kuva Vectorama-tapahtuman valaistuksesta. Kuvaaja: Mikko Törmänen.',
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
          context: 'Maisteriprojekti',
          client: 'INTERACT-tutkimusyksikkö, Oulun yliopisto',
          role: 'Käyttöliittymän suunnittelu ja toteutus, käyttäjätestit',
          blurb:
            'Käyttäjän erilaisiin maisemiin vievä SmartCanvas-taideinstallaatio oli monivuotinen opiskelijaprojekti, ' +
            'jossa meidän seitsemän hengen tiimimme oli kymmenes projektiin osallistunut ryhmä. ' +
            'Tutustuttuani edellisten ryhmien aikaansaannoksiin halusin tehdä taideseinästä intuitiivisemman ja poistaa tekstimuotoiset ohjeet. ' +
            'Figmalla tekemäni prototyyppi miellytti tiimiäni, joten ajatukseni pääsi käyttöön. ' +
            'Suunnittelin ja toteutin myös siveltimenvetoja imitoiva animaation, joka kertoi käyttäjälle, että ohjelma oli alkanut käsitellä kuvaa. ' +
            'Koska SmartCanvas-taideinstallaatio oli tulossa esille Oulun kulttuuripääkaupunkivuonna 2026, vietin yhden keväisen iltapäivän pyöräillen ympäri Oulua ' +
            'ja valokuvaten taideseinän uusiksi, paikallisiksi taustakuviksi sopivia paikkoja, esimerkkinä kuvassa näkyvä Pikisaari. ',
          tags: [
            'TypeScript',
            'UX/UI',
            'Käyttäjätestaus',
          ],
          image: {
            src: 'projects/smartcanvas3.png',
            alt: 'SmartCanvas-kuva Pikisaari-filtterillä',
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
          context: 'Käynnissä',
          client: 'Oma projekti',
          role: 'Suunnittelu ja kehitys, asiakkaan kanssa kommunikointi',
          blurb:
            'Veljeni pyysi minua kehittämään sovelluksen, jolla iXBRL-muotoisten tilinpäätösten tekeminen esimerkiksi ' +
            'taloyhtiölle olisi helppoa. Tavoitteenani on saada sekä tilinpäätöstyökalu veljelleni että 10 opintopistettä ' +
            'Helsingin yliopiston avoimen yliopiston Full Stack -projektikurssista. Uskon projektin vahvistavan ' +
            'websovelluskehitystaitojani ja myös opettavan minulle yhtä ja toista kirjanpidosta.',
          tags: [ 'React', 'TypeScript', 'CSS', 'JSON', 'iXBRL',],
          image: {
            src: 'projects/ixbrl.jpg',
            alt: 'Kuva, jossa on tilinpäätös, kynä ja taskulaskin pöydällä. Pixabay/stevepb',
          },
          private: true,
          links: [],
        },
      ],
    },

    contact: {
      heading: 'Ota yhteyttä',
      body: 'Minusta on hauska tutustua uusiin ihmisiin. Myös sinuun.',
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
      copyright: '© 2026 Sanna Pitkänen',
    },
  },
}

export const languages = ['en', 'fi']
