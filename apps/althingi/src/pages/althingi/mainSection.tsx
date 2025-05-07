import {
  Accordion,
  AccordionItem,
  ArrowLink,
  Box,
  Bullet,
  BulletList,
  Hidden,
  Icon,
  Inline,
  Link,
  LinkV2,
  Stack,
  Text,
  useBreakpoint,
  VideoIframe,
} from '@island.is/island-ui/core'
import styles from './mainSection.module.scss'
import {
  linkHome,
  loremIpsumText,
  mockDagskra,
  mockLogOgAlyktanir,
} from 'apps/althingi/utils/mockData'
import { blue400 } from '@island.is/island-ui/theme'

const MainSection = () => {
  const { xl } = useBreakpoint()

  return (
    <Stack space={3}>
      <iframe
        tabIndex={-1}
        width="100%"
        height="454"
        src="http://vod.althingi.is/player/?type=vod&width=512&height=288&icons=yes&file=20250506T131300&start=1004&duration=20669&autoplay=true"
      ></iframe>
      <Box
        display={'flex'}
        justifyContent={'spaceBetween'}
        alignItems={'baseline'}
      >
        <Box>
          <Text variant="h2" color="dark400">
            {xl ? 'Útsending þingfundar' : 'Útsending'}
          </Text>
          <Hidden below="xl">
            <Text color={'dark400'}>
              259. mál á 22. fundi, 156. löggjafarþingi, 31.03.2025.
            </Text>
          </Hidden>
        </Box>
        <Stack space="p3" align="right">
          <Box
            component={Link}
            href={'https://www.althingi.is/utsendingar/'}
            className={styles.videoLinkContainer}
          >
            <span className={styles.videoLink}>
              Aðrir útsendingarkostir
              <span className={styles.iconWrap}>
                <Icon icon="arrowForward" color="blue600" size={'small'} />
              </span>
            </span>
          </Box>
          <Box
            component={Link}
            href={'https://www.althingi.is/altext/upptokur/'}
            className={styles.videoLinkContainer}
          >
            <span className={styles.videoLink}>
              Upptökur
              <Icon icon="arrowForward" color="blue600" size={'small'} />
            </span>
          </Box>
        </Stack>
      </Box>
      <Box marginBottom={4}>
        <Stack space={3}>
          <Accordion dividerOnTop={false}>
            <AccordionItem key={'dagskra'} id={'dagskra'} label={'Dagskrá'}>
              <BulletList type="ol">
                <Bullet>
                  <Inline space="smallGutter" alignY="center">
                    <Text>{'Störf þingsins'}</Text>
                    <Link href={linkHome} className={styles.bulletLink}>
                      {'Mælendaskrá'}
                    </Link>
                  </Inline>
                </Bullet>
                {mockDagskra.map((item) => (
                  <Bullet key={item.id}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div>
                        <Link href={linkHome} className={styles.bulletLink}>
                          {item.linkText}
                        </Link>
                        {item.text}
                      </div>
                    </div>
                  </Bullet>
                ))}
              </BulletList>
            </AccordionItem>
            <AccordionItem
              key={'heimsoknir'}
              id={'heimsoknir'}
              label={'Heimsóknir'}
            >
              <Text>{loremIpsumText}</Text>
            </AccordionItem>
            <AccordionItem
              key={'tilkyningar'}
              id={'tilkyningar'}
              label={'Tilkynningar'}
            >
              <Text>{loremIpsumText}</Text>
            </AccordionItem>
            <AccordionItem key={'log'} id={'log'} label={'Lög og ályktanir'}>
              <Stack space={2}>
                {mockLogOgAlyktanir.map((item) => (
                  <Stack space={1} key={item.date}>
                    <Text variant="h5" color="dark400">
                      {item.date}
                    </Text>
                    <BulletList space={3}>
                      {item.items.map((subItem, index) => (
                        <Bullet key={index}>
                          <LinkV2
                            href={subItem.link}
                            className={styles.bulletLink}
                          >
                            {subItem.linkText}
                          </LinkV2>
                          <Text color="dark400">{subItem.text}</Text>
                        </Bullet>
                      ))}
                    </BulletList>
                  </Stack>
                ))}
              </Stack>
            </AccordionItem>
            <AccordionItem key={'raedur'} id={'raedur'} label={'Ræður'}>
              <Text>{loremIpsumText}</Text>
            </AccordionItem>
            <AccordionItem
              key={'thingskjol'}
              id={'thingskjol'}
              label={'Þingskjöl'}
            >
              <Text>{loremIpsumText}</Text>
            </AccordionItem>
            <AccordionItem key={'erindi'} id={'erindi'} label={'Erindi'}>
              <Text>{loremIpsumText}</Text>
            </AccordionItem>
          </Accordion>
        </Stack>
      </Box>
    </Stack>
  )
}

export default MainSection
