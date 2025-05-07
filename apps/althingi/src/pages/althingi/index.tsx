import Header from 'apps/althingi/components/Header/header'
import styles from './index.module.scss'

import {
  Text,
  GridContainer,
  GridRow,
  GridColumn,
  Box,
  Link,
  Inline,
  useBreakpoint,
} from '@island.is/island-ui/core'
import { useState } from 'react'
import { HeaderSearch } from 'apps/althingi/components/Search/headerSerach'
import MainSection from './mainSection'
import AlthingiLinesIcon from '../../Icons/althingiLinesIcon'

const Althingi = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const { lg } = useBreakpoint()

  return (
    <>
      <GridContainer className={styles.pageHeader}>
        <Header />
      </GridContainer>
      <GridContainer className={styles.pageHeader2}>
        <HeaderSearch
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </GridContainer>
      <GridContainer>
        {lg && (
          <GridRow className={styles.logoCard}>
            <GridColumn span={['3/12']}>
              <Box padding={2} background="blue600" borderRadius="large">
                <Inline space="gutter" align="center" alignY={'center'}>
                  <img src="../althingiIcon.png" alt="Althingi icon" />
                  <img src="../althingiText.png" alt="Althingi text" />
                </Inline>
              </Box>
            </GridColumn>
          </GridRow>
        )}
        <GridRow marginTop={lg ? 2 : 5}>
          <GridColumn span={['3/12']} hiddenBelow="lg">
            <Box
              borderRadius={'large'}
              paddingTop={3}
              border="disabled"
              background={'blue100'}
              position="sticky"
            >
              <Box
                paddingLeft={4}
                paddingBottom={3}
                borderBottomWidth="standard"
                borderColor="blue200"
              >
                <Text variant="h4" fontWeight={'semiBold'} color="blue600">
                  Efnisyfirlit
                </Text>
              </Box>
              <Box padding={4} paddingBottom={3} paddingTop={3}>
                <Link href="/">
                  <Text marginTop={2} color="blue600">
                    Þingfundir og mál
                  </Text>
                </Link>
                <Link href="/">
                  <Text marginTop={2} color="blue600">
                    Nefndir
                  </Text>
                </Link>
                <Link href="/">
                  <Text marginTop={2} color="blue600">
                    Alþjóðastarf
                  </Text>
                </Link>
                <Link href="/">
                  <Text marginTop={2} color="blue600">
                    Lagasafn
                  </Text>
                </Link>
                <Link href="/">
                  <Text marginTop={2} color="blue600">
                    Ályktanir Alþingis
                  </Text>
                </Link>
                <Link href="/">
                  <Text marginTop={2} color="blue600">
                    Um Alþingi
                  </Text>
                </Link>
              </Box>
            </Box>
            <Box
              borderRadius={'large'}
              marginTop={3}
              padding={4}
              border="disabled"
              background={'blue100'}
              position="sticky"
            >
              <Text variant="eyebrow" color="blueberry600">
                Fyrir fagfólk
              </Text>
              <Link href="/">
                <Text marginTop={2} color="blueberry600">
                  Kæruréttur vegna fæðingar- eða foreldraorlofs
                </Text>
              </Link>
              <Link href="/">
                <Text marginTop={1} color="blueberry600">
                  Réttindir starfsmanns í fæðingaorlofi
                </Text>
              </Link>
            </Box>
          </GridColumn>
          <GridColumn
            span={['12/12', '12/12', '12/12', '7/12']}
            offset={['0', '0', '0', '1/12']}
          >
            <MainSection />
          </GridColumn>
        </GridRow>
      </GridContainer>
    </>
  )
}

export default Althingi
