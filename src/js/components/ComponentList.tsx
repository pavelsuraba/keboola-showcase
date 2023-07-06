import LazyLoad from 'react-lazy-load'
import { ComponentBox } from './ComponentBox'
import type { Component } from '../types'

type Props = {
  components: Component[]
  query: string
  onClick: (component: Component) => void
}

export const ComponentList = ({ components, query, onClick }: Props) => {
  return (
    <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
      {components.map((component) => (
        <li key={component.id}>
          <LazyLoad height={158}>
            <ComponentBox
              query={query}
              className="min-h-[158px]"
              component={component}
              onClick={onClick}
            />
          </LazyLoad>
        </li>
      ))}
    </ul>
  )
}
