import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { Layout } from './components/layout/Layout'
import { HomePage } from './pages/HomePage'
import { LessonsPage } from './pages/LessonsPage'
import { LessonDetailPage } from './pages/LessonDetailPage'
import { ProductsPage } from './pages/ProductsPage'
import { ProductDetailPage } from './pages/ProductDetailPage'
import { CheckoutSuccessPage } from './pages/CheckoutSuccessPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { LessonViewerPage } from './pages/LessonViewerPage'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/lessons" element={<LessonsPage />} />
            <Route path="/lessons/:slug" element={<LessonDetailPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:slug" element={<ProductDetailPage />} />
            <Route path="/checkout/success" element={<CheckoutSuccessPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          {/* Lesson viewer has its own layout (no header/footer) */}
          <Route path="/lessons/:slug/learn" element={<LessonViewerPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
