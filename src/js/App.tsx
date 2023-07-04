import { useState } from 'react'
import { Container, Header } from './components/Layout'
import { Component, ComponentsResponse, useKeboolaData } from './utils/data'

// const Loading = () => <div className="text-center">Loading...</div>
// const Error = () => <div className="text-center">Failed to load</div>

const App = () => {
  const [isDetail, setIsDetail] = useState(false)

  return (
    <>
      <Header />
      <Container>
        <button
          className="my-6"
          type="button"
          onClick={() => setIsDetail(!isDetail)}
        >
          {`${isDetail ? 'Hide' : 'Show'} detail`}
        </button>
        {isDetail ? <Detail /> : <Index />}
      </Container>
    </>
  )
}

const Index = () => {
  const { data } = useKeboolaData<ComponentsResponse>(
    'https://apps-api.keboola.com/apps?offset=0&limit=1000',
  )

  console.log(data)

  return (
    <div>
      {data
        ? data.map((component) => (
            <div key={component.id}>{component.name}</div>
          ))
        : 'Loading...'}
    </div>
  )
}

const Detail = () => {
  const { data } = useKeboolaData<Component>(
    'https://apps-api.keboola.com/apps/kds-team.ex-airtable',
  )

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

export default App
