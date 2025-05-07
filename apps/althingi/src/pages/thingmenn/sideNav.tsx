import {
  Text,
  Box,
  Link,
  SidebarAccordion,
  Stack,
} from '@island.is/island-ui/core'
import {
  LinkToAlthingi,
  NavItemMock,
  ThingmennNavItemsMock,
} from 'apps/althingi/utils/mockData'

const SideNav = () => {
  return (
    <>
      <Box
        borderRadius={'large'}
        paddingTop={3}
        border="disabled"
        background={'blue100'}
      >
        <Box
          paddingLeft={4}
          paddingBottom={3}
          borderBottomWidth="standard"
          borderColor="blue200"
        >
          <Text variant="h4" fontWeight={'semiBold'} color="blue600">
            Þingmenn
          </Text>
        </Box>
        <Box padding={4} paddingBottom={3} paddingTop={3}>
          {ThingmennNavItemsMock.map((item) => {
            if (item.id === 0) {
              return (
                <Link key={item.id} href={item.href}>
                  <Text
                    variant="h5"
                    marginTop={2}
                    color="blue600"
                    fontWeight={'semiBold'}
                  >
                    {item.title}
                  </Text>
                </Link>
              )
            } else {
              return (
                <Link key={item.id} href={item.href}>
                  <Text marginTop={2} color="blue600">
                    {item.title}
                  </Text>
                </Link>
              )
            }
          })}
        </Box>
      </Box>
      <Box
        borderRadius={'large'}
        marginTop={3}
        padding={4}
        border="disabled"
        background={'blue100'}
      >
        <Text variant="eyebrow" color="blueberry600">
          Fyrir fagfólk
        </Text>
        <Link href={LinkToAlthingi}>
          <Text marginTop={2} color="blueberry600">
            Kæruréttur vegna fæðingar- eða foreldraorlofs
          </Text>
        </Link>
        <Link href={LinkToAlthingi}>
          <Text marginTop={1} color="blueberry600">
            Réttindir starfsmanns í fæðingaorlofi
          </Text>
        </Link>
      </Box>
    </>
  )
}

export default SideNav
