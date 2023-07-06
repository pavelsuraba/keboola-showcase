import { memo, useCallback } from 'react'
import LazyLoad from 'react-lazy-load'

import { ComponentBox } from './ComponentBox'
import type { Component } from '../types'

type Props = {
  components: Component[]
  query: string
  onClick: (id: Component['id']) => void
}

const ComponentListPure = ({ components, query, onClick }: Props) => {
  const handleClick = useCallback((id: string) => {
    onClick(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
      {components.map((component) => (
        <li key={component.id}>
          <LazyLoad height={158}>
            <ComponentBox
              id={component.id}
              className="min-h-[158px]"
              query={query}
              categories={component.categories}
              name={component.name}
              icon={component.icon}
              description={component.shortDescription}
              onClick={handleClick}
            />
          </LazyLoad>
        </li>
      ))}
    </ul>
  )
}

export const ComponentList = memo(ComponentListPure)
