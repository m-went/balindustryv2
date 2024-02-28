'use client'
import Image from 'next/image'
import { useState } from 'react'
import logoWhite from '../../../public/logos/BALIndustryLogoWhite.svg'
import styles from './Navbar.module.scss'
import Hamburger from './hamburger/Hamburger'
import HamburgerMenu from './hamburgerMenu/HamburgerMenu'
import { LuSearch } from 'react-icons/lu'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const menuFields = [
    { fieldName: 'O NAS', subFields: ['O FIRMIE', 'KONTAKT'] },
    {
      fieldName: 'ROBOTYZACJA I AUTOMATYZACJA',
      subFields: [
        'STANOWISKA ZROBOTYZOWANE',
        'AUTOMATYZACJA MASZYN I URZĄDZEŃ',
      ],
    },
    {
      fieldName: 'PARK MASZYNOWY',
      subFields: ['DZIAŁ OBRÓBKI CNC', 'DZIAŁ OBRÓBKI METALOWEJ', 'LAKIERNIE'],
    },
    {
      fieldName: 'ROZWIĄZANIA',
      subFields: [
        'SATYNIARKI',
        'MAGAZYN PIONOWY BLACH',
        'PIECE KOMOROWE',
        'LAKIERNIE',
      ],
    },
    { fieldName: 'USŁUGI', subFields: ['WYCENA CIĘCIA', 'FORMULARZ OFERTOWY'] },
  ]

  return (
    <nav className={styles.navbar}>
      {isMobile ? (
        <>
          <Image src={logoWhite} alt="Logo" />
          <Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <HamburgerMenu isMenuOpen={isMenuOpen} menuFields={menuFields} />
        </>
      ) : (
        <div className={styles.desktopNavbar}>
          <div className={styles.desktopNavbarTop}>
            <Image src={logoWhite} alt="Logo" />
            <div className={styles.searchbarWrapper}>
              <LuSearch />
              <input
                type="text"
                placeholder="Szukaj"
                className={styles.searchbar}
              />
            </div>
            <ul>
              <li>Zapisane</li>
              <li>Zaloguj</li>
              <li>Koszyk</li>
              <li>Polska</li>
            </ul>
          </div>
          <div></div>
        </div>
      )}
    </nav>
  )
}
