import {
  Box,
  Column,
  Columns,
  FocusableBox,
  GridColumn,
  GridContainer,
  GridRow,
  Hidden,
  Logo,
  Button,
  Link,
  Inline,
  Text,
  Stack,
} from '@island.is/island-ui/core'
import styles from './footer.module.scss'
import { LinkToAlthingi } from 'apps/althingi/utils/mockData'
import AlthingiHouseIcon from 'apps/althingi/src/Icons/althingiHouseIcon'
import AlthingiTextIcon from 'apps/althingi/src/Icons/althingiTextIcon'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <GridContainer>
        <GridRow>
          <GridColumn
            span="12/12"
            paddingTop={8}
            paddingBottom={8}
            offset={'1/12'}
          >
            <Inline space={3} alignY="center">
              <Link key={1} href={'https://althingistidindi.is/'}>
                <Text color="white">{'Alþingistíðindi'}</Text>
              </Link>
              <Link key={1} href={'https://www.skolathing.is/'}>
                <Text color="white">{'Skólaþing'}</Text>
              </Link>
              <Link key={1} href={'https://umsagnir.althingi.is/'}>
                <Text color="white">{'Umsagnagátt'}</Text>
              </Link>
              <Link key={1} href={'https://innri.althingi.is/'}>
                <Text color="white">{'Hakið'}</Text>
              </Link>
              <Link key={1} href={'https://postur-mfa.althingi.is/'}>
                <Text color="white">{'Vefpóstur'}</Text>
              </Link>
              <Link key={1} href={'https://thingmannagatt.althingi.is/'}>
                <Text color="white">{'Þingmannagátt'}</Text>
              </Link>
            </Inline>
            <Box paddingTop={9}>
              <Stack space="gutter">
                <AlthingiHouseIcon />
                <AlthingiTextIcon />
              </Stack>
            </Box>
          </GridColumn>
        </GridRow>
      </GridContainer>
    </footer>
  )
}

export default Footer
