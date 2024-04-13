import { useState, useEffect } from 'react'
import { API_PRODUCTS } from '@/api/tripleElegancia.api'
import CardProducts from './CardProducts'

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

  return (
    <section id="products" className="size-full bg-white py-20">
      <h3 className="text-center text-4xl font-bold text-[#131313]">
        Productos
      </h3>
      <main className="grid grid-cols-2 gap-6 p-8 lg:grid-cols-3 xl:grid-cols-4">
        {products.map(product => (
          <CardProducts key={product.id} product={product} />
        ))}
      </main>
    </section>
  )
}
