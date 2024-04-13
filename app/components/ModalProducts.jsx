import Cart from '@icons/Cart'
import HamburgerMenuClose from '@icons/HamburgerMenuClose'

export default function ModalProducts({ product, closeModal }) {
  const { id, title, price, priceEnd, discount, images, sizes } = product

  const handleModalClick = event => {
    event.stopPropagation()
  }

  return (
    <>
      <div className="fixed inset-0 z-10 flex cursor-default select-none items-center justify-center bg-[#131313] bg-opacity-75 font-semibold text-gray-600">
        <div
          onClick={handleModalClick}
          className="relative flex w-[95%] animate-fade flex-col items-center justify-center rounded-xl bg-white p-3 animate-duration-150">
          <button
            onClick={closeModal}
            className="absolute right-0 top-0 z-10 m-5 cursor-pointer">
            <HamburgerMenuClose className="size-6 text-black" />
          </button>
          <div className="flex h-full w-full flex-col rounded-xl p-3">
            <div className="relative flex items-center justify-center">
              {discount > 0 && (
                <span className="absolute left-0 top-0 flex items-center justify-center rounded-xl bg-black p-3 text-xs text-white">
                  {discount}% OFF
                </span>
              )}
              <img
                src={images}
                className="h-56 w-56 rounded-lg object-cover transition-transform"
                alt={title}
              />
            </div>
            <div className="flex flex-col p-2 text-lg">
              <h3>{title}</h3>
              {discount > 0 && (
                <div>
                  <span className="pr-1 text-xs font-medium text-gray-400 line-through">
                    ${price}
                  </span>
                  <span>${priceEnd}</span>
                </div>
              )}
              <hr />
              <div>
                <span className="py-1">Talles disponibles:</span>
                {sizes.map(
                  size =>
                    size.stock > 0 && (
                      <button
                        key={size.size}
                        value={size.size}
                        className="m-2 border border-gray-600 px-1 text-sm font-semibold hover:bg-gray-600 hover:text-white">
                        {size.size}
                      </button>
                    )
                )}
                <hr />
                <div className="flex items-center justify-center pt-4">
                  <button className="rounded-lg border bg-black px-6 py-3 text-white hover:scale-105 active:scale-95">
                    Añadir al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
