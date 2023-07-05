import { Route, Routes } from 'react-router-dom'

import { Container, Header } from './components/Layout'
import { Index } from './routes/Index'
import { Detail } from './routes/Detail'

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/components/:componentId" element={<Detail />} />
          <Route path="*" element={<Index />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
