import { useState } from 'react'
import { useKeboolaComponentData } from '../utils/data'
import { Loader } from '../components/Loader'
import { ComponentList } from '../components/ComponentList'
import { filterValue } from '../utils/string'
import { SearchInput } from '../components/SearchInput'

export const Index = () => {
  const [query, setQuery] = useState('')
  const { data, isLoading } = useKeboolaComponentData()

  const handleClick = (id: string) => {
    console.log(id)
  }

  // Type at least 2 letters to filter results
  const searchQuery = query.length < 2 ? '' : query

  const filteredData = searchQuery
    ? data?.filter(
        (component) =>
          filterValue(component.id, searchQuery) ||
          filterValue(component.name, searchQuery) ||
          filterValue(component.shortDescription || '', searchQuery),
      )
    : data

  return (
    <>
      <div className="flex items-center justify-between pt-12 pb-8">
        <h2 className="text-3xl font-medium">
          Components {filteredData && `(${filteredData.length})`}
        </h2>

        <SearchInput
          className="w-56"
          placeholder="Search component..."
          value={query}
          onChange={setQuery}
          onClear={() => setQuery('')}
        />
      </div>

      {isLoading && (
        <div className="h-[65vh] flex items-center justify-center">
          <Loader />
        </div>
      )}

      {filteredData && (
        <>
          {filteredData.length === 0 ? (
            <div className="text-center mt-20 text-lg font-medium">
              No components found!
            </div>
          ) : (
            <ComponentList
              query={searchQuery}
              components={filteredData}
              onClick={handleClick}
            />
          )}
        </>
      )}
    </>
  )
}
