import React, { ReactNode } from 'react'

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
} from '@island.is/island-ui/core'
import { Menu } from '../Menu/menu'
import styles from './header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <GridContainer>
        <GridRow>
          <GridColumn span="12/12" paddingTop={4} paddingBottom={4}>
            <Columns alignY="center" space={2}>
              <Column width="content">
                <FocusableBox href="/" data-testid="link-back-home">
                  <Hidden above="md">
                    <Logo id="header-logo-icon" width={40} iconOnly />
                  </Hidden>
                  <Hidden below="lg">
                    <Logo id="header-logo" width={160} />
                  </Hidden>
                </FocusableBox>
              </Column>
              <Column>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="flexEnd"
                  width="full"
                  paddingTop={[0, 0, 0, 0]}
                >
                  <Box marginLeft={[1, 1, 2]} display={['block']}>
                    <Link href="https://island.is/minarsidur" skipTab>
                      <Hidden below="md">
                        <Button variant="utility" icon="person">
                          Mínar síður
                        </Button>
                      </Hidden>
                      <Hidden above="sm">
                        <Button variant="utility" icon="person"></Button>
                      </Hidden>
                    </Link>
                  </Box>
                  <Box marginLeft={[1, 1, 2]} display={['block']}>
                    <Button variant="utility">EN</Button>
                  </Box>
                  <Box marginLeft={[1, 1, 2]}>
                    <Menu />
                  </Box>
                </Box>
              </Column>
            </Columns>
          </GridColumn>
        </GridRow>
      </GridContainer>
    </header>
  )
}

export default Header
