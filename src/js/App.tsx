import { Route, Routes } from 'react-router-dom'

import { Container, Header } from './components/Layout'
import { Index } from './routes/Index'
import { Detail } from './routes/Detail'
import { NotFound } from './routes/NotFound'
import { ErrorPage } from './routes/Error'

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Index />} errorElement={<ErrorPage />} />
          <Route
            path="/components/:componentId"
            element={<Detail />}
            errorElement={<ErrorPage />}
          />
        </Routes>
      </Container>
    </>
  )
}

export default App
