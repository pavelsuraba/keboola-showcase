import { twMerge } from 'tailwind-merge'

import { ComponentIcon } from './ComponentIcon'
import { Badge } from './Badge'
import type { Component } from '../types'
import { ComponentDescription } from './ComponentDescription'
import { memo } from 'react'

type Props = {
  id: Component['id']
  name: Component['name']
  icon: Component['icon']
  categories: Component['categories']
  description?: Component['shortDescription']
  className?: string
  query: string
  onClick: (id: Component['id']) => void
}

export const ComponentBoxPure = ({
  id,
  name,
  icon,
  categories,
  description,
  className,
  query,
  onClick,
}: Props) => {
  return (
    <div
      className={twMerge(
        'p-5 flex flex-col justify-between rounded-md bg-white h-full shadow shadow-gray-200 cursor-pointer transition-all hover:shadow-md',
        className,
      )}
      onClick={() => onClick(id)}
    >
      <div>
        <div className="flex items-center">
          <ComponentIcon icon={icon} />
          <p className="text-base font-medium ml-3">{name}</p>
        </div>

        {description && (
          <p className="mt-3 text-gray-500 line-clamp-2">
            <ComponentDescription query={query} description={description} />
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

export const ComponentBox = memo(ComponentBoxPure)
