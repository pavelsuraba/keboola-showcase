import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useKeboolaComponentData } from '../utils/data'
import { Loader } from '../components/Loader'
import { ComponentList } from '../components/ComponentList'
import { filterValue } from '../utils/string'
import { SearchInput } from '../components/SearchInput'
import { useActiveComponentStore } from '../store'
import type { Component } from '../types'

export const Index = () => {
  const { data, isLoading } = useKeboolaComponentData()
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const setActiveComponent = useActiveComponentStore(
    (state) => state.setComponent,
  )

  const activeComponent = useActiveComponentStore((state) => state.component)

  useEffect(() => {
    if (activeComponent) {
      setActiveComponent(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeComponent])

  const handleClick = (component: Component) => {
    setActiveComponent(component)
    navigate(`/components/${component.id}`)
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
    <section className="py-8 lg:py-12">
      <div className="flex items-center justify-between pb-4 lg:pb-8">
        <h1 className="text-lg lg:text-3xl font-medium">
          Components {filteredData && `(${filteredData.length})`}
        </h1>

        <SearchInput
          className="w-56"
          placeholder="Search component..."
          value={query}
          onChange={setQuery}
          onClear={() => setQuery('')}
        />
      </div>

      {isLoading && (
        <div className="h-[50vh] flex items-center justify-center">
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
    </section>
  )
}
