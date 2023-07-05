import ReactMarkdown from 'react-markdown'

import { Badge } from '../components/Badge'
import { ComponentIcon } from '../components/ComponentIcon'
import { Loader } from '../components/Loader'
import {
  ComponentDetailResponse,
  getComponentDetailUrl,
  useKeboolaData,
} from '../utils/data'

export const Detail = () => {
  const { data, isLoading } = useKeboolaData<ComponentDetailResponse>(
    getComponentDetailUrl('revolt-bi.ex-adform'),
  )

  if (isLoading) {
    return (
      <div className="h-[80vh] flex items-center justify-center">
        <Loader />
      </div>
    )
  }

  if (data) {
    return (
      <section className="py-12">
        <div className="flex justify-between">
          <div className="flex">
            <ComponentIcon icon={data.icon} />
            <h1 className="text-3xl font-medium ml-3">{data.name}</h1>
          </div>

          <div className="text-right">
            <span className="text-gray-500">version: {data.version}</span>
            {data.categories.length > 0 && (
              <ul className="flex mt-2 gap-2">
                {data.categories.map((category) => (
                  <Badge key={category}>{category}</Badge>
                ))}
              </ul>
            )}
          </div>
        </div>
        {data.shortDescription && (
          <p className="mt-3 max-w-2xl">{data.shortDescription}</p>
        )}

        {data.longDescription && (
          <div className="mt-4 revertStyles">
            <ReactMarkdown>{data.longDescription}</ReactMarkdown>
          </div>
        )}
      </section>
    )
  }
}
