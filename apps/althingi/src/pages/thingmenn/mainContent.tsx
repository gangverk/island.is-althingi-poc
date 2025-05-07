import {
  AsyncSearch,
  Box,
  Breadcrumbs,
  Button,
  DropdownMenu,
  Inline,
  LinkV2,
  Pagination,
  Stack,
  Table as T,
  Tag,
  Text,
} from '@island.is/island-ui/core'
import {
  LinkToAlthingi,
  TagsThingmenFiltertMock,
  ThingmennListMock,
} from 'apps/althingi/utils/mockData'
import { useState } from 'react'
import style from './index.module.scss'

const AlthingimennMainContent = () => {
  const [searhValue, setSearchValue] = useState('0')
  const [activeTag, setActiveTag] = useState<string | null>(null)

  return (
    <Stack space={3}>
      <Box marginBottom={2}>
        <Breadcrumbs
          items={[
            { title: 'Forsíða', href: LinkToAlthingi },
            { title: 'Þingmenn' },
            { title: 'Alþingismenn' },
          ]}
        />
      </Box>
      <Text variant="h2">Þingmenn og embætti</Text>
      <Box>
        <Stack space={2}>
          <div className={style.filterContainer}>
            <div className={style.searchBar}>
              <AsyncSearch
                options={[]}
                placeholder="Sía eftir leitarorði"
                inputValue={searhValue}
                onChange={(selection) => {
                  const { value, label } = selection || {}
                  if (value && label) {
                    setSearchValue(label)
                  }
                }}
              />
            </div>
            <div className={style.filterButton}>
              <DropdownMenu
                icon="filter"
                items={[
                  { title: 'Varamenn' },
                  { title: 'Þingflokkur' },
                  { title: 'Kjördæmi' },
                ]}
                openOnHover
                title="Fleiri síur"
              />
            </div>
            <Button variant="utility" icon="download">
              Sækja CSV
            </Button>
          </div>
          <Inline space={1}>
            {TagsThingmenFiltertMock.map((tag) => (
              <Tag
                onClick={() => {
                  setActiveTag(tag.key)
                }}
                outlined={true}
                key={tag.key}
                whiteBackground
                active={activeTag === tag.key}
              >
                {tag.label}
              </Tag>
            ))}
          </Inline>
          <T.Table>
            <T.Head>
              <T.Row>
                <T.HeadData>Nafn</T.HeadData>
                <T.HeadData>Skammstöfun</T.HeadData>
                <T.HeadData>Kjördæma-númer</T.HeadData>
                <T.HeadData>Kjördæmi</T.HeadData>
                <T.HeadData>Þingflokkur</T.HeadData>
              </T.Row>
            </T.Head>
            <T.Body>
              {ThingmennListMock.map((item) => {
                return (
                  <T.Row>
                    <T.Data key={item.id}>
                      <Stack space={0}>
                        <LinkV2 href={'/thingmenn'} className={style.nameLink}>
                          {item.nafn}
                        </LinkV2>
                        {item.stada && (
                          <Text variant="small">{item.stada}</Text>
                        )}
                      </Stack>
                    </T.Data>
                    <T.Data key={item.id}>
                      <Text variant="small">{item.skammstofun}</Text>
                    </T.Data>
                    <T.Data key={item.id}>
                      <Text variant="small">{item.number}</Text>
                    </T.Data>
                    <T.Data key={item.id}>
                      <Text variant="small">{item.kjordaemi}</Text>
                    </T.Data>
                    <T.Data key={item.id}>
                      <Text variant="small">{item.flokkur}</Text>
                    </T.Data>
                  </T.Row>
                )
              })}
            </T.Body>
            <T.Foot>
              <T.Row>
                <T.Data colSpan={5}>
                  <Pagination
                    page={1}
                    totalPages={10}
                    renderLink={(page, className, children) => (
                      <button onClick={() => {}}>
                        <span className={className}>{children}</span>
                      </button>
                    )}
                  />
                </T.Data>
              </T.Row>
            </T.Foot>
          </T.Table>
        </Stack>
      </Box>
    </Stack>
  )
}

export default AlthingimennMainContent
