'use client'
import Image from 'next/image'
import { useState } from 'react'
import logoWhite from '../../../public/logos/BALIndustryLogoWhite.svg'
import styles from './Navbar.module.scss'
import Hamburger from './hamburger/Hamburger'
import HamburgerMenu from './hamburgerMenu/HamburgerMenu'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <nav className={styles.navbar}>
      <Image src={logoWhite} alt="Logo" />
      <Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HamburgerMenu isMenuOpen={isMenuOpen} />
    </nav>
  )
}
