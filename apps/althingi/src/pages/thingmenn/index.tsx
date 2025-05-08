import {
  AsyncSearch,
  Box,
  GridColumn,
  GridContainer,
  GridRow,
  Icon,
  Inline,
  Link,
  Page,
  Stack,
} from '@island.is/island-ui/core'
import Header from 'apps/althingi/components/Header/header'
import AlthingiHouseIcon from '../../Icons/althingiHouseIcon'
import AlthingiTextIcon from '../../Icons/althingiTextIcon'
import { useState } from 'react'
import SideNav from './sideNav'
import styles from './index.module.scss'
import { LinkToAlthingi } from 'apps/althingi/utils/mockData'
import AlthingimennMainContent from './mainContent'
import Footer from 'apps/althingi/components/Footer/footer'

const ThingmennPage = () => {
  const [searhValue, setSearchValue] = useState('')

  return (
    <Page>
      <GridContainer>
        <Header />
      </GridContainer>
      <GridContainer>
        <GridRow marginTop={2} marginBottom={22}>
          <GridColumn span={['3/12']} hiddenBelow="lg">
            <Stack space={3}>
              <Box
                paddingTop={2}
                paddingBottom={2}
                paddingLeft={4}
                background="blue600"
                borderRadius="large"
              >
                <Inline space="gutter" alignY={'center'}>
                  <AlthingiHouseIcon />
                  <AlthingiTextIcon />
                </Inline>
              </Box>
              <AsyncSearch
                options={[]}
                placeholder="Leitaðu á Alþingi"
                inputValue={searhValue}
                onChange={(selection) => {
                  const { value, label } = selection || {}
                  if (value && label) {
                    setSearchValue(label)
                  }
                }}
              />
              <Box
                component={Link}
                href={LinkToAlthingi}
                className={styles.videoLinkContainer}
              >
                <span className={styles.backLink}>
                  <span className={styles.backLinkIcon}>
                    <Icon icon="arrowBack" color="blue600" size={'small'} />
                  </span>
                  Til baka í efnisyfirlit.
                </span>
              </Box>
              <SideNav />
            </Stack>
          </GridColumn>
          <GridColumn
            span={['12/12', '12/12', '12/12', '8/12']}
            offset={['0', '0', '0', '1/12']}
          >
            <AlthingimennMainContent />
          </GridColumn>
        </GridRow>
      </GridContainer>
      <Footer />
    </Page>
  )
}

export default ThingmennPage
