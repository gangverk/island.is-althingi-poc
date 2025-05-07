import { Box, Button, Inline, Stack } from '@island.is/island-ui/core'
import Link from 'next/link'

export function Index() {
  return (
    <Box paddingY={4} paddingX={2}>
      <Button>
        <Stack space={2}>
          <Link href="/althingi">Fara á Alþingi</Link>
        </Stack>
      </Button>
    </Box>
  )
}

export default Index
