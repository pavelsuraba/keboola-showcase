import { twMerge } from 'tailwind-merge'
import Highlighter from 'react-highlight-words'

import { Component } from '../utils/data'
import { ComponentIcon } from './ComponentIcon'
import { Badge } from './Badge'

type Props = {
  component: Component
  className?: string
  query: string
  onClick: (id: Component['id']) => void
}

export const ComponentBox = ({
  component,
  className,
  query,
  onClick,
}: Props) => {
  const { id, name, shortDescription, categories } = component

  const handleClick = (id: string) => () => {
    onClick(id)
  }

  return (
    <div
      className={twMerge(
        'p-5 flex flex-col justify-between rounded-md bg-white h-full shadow shadow-gray-200 cursor-pointer transition-all hover:shadow-md',
        className,
      )}
      onClick={handleClick(id)}
    >
      <div>
        <div className="flex items-center">
          <ComponentIcon icon={component.icon} />
          <p className="text-base font-medium ml-3">{name}</p>
        </div>

        {shortDescription && (
          <p className="mt-3 text-gray-500 line-clamp-2">
            <Highlighter
              searchWords={[query]}
              textToHighlight={shortDescription}
            />
          </p>
        )}
      </div>

      {categories.length > 0 && (
        <ul className="flex mt-3 gap-2">
          {categories.map((category) => (
            <Badge key={category}>{category}</Badge>
          ))}
        </ul>
      )}
    </div>
  )
}
