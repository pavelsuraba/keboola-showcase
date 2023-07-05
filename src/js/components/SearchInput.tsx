import { twMerge } from 'tailwind-merge'

import { CloseIcon, SearchIcon } from './Icons'

type Props = {
  value: string
  className?: string
  placeholder?: string
  onChange: (value: string) => void
  onClear: () => void
}

export const SearchInput = ({
  className,
  placeholder = 'Search',
  value,
  onClear,
  onChange,
}: Props) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <div className={twMerge('relative', className)}>
      <div className="absolute left-3 top-3.5">
        <SearchIcon />
      </div>

      {value.length > 0 && (
        <div
          className="absolute right-3 top-3.5 cursor-pointer"
          onClick={onClear}
        >
          <CloseIcon />
        </div>
      )}
      <input
        aria-label="Search"
        type="text"
        placeholder={placeholder}
        className="pl-9 pr-8 rounded-md bg-white h-10 w-full outline-0 border border-gray-200 focus:border-gray-400 placeholder:text-gray-500"
        onChange={handleSearch}
        value={value}
      />
    </div>
  )
}
