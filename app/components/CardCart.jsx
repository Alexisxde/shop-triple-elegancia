import { useState } from 'react'
import Delete from '@icons/Delete'

export default function CardCart({ item, arrayLocalStorage }) {
  const [numberValue, setNumberValue] = useState(1)
  const { id, title, priceEnd, images } = item

  const removeFromLocalStorage = () => {
    const updatedArray = arrayLocalStorage.filter(objeto => objeto.id !== id)
    localStorage.setItem('selectedItems', JSON.stringify(updatedArray))
  }

  return (
    <article key={id} className="flex w-full items-center justify-between p-5">
      <img src={images} className="size-12 rounded" />
      <div className="flex flex-col items-start">
        <span className="text-pretty text-xs font-light">{title}</span>
        <div className="flex w-full items-center justify-between">
          <div className="text-sm">
            <button
              onClick={() => {
                if (numberValue > 1) {
                  setNumberValue(numberValue - 1)
                }
              }}
              className="mr-2 cursor-pointer hover:text-gray-400">
              -
            </button>
            <span className="select-none">{numberValue}</span>
            <button
              onClick={() => setNumberValue(numberValue + 1)}
              className="ml-2 cursor-pointer hover:text-gray-400">
              +
            </button>
          </div>
          <span className="text-xs font-light">${priceEnd}</span>
        </div>
      </div>
      <button onClick={removeFromLocalStorage}>
        <Delete
          className="size-5
             hover:text-red-600 hover:transition-colors 
             active:text-red-600 active:transition-colors"
        />
      </button>
    </article>
  )
}
