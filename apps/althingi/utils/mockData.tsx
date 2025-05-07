import { linkStyles } from '@island.is/island-ui/core'
import { link } from 'fs'

export const linkHome = '/althingi'

export const loremIpsumText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

export const mockDagskra = [
  {
    id: 2,
    linkText: 'Veiðigjald',
    text: ' (aflaverðmæti í reiknistofni), 351. mál, lagafrumvarp atvinnu-vegaráðherra. — Framhald 1. umræðu. Mælendaskrá..',
  },
  {
    id: 3,
    linkText: 'Umhverfismat framkvæmda og áætlana ',
    text: ' (samræming við EES-reglur), 129. mál, lagafrumvarp umhverfis-, orku- og loftslagsráðherra. — 2. umræða.',
  },
  {
    id: 4,
    linkText: 'Skipulag haf- og strandsvæða ',
    text: ' (svæðisráð o.fl.), 147. mál, lagafrumvarp félags- og húsnæðismálaráðherra. — 2. umræða.',
  },
  {
    id: 5,
    linkText:
      'Ákvarðanir nr. 317/2023 um breytingu á II. viðauka við EES-samninginn o.fl.',
    text: ' (tæknilegar reglugerðir, staðlar, prófanir og vottun o.fl.), 124. mál, þingsályktunartillaga utanríkisráðherra. — Síðari umræða.',
  },
  {
    id: 6,
    linkText: 'Verðbréfun ',
    text: ' 122. mál, lagafrumvarp fjármála- og efnahagsráðherra. — 2. umræða.',
  },
  {
    id: 7,
    linkText: 'Rekstraraðilar sérhæfðra sjóða og verðbréfasjóðir ',
    text: ' (stjórnvaldsfyrirmæli), 172. mál, lagafrumvarp fjármála- og efnahagsráðherra. — 2. umræða.',
  },
  {
    id: 8,
    linkText:
      'Þjónustu- og þekkingarmiðstöð fyrir blinda, sjónskerta og einstaklinga með samþætta sjón- og heyrnarskerðingu ',
    text: ' (heiti stofnunar), 148. mál, lagafrumvarp félags- og húsnæðismálaráðherra. — 2. umræða.',
  },
  {
    id: 9,
    linkText: 'Landlæknir og lýðheilsa o.fl.',
    text: ' 2. mál, lagafrumvarp heilbrigðisráðherra. — 2. umræða.',
  },
  {
    id: 10,
    linkText: 'Lyfjalög og lækningartæki',
    text: ' (EES-reglur), 4.mál, lagafrumvarp heilbrigðisráðherra. — 2. umræða.',
  },
]

export const mockLogOgAlyktanir = [
  {
    date: 'Fimmtudagur 10.apríl 2025',
    items: [
      {
        link: linkHome,
        linkText: 'Veiðigjald (aflaverðmæti í reiknistofni).',
        text: 'Lög númer 16/2025.',
      },
    ],
  },
  {
    date: 'Mánudagur 31.mars 2025',
    items: [
      {
        link: linkHome,
        linkText:
          'Umhverfismat framkvæmda og áætlana (samræming við EES-reglur).',
        text: 'Lög númer 15/2025.',
      },
    ],
  },
  {
    date: 'Mánudagur 24.mars 2025',
    items: [
      {
        link: linkHome,
        linkText:
          'Ákvarðanir nr. 167/2024 um breytingu á II. viðauka og bókun 37 við EES-samninginn o.fl. (tæknilegar reglugerðir, staðlar, prófanir og vottun).',
        text: 'Ályktun númer 4/156.',
      },
      {
        link: linkHome,
        linkText: 'Einkaleyfi (undanþága frá viðbótarvernd).',
        text: ' Lög númer 13/2025.',
      },
      {
        link: linkHome,
        linkText: 'Heilbrigðisþjónusta o.fl. (fækkun hæfnisnefnda).',
        text: 'Lög númer 12/2025.',
      },
    ],
  },
  {
    date: 'Miðvikudagur 19.mars 2025',
    items: [
      {
        link: linkHome,
        linkText: 'Siglingavernd (áhættumat hafnaraðstöðu).',
        text: 'Lög númer 11/2025.',
      },
      {
        link: linkHome,
        linkText: 'Staðfesting ríkisreiknings 2023.',
        text: 'Lög númer 10/2025',
      },
    ],
  },
]

export const mockNavItems = [
  { id: 1, title: 'Þingfundir og mál' },
  { id: 2, title: 'Nefndir' },
  { id: 3, title: 'Alþjóðastarf' },
  { id: 4, title: 'Lagasafn' },
  { id: 5, title: 'Ályktanir Alþingis' },
  { id: 6, title: 'Um Alþingi' },
]

export const mockMobileNavItems = [
  { href: linkHome, title: 'Þingfundir og mál' },
  { href: linkHome, title: 'Nefndir' },
  { href: linkHome, title: 'Alþjóðastarf' },
  { href: linkHome, title: 'Lagasafn' },
  { href: linkHome, title: 'Ályktanir Alþingis' },
  { href: linkHome, title: 'Um Alþingi' },
  {
    active: true,
    items: [
      {
        href: linkHome,
        title: 'Kæruréttur vegna fæðingar- eða foreldraorlofs',
      },
      {
        href: linkHome,
        title: 'Réttindir starfsmanns í fæðingaorlofi',
      },
    ],
    title: 'Fyrir fagfólk',
  },
]
