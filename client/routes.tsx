import { createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './components/Layout.tsx'
import Pets from './components/Pets.tsx'
export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    {/* <Route index element={<Layout />} /> */}
    <Route path="/pets" element={<Pets />} />
  </Route>,
)
