import { Button, Menu as IslandMenu } from '@island.is/island-ui/core'

export const Menu = () => {
  return (
    <IslandMenu
      baseId="menuModal"
      asideBottomLinks={[
        {
          href: '#',
          text: 'Heilsuvera',
        },
        {
          href: '#',
          text: 'Samráðsgátt',
        },
        {
          href: '#',
          text: 'Mannanöfn',
        },
        {
          href: '#',
          text: 'Undirskriftarlistar',
        },
      ]}
      asideBottomTitle="Aðrir opinberir vefir"
      asideTopLinks={[
        {
          href: '#',
          text: 'Stofnanir',
        },
        {
          href: '#',
          text: 'Stafrænt Ísland',
        },
        {
          href: '#',
          sub: [
            {
              href: '#',
              text: 'Ísland UI',
            },
            {
              href: '#',
              text: 'Hönnunarkerfi',
            },
            {
              href: '#',
              text: 'Efnisstefna',
            },
          ],
          text: 'Þróun',
        },
      ]}
      languageSwitchText="EN"
      mainLinks={[
        {
          href: '#',
          text: 'Akstur og bifreiðar',
        },
        {
          href: '#',
          text: 'Atvinnurekstur og sjálfstætt starfandi',
        },
        {
          href: '#',
          text: 'Dómstólar og réttarfar',
        },
        {
          href: '#',
          text: 'Fjármál og skattar',
        },
        {
          href: '#',
          text: 'Fjölskylda og velferð',
        },
        {
          href: '#',
          text: 'Heilbrigðismál',
        },
        {
          href: '#',
          text: 'Húsnæðismál',
        },
        {
          href: '#',
          text: 'Iðnaður',
        },
        {
          href: '#',
          text: 'Innflytjendamál',
        },
        {
          href: '#',
          text: 'Launþegi, réttindi og lífeyrir',
        },
        {
          href: '#',
          text: 'Málefni fatlaðs fólks',
        },
        {
          href: '#',
          text: 'Menntun',
        },
        {
          href: '#',
          text: 'Neytendamál',
        },
        {
          href: '#',
          text: 'Samfélag og réttindi',
        },
        {
          href: '#',
          text: 'Samgöngur',
        },
        {
          href: '#',
          text: 'Umhverfismál',
        },
        {
          href: '#',
          text: 'Vegabréf, ferðalög og búseta erlendis',
        },
        {
          href: '#',
          text: 'Vörur og þjónusta Ísland.is',
        },
      ]}
      mainTitle="Þjónustuflokkar"
      menuButton={
        <Button variant="utility" icon="menu">
          Valmynd
        </Button>
      }
      myPagesText="Mínar síður"
    />
  )
}
