import { useState } from 'react'
import { Container, Header } from './components/Layout'
import { Index } from './routes/Index'
import { Detail } from './routes/Detail'

const App = () => {
  const [isDetail, setIsDetail] = useState(false)

  return (
    <>
      <Header />
      <Container>
        <button
          className="my-6 absolute right-4 top-0 text-gray-500"
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

export default App
