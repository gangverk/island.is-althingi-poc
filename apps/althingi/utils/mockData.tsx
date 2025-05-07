import { linkStyles } from '@island.is/island-ui/core'
import { link } from 'fs'

export const LinkToAlthingi = '/althingi'

export const LoremIpsumText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

export const DagskraListMock = [
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

export const LogOgAlyktarnirListMock = [
  {
    date: 'Fimmtudagur 10.apríl 2025',
    items: [
      {
        link: LinkToAlthingi,
        linkText: 'Veiðigjald (aflaverðmæti í reiknistofni).',
        text: 'Lög númer 16/2025.',
      },
    ],
  },
  {
    date: 'Mánudagur 31.mars 2025',
    items: [
      {
        link: LinkToAlthingi,
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
        link: LinkToAlthingi,
        linkText:
          'Ákvarðanir nr. 167/2024 um breytingu á II. viðauka og bókun 37 við EES-samninginn o.fl. (tæknilegar reglugerðir, staðlar, prófanir og vottun).',
        text: 'Ályktun númer 4/156.',
      },
      {
        link: LinkToAlthingi,
        linkText: 'Einkaleyfi (undanþága frá viðbótarvernd).',
        text: ' Lög númer 13/2025.',
      },
      {
        link: LinkToAlthingi,
        linkText: 'Heilbrigðisþjónusta o.fl. (fækkun hæfnisnefnda).',
        text: 'Lög númer 12/2025.',
      },
    ],
  },
  {
    date: 'Miðvikudagur 19.mars 2025',
    items: [
      {
        link: LinkToAlthingi,
        linkText: 'Siglingavernd (áhættumat hafnaraðstöðu).',
        text: 'Lög númer 11/2025.',
      },
      {
        link: LinkToAlthingi,
        linkText: 'Staðfesting ríkisreiknings 2023.',
        text: 'Lög númer 10/2025',
      },
    ],
  },
]

export const NavItemMock = [
  { id: 1, href: LinkToAlthingi, title: 'Þingfundir og mál' },
  { id: 2, href: '/thingmenn', title: 'Þingmenn' },
  { id: 3, href: LinkToAlthingi, title: 'Nefndir' },
  { id: 4, href: LinkToAlthingi, title: 'Alþjóðastarf' },
  { id: 5, href: LinkToAlthingi, title: 'Lagasafn' },
  { id: 6, href: LinkToAlthingi, title: 'Ályktanir Alþingis' },
  { id: 7, href: LinkToAlthingi, title: 'Um Alþingi' },
]

export const MobileNavItemsMock = [
  { href: LinkToAlthingi, title: 'Þingfundir og mál' },
  { href: LinkToAlthingi, title: 'Nefndir' },
  { href: LinkToAlthingi, title: 'Alþjóðastarf' },
  { href: LinkToAlthingi, title: 'Lagasafn' },
  { href: LinkToAlthingi, title: 'Ályktanir Alþingis' },
  { href: LinkToAlthingi, title: 'Um Alþingi' },
  {
    active: true,
    items: [
      {
        href: LinkToAlthingi,
        title: 'Kæruréttur vegna fæðingar- eða foreldraorlofs',
      },
      {
        href: LinkToAlthingi,
        title: 'Réttindir starfsmanns í fæðingaorlofi',
      },
    ],
    title: 'Fyrir fagfólk',
  },
]

export const TagListMock = [
  { key: 'althingi', label: 'Alþingi' },
  { key: 'thingmenn', label: 'Þingmenn' },
  { key: 'mal', label: 'Þingfundur og mál' },
  { key: 'lagasafn', label: 'Lagasafn' },
]

export const ThingmennNavItemsMock = [
  { id: 0, href: '/thingmenn', title: 'Alþingismenn' },
  { id: 1, href: '/thingmenn', title: 'Þingflokkar' },
  { id: 2, href: '/thingmenn', title: 'Forsetar Alþingis' },
  { id: 3, href: '/thingmenn', title: 'Ráðherrar - ríkisstjórn' },
  { id: 4, href: '/thingmenn', title: 'Sögulegur fróðleikur' },
  { id: 5, href: '/thingmenn', title: 'Hagsmunaskrá og hátterni' },
  { id: 6, href: '/thingmenn', title: 'Alþingismanntal' },
  { id: 7, href: '/thingmenn', title: 'Starfskjör alþingismann' },
  { id: 8, href: '/thingmenn', title: 'Þingtímabil' },
  { id: 9, href: '/thingmenn', title: 'Tilkynnningar' },
  { id: 10, href: '/thingmenn', title: 'Alþingiskosningar' },
]

export const TagsThingmenFiltertMock = [
  { key: 'thingmenn', label: 'Þingmenn' },
  { key: 'varathingmenn', label: 'Varaþingmenn' },
  { key: 'radherrar', label: 'Ráðherrar' },
]

export const ThingmennListMock = [
  {
    id: 1,
    nafn: 'Alma D. Möller',
    stada: 'Heilbrigðisráðherra',
    skammstofun: 'AMÖll',
    number: '3. þm.',
    kjordaemi: 'Suðvest.',
    flokkur: 'Samfylking',
  },
  {
    id: 2,
    nafn: 'Jón Þór Ólafsson',
    stada: null,
    skammstofun: 'JÞÓl',
    number: '1. þm.',
    kjordaemi: 'Reykjavík suður',
    flokkur: 'Píratar',
  },
  {
    id: 3,
    nafn: 'Katrín Jakobsdóttir',
    stada: 'Forsætisráðherra',
    skammstofun: 'KJak',
    number: '2. þm.',
    kjordaemi: 'Reykjavík norður',
    flokkur: 'Vinstri græn',
  },
  {
    id: 4,
    nafn: 'Sigurður Ingi Jóhannsson',
    stada: 'Samgöngu- og sveitarstjórnarráðherra',
    stada: null,
    number: '5. þm.',
    kjordaemi: 'Suðurkjördæmi',
    flokkur: 'Framsókn',
  },
  {
    id: 5,
    nafn: 'Þórdís Kolbrún Reykfjörð Gylfadóttir',
    stada: null,
    skammstofun: 'ÞKRG',
    number: '4. þm.',
    kjordaemi: 'Norðvestur',
    flokkur: 'Sjálfstæðisflokkur',
  },
  {
    id: 6,
    nafn: 'Andrés Ingi Jónsson',
    stada: null,
    skammstofun: 'AIJón',
    number: '6. þm.',
    kjordaemi: 'Reykjavík norður',
    flokkur: 'Vinstri græn',
  },
  {
    id: 7,
    nafn: 'Birgir Ármannsson',
    stada: 'Forseti Alþingis',
    skammstofun: 'BÁrm',
    number: '7. þm.',
    kjordaemi: 'Reykjavík suður',
    flokkur: 'Sjálfstæðisflokkur',
  },
  {
    id: 8,
    nafn: 'Lilja Alfreðsdóttir',
    stada: 'Menningar- og viðskiptaráðherra',
    skammstofun: 'LAfr',
    number: '8. þm.',
    kjordaemi: 'Suðurland',
    flokkur: 'Framsókn',
  },
  {
    id: 9,
    nafn: 'Helga Vala Helgadóttir',
    stada: 'Alþingismaður',
    skammstofun: 'HVHel',
    number: '9. þm.',
    kjordaemi: 'Reykjavík suður',
    flokkur: 'Samfylking',
  },
  {
    id: 10,
    nafn: 'Smári McCarthy',
    stada: null,
    skammstofun: 'SMcC',
    number: '10. þm.',
    kjordaemi: 'Suðvest.',
    flokkur: 'Píratar',
  },
]
