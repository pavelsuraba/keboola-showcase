import { twMerge } from 'tailwind-merge'
import { Component } from '../utils/data'

type Props = {
  component: Component
  className?: string
  onClick: (id: Component['id']) => void
}

export const ComponentBox = ({ component, className, onClick }: Props) => {
  const { id, name, shortDescription, categories } = component
  const src = component.icon[128] || component.icon[64] || component.icon[32]

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
          {src ? (
            <img src={src} alt="" className="w-8 h-8 object-cover" />
          ) : (
            <ImgPlaceholder />
          )}
          <p className="text-base font-medium ml-3">{name}</p>
        </div>
        <p className="mt-3 text-gray-500 line-clamp-2">{shortDescription}</p>
      </div>

      {categories.length > 0 && (
        <ul className="flex mt-3 gap-2">
          {categories.map((category) => (
            <li
              key={category}
              className="text-blue-700 px-1 border border-blue-400 rounded"
            >
              {category}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

const ImgPlaceholder = () => (
  <div className="w-8 h-8 rounded-full bg-gray-300" />
)
