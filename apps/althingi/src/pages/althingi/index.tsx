import Header from 'apps/althingi/components/Header/header'
import styles from './index.module.scss'
import {
  GridContainer,
  GridRow,
  GridColumn,
  Box,
  Inline,
  useBreakpoint,
  Navigation,
  Hidden,
  Page,
} from '@island.is/island-ui/core'
import { useState } from 'react'
import { HeaderSearch } from 'apps/althingi/components/Search/headerSerach'
import MainSection from './mainSection'
import SideNav from './sideNav'
import AlthingiHouseIcon from '../../Icons/althingiHouseIcon'
import AlthingiTextIcon from '../../Icons/althingiTextIcon'
import { MobileNavItemsMock } from 'apps/althingi/utils/mockData'
import Footer from 'apps/althingi/components/Footer/footer'

const Althingi = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const { lg } = useBreakpoint()

  return (
    <Page>
      <GridContainer className={styles.pageHeader}>
        <Header />
      </GridContainer>
      <GridContainer className={styles.pageHero}>
        <HeaderSearch
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </GridContainer>
      <GridContainer>
        <GridRow className={styles.logoCard}>
          <GridColumn span={['12/12', '12/12', '12/12', '3/12']}>
            <Box
              paddingTop={lg ? 2 : 1}
              paddingBottom={lg ? 2 : 1}
              paddingLeft={lg ? 4 : 3}
              marginBottom={lg ? 0 : 2}
              background="blue600"
              borderRadius="large"
            >
              <Inline space="gutter" alignY={'center'}>
                <AlthingiHouseIcon />
                <AlthingiTextIcon />
              </Inline>
            </Box>
            <Hidden above="md">
              <Box>
                <Navigation
                  baseId="nav"
                  activeItemTitle="Efnisyfirlit"
                  colorScheme="blue"
                  isMenuDialog
                  items={MobileNavItemsMock}
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
      <Footer />
    </Page>
  )
}

export default Althingi
