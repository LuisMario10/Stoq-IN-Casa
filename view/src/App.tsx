import { BrowserRouter, Routes, Route, Navigate } from 'react-router'

import { AppLayout } from "./shared/layouts";
import { Home } from './pages';
import { ListPainel } from './pages/List/ListPainel';


export default function App() {

  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/lists' element={ <ListPainel /> } />

          <Route path='*' element={ <Navigate to='/' /> } />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}