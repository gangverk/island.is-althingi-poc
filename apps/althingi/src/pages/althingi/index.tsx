import Header from 'apps/althingi/components/Header/header'
import styles from './index.module.scss'

import {
  Text,
  GridContainer,
  GridRow,
  GridColumn,
  Box,
  Inline,
  useBreakpoint,
  Navigation,
  Hidden,
} from '@island.is/island-ui/core'
import { useState } from 'react'
import { HeaderSearch } from 'apps/althingi/components/Search/headerSerach'
import MainSection from './mainSection'
import { linkHome, mockMobileNavItems } from 'apps/althingi/utils/mockData'
import SideNav from './sideNav'

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
        <GridRow className={styles.logoCard}>
          <GridColumn span={['12/12', '12/12', '12/12', '3/12']}>
            <Box
              paddingTop={2}
              paddingLeft={4}
              paddingBottom={1}
              marginBottom={lg ? 0 : 2}
              background="blue600"
              borderRadius="large"
            >
              <Inline space="gutter" alignY={'center'}>
                <img src="../althingiIcon.png" alt="Althingi icon" />
                <img src="../althingiText.png" alt="Althingi text" />
              </Inline>
            </Box>
            <Hidden above="md">
              <Box>
                <Navigation
                  baseId="nav"
                  activeItemTitle="Efnisyfirlit"
                  colorScheme="blue"
                  isMenuDialog
                  items={mockMobileNavItems}
                  title="Efnisyfirlit"
                />
              </Box>
            </Hidden>
          </GridColumn>
        </GridRow>
        <GridRow marginTop={lg ? 2 : 5}>
          <GridColumn span={['3/12']} hiddenBelow="lg">
            <SideNav />
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
