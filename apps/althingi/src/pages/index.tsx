import { Text, Page, LinkV2, Box } from '@island.is/island-ui/core'
import { LinkToAlthingi } from 'apps/althingi/utils/mockData'

export function Index() {
  return (
    <Page>
      <Box padding={4}>
        <LinkV2 href={LinkToAlthingi}>
          <Text color="blue400">Fara á Althingi</Text>
        </LinkV2>
      </Box>
    </Page>
  )
}

export default Index
