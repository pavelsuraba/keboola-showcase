import { Loader } from '../components/Loader'
import { Component, getComponentDetailUrl, useKeboolaData } from '../utils/data'

export const Detail = () => {
  const { data, isLoading } = useKeboolaData<Component>(
    getComponentDetailUrl('kds-team.ex-airtable'),
  )

  if (isLoading) {
    return (
      <div className="h-[80vh] flex items-center justify-center">
        <Loader />
      </div>
    )
  }

  return (
    <div>
      {data ? (
        <>
          <div>{data.name}</div>
          <div>{data.shortDescription}</div>
        </>
      ) : (
        'Loading detail...'
      )}
    </div>
  )
}
