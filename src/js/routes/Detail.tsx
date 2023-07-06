import ReactMarkdown from 'react-markdown'

import { Badge } from '../components/Badge'
import { ComponentIcon } from '../components/ComponentIcon'
import { Loader } from '../components/Loader'
import {
  ComponentDetailResponse,
  getComponentDetailUrl,
  useKeboolaData,
} from '../utils/data'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from '../components/Icons'
import { useActiveComponentStore } from '../store'

export const Detail = () => {
  const activeComponent = useActiveComponentStore((state) => state.component)
  const shouldFetch = activeComponent === null

  const { componentId } = useParams()

  const { data: fetchedData, isLoading } =
    useKeboolaData<ComponentDetailResponse>(
      shouldFetch ? getComponentDetailUrl(componentId || '') : null,
    )

  const data = activeComponent || fetchedData

  if (isLoading) {
    return (
      <div className="h-[80vh] flex items-center justify-center">
        <Loader />
      </div>
    )
  }

  if (data) {
    return (
      <section className="py-8 lg:py-12">
        <Link
          to="/"
          className="mb-6 inline-flex items-center text-gray-500 font-medium hover:text-gray-600 hover:underline"
        >
          <ArrowLeft />
          <span className="ml-1.5">Back</span>
        </Link>

        <div className="bg-white shadow py-3 px-4 rounded-md lg:py-5 lg:px-6">
          <div className="flex justify-between h-[50px]">
            <div className="flex items-center">
              <ComponentIcon icon={data.icon} />
              <h1 className="text-xl lg:text-3xl font-medium ml-3">
                {data.name}
              </h1>
            </div>

            <div className="text-right">
              <span className="text-gray-500">version: {data.version}</span>
              {data.categories.length > 0 && (
                <ul className="flex mt-1 gap-2 lg:mt-2">
                  {data.categories.map((category) => (
                    <Badge key={category}>{category}</Badge>
                  ))}
                </ul>
              )}
            </div>
          </div>
          {data.shortDescription && (
            <p className="mt-2 max-w-2xl">{data.shortDescription}</p>
          )}

          {data.longDescription && (
            <div className="mt-6 revertStyles">
              <ReactMarkdown>{data.longDescription}</ReactMarkdown>
            </div>
          )}
        </div>
      </section>
    )
  }
}
