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
                <Stack space={0}>
                  <Link key={item.id} href={item.href}>
                    <Text
                      variant="h5"
                      marginTop={2}
                      color="blue400"
                      fontWeight={'semiBold'}
                    >
                      {item.title}
                    </Text>
                  </Link>
                  <Box
                    paddingLeft={2}
                    marginTop={2}
                    borderLeftWidth="standard"
                    borderColor="blue200"
                  >
                    <Stack space={2}>
                      <Link href={item.href}>
                        <Text color="blue400">{'Sætaskipun þingmanna'}</Text>
                      </Link>
                      <Link href={item.href}>
                        <Text color="blue400">{'Aðstoðarmenn'}</Text>
                      </Link>
                    </Stack>
                  </Box>
                </Stack>
              )
            } else {
              return (
                <Link key={item.id} href={LinkToAlthingi}>
                  <Text marginTop={2} color="blue600">
                    {item.title}
                  </Text>
                </Link>
              )
            }
          })}
        </Box>
      </Box>
    </>
  )
}

export default SideNav
