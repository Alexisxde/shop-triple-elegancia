import { useState } from 'react'
import LogoTripleElegancia from '@icons/triplelegancia.jpg'
import HamburgerMenuOpen from '@icons/HamburgerMenuOpen'
import Cart from '@icons/Cart'
import NavCategories from '@components/NavCategories'
import NavCart from '@components/NavCart'
import scrollToSection from '@utils/scrollToSection'

export default function Layout() {
  const [navCategories, setNavCategories] = useState(false)
  const [navCart, setNavCart] = useState(false)

  const toggleNavCategories = () => setNavCategories(!navCategories)
  const toggleNavCart = () => setNavCart(!navCart)

  return (
    <>
      <header className="fixed flex w-full items-center justify-between bg-[#131313] px-5">
        <button
          className="cursor-pointer"
          onClick={toggleNavCategories}>
          <HamburgerMenuOpen className="size-6 text-white" />
        </button>
        <button onClick={() => scrollToSection('home')}>
          <img
            className="size-14 cursor-pointer"
            src={LogoTripleElegancia}
            alt="Triple Elegancia"
          />
        </button>
        <button className="cursor-pointer" onClick={toggleNavCart}>
          <Cart className="size-6 text-white" />
        </button>
      </header>
      {navCategories && (
        <NavCategories
          closeNav={toggleNavCategories}
          navVisible={navCategories}
        />
      )}
      {navCart && <NavCart closeNav={toggleNavCart} />}
    </>
  )
}
