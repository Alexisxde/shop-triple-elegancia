import { useState } from 'react'
import ModalProducts from '@components/ModalProducts'

export default function CardProducts({ product }) {
  const { id, title, price, priceEnd, discount, images } = product
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  return (
    <article
      key={id}
      onClick={openModal}
      className="flex cursor-pointer flex-col rounded-xl bg-white font-bold text-gray-700 shadow-md">
      {modalOpen && <ModalProducts product={product} closeModal={closeModal} />}
      <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-white text-gray-600">
        <img
          src={images}
          className="h-full w-full object-cover transition-all hover:scale-105"
          alt={title}
        />
        {discount > 0 && (
          <span className="absolute right-0 top-0 m-1 flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white text-xs font-bold">
            {discount}%
          </span>
        )}
      </div>
      <div className="mb-2 flex flex-col px-4 pt-2">
        <span className="text-center text-[90%] text-gray-900">{title}</span>
        <div className="flex items-center justify-center">
          <span className="mr-1 text-base">${priceEnd}</span>
          {discount > 0 && (
            <span className="text-xs font-medium text-gray-400 line-through">
              ${price}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
