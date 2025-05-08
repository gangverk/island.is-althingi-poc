import {
  AsyncSearchInput,
  Box,
  Breadcrumbs,
  Button,
  DropdownMenu,
  Icon,
  Inline,
  Input,
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
import { BaseSyntheticEvent, useEffect, useState } from 'react'
import style from './index.module.scss'
import { useDebounce } from 'react-use'

const AlthingimennMainContent = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const [filteredList, setFilteredList] = useState(ThingmennListMock)
  const [focused, setFocused] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const [debouncedSearchInput, setDebouncedSearchInput] = useState(searchInput)
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 10

  const paginatedList = filteredList.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  )

  useEffect(() => {
    setCurrentPage(1)
  }, [debouncedSearchInput])

  useDebounce(
    () => {
      setDebouncedSearchInput(searchInput)
    },
    500,
    [searchInput],
  )

  useEffect(() => {
    const filtered = ThingmennListMock.filter((item) => {
      const matchesSearch = item.nafn
        .toLowerCase()
        .includes(debouncedSearchInput.toLowerCase())

      return matchesSearch
    })
    setFilteredList(filtered)
  }, [debouncedSearchInput])

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
              <Input
                backgroundColor="blue"
                {...(searchInput === '' && {
                  icon: {
                    name: 'search',
                  },
                })}
                buttons={
                  searchInput !== ''
                    ? [
                        {
                          label: 'clear',
                          name: 'close',
                          onClick: () => setSearchInput(''),
                          type: 'outline',
                        },
                      ]
                    : []
                }
                name="search-thingmenn"
                placeholder="Sía eftir leitarorði"
                size="sm"
                value={searchInput || ''}
                onChange={(event: BaseSyntheticEvent) => {
                  setSearchInput(event.target.value)
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
            <Button variant="utility" icon="download" iconType="outline">
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
          {paginatedList.length === 0 ? (
            <Box paddingTop={4}>
              <Text variant="h3" color="dark400">
                Enginn alþingismaður fannst.
              </Text>
            </Box>
          ) : (
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
                {paginatedList.map((item) => (
                  <T.Row key={item.id}>
                    <T.Data>
                      <Stack space={0}>
                        <LinkV2 href={'/thingmenn'} className={style.nameLink}>
                          {item.nafn}
                        </LinkV2>
                        {item.stada && (
                          <Text variant="small">{item.stada}</Text>
                        )}
                      </Stack>
                    </T.Data>
                    <T.Data>
                      <Text variant="small">{item.skammstofun}</Text>
                    </T.Data>
                    <T.Data>
                      <Text variant="small">{item.number}</Text>
                    </T.Data>
                    <T.Data>
                      <Text variant="small">{item.kjordaemi}</Text>
                    </T.Data>
                    <T.Data>
                      <Text variant="small">{item.flokkur}</Text>
                    </T.Data>
                  </T.Row>
                ))}
              </T.Body>
              <T.Foot>
                <T.Row>
                  <T.Data colSpan={5}>
                    <Pagination
                      page={currentPage}
                      totalPages={Math.ceil(filteredList.length / pageSize)}
                      renderLink={(page, className, children) => (
                        <button
                          onClick={() => setCurrentPage(page)}
                          className={className}
                        >
                          {children}
                        </button>
                      )}
                    />
                  </T.Data>
                </T.Row>
              </T.Foot>
            </T.Table>
          )}
        </Stack>
      </Box>
    </Stack>
  )
}

export default AlthingimennMainContent
