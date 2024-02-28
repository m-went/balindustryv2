/* eslint-disable @typescript-eslint/prefer-find */
/* eslint-disable unicorn/prefer-array-find */
/* eslint-disable import/no-extraneous-dependencies */
'use client'
import {
  FaChevronRight,
  FaChevronLeft,
  FaRegBookmark,
  FaRegUserCircle,
} from 'react-icons/fa'
import { LuShoppingCart, LuDownload, LuInfo } from 'react-icons/lu'
import { useState } from 'react'
import styles from './HamburgerMenu.module.scss'

interface HamburgerMenuProps {
  isMenuOpen: boolean
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isMenuOpen }) => {
  const [chosenMenu, setChosenMenu] = useState<string | null>(null)
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
    <div
      className={`${styles.hamburgerMenu} ${isMenuOpen ? styles.open : styles.closed}`}
    >
      {chosenMenu === null ? (
        <div>
          <div className={styles.linkWrapper}>
            <ul>
              {menuFields.map((field) => (
                <li
                  key={field.fieldName}
                  onClick={() => {
                    setChosenMenu(field.fieldName)
                  }}
                >
                  {field.fieldName}
                  <FaChevronRight />
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.basketWrapper}>
            <ul>
              <li>
                <LuShoppingCart />
                KOSZYK
              </li>
              <li>
                <FaRegBookmark />
                ZAPISANE
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div>
          <div className={styles.linkWrapper}>
            <ul>
              <li
                className={styles.returnButton}
                onClick={() => {
                  setChosenMenu(null)
                }}
              >
                <FaChevronLeft />
                POWRÓT
              </li>
              {menuFields
                .filter((field) => field.fieldName === chosenMenu)[0]
                .subFields.map((subfield) => (
                  <li key={subfield}>{subfield}</li>
                ))}
            </ul>
          </div>
          <div className={styles.basketWrapper}>
            <ul>
              <li>
                <LuShoppingCart />
                KOSZYK
              </li>
              <li>
                <FaRegBookmark />
                ZAPISANE
              </li>
            </ul>
          </div>
        </div>
      )}

      <div className={styles.optionsWrapper}>
        <ul>
          <li>
            <FaRegUserCircle />
            ZALOGUJ <LuDownload />
          </li>
          <li>
            <LuInfo />
            POMOC
          </li>
          <li>Polska</li>
        </ul>
      </div>
    </div>
  )
}

export default HamburgerMenu
