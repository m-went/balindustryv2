import Image from 'next/image'
import { FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa'
import logo from '../../../public/logos/BalIndustryLogoOrange.png'
import styles from './Footer.module.scss'

export default function Footer() {
  const menus = [
    {
      header: 'O nas',
      links: ['O firmie', 'Kontakt'],
    },
    {
      header: 'Robotyzacja i automatyzacja',
      links: ['Stanowiska zrobotyzowane', 'Automatyzacja maszyn i urządzeń'],
    },
    {
      header: 'Park maszynowy',
      links: ['Dział obróbki CNC', 'Dział obróbki metalowej', 'Lakiernie'],
    },
    {
      header: 'Rozwiązania',
      links: ['Satyniarki', 'Magazyn pionowy blach', 'Piece kmorowe'],
    },
    {
      header: 'Usługi',
      links: ['Wycena cięcia', 'Formularz kontaktowy'],
    },
  ]
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <Image src={logo} alt="Logo" />
      </div>
      <div className={styles.menuContainer}>
        {menus.map((menu) => (
          <div key={menu.header}>
            <h4>{menu.header}</h4>
            <ul>
              {menu.links.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.bottomBar}>
        <span>&copy; 2023</span>
        <ul>
          <li>BAL Industry</li>
          <li>Wsola, Gombrowicza 4</li>
          <li>26-660 Jedlińsk</li>
          <li className={styles.socials}>
            <FaInstagram />
            <FaLinkedinIn />
            <FaTwitter />
          </li>
        </ul>
      </div>
    </footer>
  )
}
