import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
)

export default AppRouter