import { useState, useEffect } from 'react'
import { API_PRODUCTS } from '@/api/tripleElegancia.api'

export default function SectionProducts() {
  const [products, setProducts] = useState([])
  const [selectedItems, setSelectedItems] = useState([])

  useEffect(() => {
    const storedItems = localStorage.getItem('selectedItems')
    // ! console.log(storedItems)
    if (storedItems) {
      setSelectedItems(JSON.parse(storedItems))
    }
    const fetchData = async () => {
      try {
        const result = await API_PRODUCTS.products.list()
        setProducts(result)
      } catch (error) {
        console.log('Error al obtener datos del servidor.')
      }
    }
    fetchData()
  }, [])

  const handleClick = item => {
    const updatedItems = [...selectedItems, item]
    localStorage.setItem('selectedItems', JSON.stringify(updatedItems))
    setSelectedItems(updatedItems)
  }

  return (
    <section id="products" className="size-full bg-white py-20">
      <h3 className="text-center text-4xl font-bold text-[#131313]">
        Productos
      </h3>
      <div className="grid grid-cols-2 gap-6 p-8 lg:grid-cols-3 xl:grid-cols-4">
        {products.map(({ id, title, description, priceEnd, images }) => (
          <article
            key={id}
            className="flex flex-col rounded-xl bg-white text-gray-700 shadow-md">
            <div className="mx-4 mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
              <img
                src={images}
                className="h-full w-full object-cover transition-all hover:scale-105"
              />
            </div>
            <div className="px-4 pt-4">
              <div className="mb-2 flex flex-col items-center justify-center">
                <p className="text-[90%] font-semibold text-gray-900">
                  {title}
                </p>
                <p className="text-blue-gray-900 text-base font-semibold">
                  ${priceEnd}
                </p>
              </div>
              {/* <p className="text-pretty text-sm font-normal text-gray-700 opacity-75">
                {description}.
              </p> */}
            </div>
            <div className="flex items-center justify-center px-3 pb-3">
              <button
                className="hover:text-white-700/50 w-full rounded-lg bg-[#131313] px-5 py-3 text-center text-xs font-semibold uppercase
            text-white transition-all hover:scale-105"
                onClick={() =>
                  handleClick({ id, title, description, priceEnd, images })
                }>
                Añadir al carrito
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
