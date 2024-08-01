import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Layout from './components/Layout/Layout'
import About from './components/About/About'
import './App.scss'
import Portfolio from './components/Portfolio/Portfolio'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </>
  )
}

export default App