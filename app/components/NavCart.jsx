import { useState, useEffect } from 'react'
import HamburgerMenuClose from '@icons/HamburgerMenuClose'
import scrollToSection from '@utils/scrollToSection'
import CardCart from '@components/CardCart'

export default function NavCart({ closeNav }) {
  const [selectedItems, setSelectedItems] = useState([])

  useEffect(() => {
    const storedItems = localStorage.getItem('selectedItems')
    if (storedItems) {
      setSelectedItems(JSON.parse(storedItems))
    }
  }, [])

  return (
    <>
      <div
        onClick={closeNav}
        className="fixed inset-0 z-10 flex cursor-default select-none items-center justify-center bg-[#131313] bg-opacity-75 font-semibold text-gray-600"></div>
      <div className="fixed right-0 top-0 z-10 flex h-full w-2/3 animate-fade-left flex-col items-center justify-center bg-[#131313] animate-duration-150 sm:w-1/3 lg:w-1/4">
        <div className="h-14">
          <button
            onClick={closeNav}
            className="absolute -top-1 right-0 m-5 cursor-pointer">
            <HamburgerMenuClose className="size-6 text-white" />
          </button>
        </div>
        <div className="size-full text-white">
          {selectedItems.length === 0 && (
            <div className="flex size-full flex-col items-center justify-center">
              <span className="mb-3">No hay productos</span>
              <a
                onClick={() => {
                  closeNav()
                  scrollToSection('products')
                }}
                className="rounded bg-green-600 px-6 py-4 text-xs">
                Lista de productos
              </a>
            </div>
          )}
          {selectedItems.map(item => (
            <CardCart
              arrayLocalStorage={selectedItems}
              funtionLocalStorage={setSelectedItems}
              item={item}
            />
          ))}
        </div>
      </div>
    </>
  )
}
