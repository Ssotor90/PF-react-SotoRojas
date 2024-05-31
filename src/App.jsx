import './App.css'
import Layout from './components/Layout/Layout'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NotFound from './views/NotFound'
import ItemList from './components/ItemList/ItemList'
import ItemDetail from './components/ItemDetail/ItemDetail'
import CartProvider from './context/CartProvider'
import CartContext from './context/CartContext'



function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<ItemList />} />
            <Route path='/category/:categoryName' element={<ItemList />} />
            <Route path="/item/:itemId" element={<ItemDetail />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
