import { useState } from 'react'
import { SearchIcon } from '../components/Icons'
import { useKeboolaComponentData } from '../utils/data'
import { Loader } from '../components/Loader'
import { ComponentList } from '../components/ComponentList'

export const Index = () => {
  const { data, isLoading } = useKeboolaComponentData()
  const [query, setQuery] = useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const handleClick = (id: string) => {
    console.log(id)
  }

  return (
    <div>
      <div className="flex items-center justify-between pt-12 pb-8">
        <h2 className="text-3xl font-medium">Components</h2>

        <div className="relative w-56">
          <div className="absolute left-3 top-3.5">
            <SearchIcon />
          </div>
          <input
            aria-label="Search"
            type="text"
            placeholder="Search component..."
            className="px-2 pl-9 rounded-md bg-white h-10 w-full outline-0 border border-gray-200 focus:border-gray-400 placeholder:text-gray-500 text-base"
            onChange={handleSearch}
            value={query}
          />
        </div>
      </div>

      {isLoading && (
        <div className="h-[65vh] flex items-center justify-center">
          <Loader />
        </div>
      )}

      {data && <ComponentList components={data} onClick={handleClick} />}
    </div>
  )
}
