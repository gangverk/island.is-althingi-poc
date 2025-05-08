import {
  Box,
  GridColumn,
  GridContainer,
  GridRow,
  Link,
  Inline,
  Text,
  Stack,
  Icon,
  Hidden,
  useBreakpoint,
} from '@island.is/island-ui/core'
import styles from './footer.module.scss'
import { LinkToAlthingi } from 'apps/althingi/utils/mockData'
import AlthingiHouseIcon from 'apps/althingi/src/Icons/althingiHouseIcon'
import AlthingiTextIcon from 'apps/althingi/src/Icons/althingiTextIcon'
import FaceBookIcon from 'apps/althingi/src/Icons/facebookIcon'
import TickTokIcon from 'apps/althingi/src/Icons/tiktokIcon'
import InstagramIcon from 'apps/althingi/src/Icons/instagramIcon'
import LinkedInIcon from 'apps/althingi/src/Icons/linkedinIcon'

const Footer = () => {
  const { md } = useBreakpoint()

  return (
    <>
      <GridContainer className={styles.footer}>
        <footer>
          <GridContainer>
            <GridRow>
              <GridColumn
                span="12/12"
                paddingTop={md ? 8 : 4}
                paddingBottom={md ? 8 : 2}
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
                <div className={styles.middleSection}>
                  <Hidden below="md">
                    <Stack space={0}>
                      <AlthingiHouseIcon height="130" width="200" />
                      <AlthingiTextIcon height="40" width="200" />
                    </Stack>
                  </Hidden>
                  <div className={styles.middleSectionInfo}>
                    <Inline space={0} align={'center'} alignY={'center'}>
                      <Hidden above="sm">
                        <Box
                          borderColor="white"
                          paddingTop={2}
                          paddingBottom={2}
                        >
                          <Stack space={1}>
                            <Text variant="h4" color="white">
                              Skrifstofa Alþingis
                            </Text>
                            <Stack space={0}>
                              <Text color="white">
                                Skiptiborðið er opið kl. 9–16
                              </Text>
                              <Text color="white">mánudaga til föstudaga</Text>
                            </Stack>
                            <div className={styles.socialContainer}>
                              <a
                                href={'mailto:althingi@althingi.is'}
                                className={styles.footerLink}
                              >
                                althingi@althingi.is
                              </a>
                              <a
                                href={'tel:5630500'}
                                className={styles.footerLink}
                              >
                                <Text variant="eyebrow" color="white">
                                  563 0500
                                </Text>
                              </a>
                              <Inline space={'smallGutter'} alignY="center">
                                <FaceBookIcon />
                                <TickTokIcon />
                                <InstagramIcon />
                                <LinkedInIcon />
                              </Inline>
                            </div>
                          </Stack>
                        </Box>
                      </Hidden>
                      <Hidden below="md">
                        <div className={styles.socialContainer}>
                          <a
                            href={'mailto:althingi@althingi.is'}
                            className={styles.footerLink}
                          >
                            althingi@althingi.is
                          </a>
                          <a href={'tel:5630500'} className={styles.footerLink}>
                            <Text variant="eyebrow" color="white">
                              563 0500
                            </Text>
                          </a>
                          <Inline space={'smallGutter'} alignY="center">
                            <FaceBookIcon />
                            <TickTokIcon />
                            <InstagramIcon />
                            <LinkedInIcon />
                          </Inline>
                        </div>
                      </Hidden>
                      <Hidden below="md">
                        <Box
                          borderLeftWidth="standard"
                          borderColor="white"
                          paddingLeft={4}
                          paddingTop={2}
                          paddingBottom={2}
                        >
                          <Stack space={1}>
                            <Text variant="h4" color="white">
                              Skrifstofa Alþingis
                            </Text>
                            <Stack space={0}>
                              <Text color="white">
                                Skiptiborðið er opið kl. 9–16
                              </Text>
                              <Text color="white">mánudaga til föstudaga</Text>
                            </Stack>
                          </Stack>
                        </Box>
                      </Hidden>
                    </Inline>
                  </div>
                </div>
              </GridColumn>
            </GridRow>
          </GridContainer>
        </footer>
      </GridContainer>
      <GridContainer className={styles.footerBottom}>
        <GridRow>
          <GridColumn
            span="12/12"
            paddingTop={4}
            paddingBottom={4}
            offset={'1/12'}
          >
            <div className={styles.islandFooterContainer}>
              <Inline space={3} alignY="center">
                <Link href={LinkToAlthingi}>
                  <Text color="blue600">Ísland.is</Text>
                </Link>
                <Link href={LinkToAlthingi}>
                  <Text color="blue600">Þjónustuflokkar</Text>
                </Link>
              </Inline>
              <Inline space={3} alignY="center">
                <Link href={LinkToAlthingi}>
                  <Text color="blue600">Persónunverndarstefna</Text>
                </Link>
                <Link href={LinkToAlthingi}>
                  <Text color="blue600">Stofnanir</Text>
                </Link>
                <Link href={LinkToAlthingi}>
                  <Inline space={1} alignY="center">
                    <Icon
                      icon="globe"
                      type="outline"
                      color="blue600"
                      size="small"
                    />
                    <Text color="blue600">Enska</Text>
                  </Inline>
                </Link>
              </Inline>
            </div>
          </GridColumn>
        </GridRow>
      </GridContainer>
    </>
  )
}

export default Footer
