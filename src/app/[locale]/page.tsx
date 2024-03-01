/* eslint-disable import/no-unassigned-import */
import 'swiper/css'
import 'swiper/css/pagination'
import styles from './page.module.scss'
import WelcomeSlider from '@/components/homePage/WelcomeSlider/WelcomeSlider'
import PopularOffers from '@/components/homePage/PopularOffers/PopularOffers'
import RoboticStations from '@/components/homePage/RoboticStations/RoboticStations'
import Solutions from '@/components/homePage/Solutions/Solutions'

export default function Home() {
  return (
    <main className={styles.main}>
      <WelcomeSlider />
      <div className={styles.contentWrapper}>
        <PopularOffers />
        <RoboticStations />
        <Solutions />
        <div>
          <h2>
            Portfolio produktów BAL Industry w zakresie robotyki i
            automatyzacji.
          </h2>
          <button>Pobierz katalog</button>
        </div>
        <div>Katalog/galeria</div>
        <div>Partnerzy</div>
        <div>Nasze produkty</div>
      </div>
    </main>
  )
}
