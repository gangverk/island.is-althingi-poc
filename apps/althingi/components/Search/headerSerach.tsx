import {
  GridRow,
  GridColumn,
  AsyncSearch,
  Tag,
  Inline,
  useBreakpoint,
} from '@island.is/island-ui/core'
import styles from './headerSerach.module.scss'
import { useState } from 'react'
import { TagListMock } from 'apps/althingi/utils/mockData'

interface HeaderProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export const HeaderSearch = ({ searchQuery, setSearchQuery }: HeaderProps) => {
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const { md } = useBreakpoint()

  return (
    <GridRow className={styles.searchWrapper}>
      <GridColumn
        span={['12/12', '9/12', '8/12', '6/12']}
        className={styles.searchContainer}
      >
        <Inline space={1}>
          {TagListMock.map((tag) => (
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
        <AsyncSearch
          options={[]}
          size={md ? 'large' : 'semi-large'}
          placeholder="Leita"
          inputValue={searchQuery}
          onInputValueChange={(query) => {
            setSearchQuery(query)
          }}
          onChange={(selection) => {
            const { value, label } = selection || {}
            if (value && label) {
              setSearchQuery(label)
            }
          }}
        />
      </GridColumn>
    </GridRow>
  )
}
