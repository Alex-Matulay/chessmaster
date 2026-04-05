import { createContext, useReducer, useEffect } from 'react'

export const CartContext = createContext(null)

const STORAGE_KEY = 'chessmaster-cart'

function loadCart() {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      if (state.some((item) => item.id === action.item.id && item.itemType === action.item.itemType)) {
        return state
      }
      return [...state, action.item]
    }
    case 'REMOVE_ITEM':
      return state.filter(
        (item) => !(item.id === action.id && item.itemType === action.itemType)
      )
    case 'CLEAR_CART':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, null, loadCart)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = (item) => dispatch({ type: 'ADD_ITEM', item })
  const removeItem = (id, itemType) => dispatch({ type: 'REMOVE_ITEM', id, itemType })
  const clearCart = () => dispatch({ type: 'CLEAR_CART' })
  const cartTotal = items.reduce((sum, item) => sum + item.price, 0)
  const cartCount = items.length

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart, cartTotal, cartCount }}>
      {children}
    </CartContext.Provider>
  )
}
