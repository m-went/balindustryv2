/* eslint-disable import/no-unassigned-import */
import 'swiper/css'
import 'swiper/css/pagination'
import styles from './page.module.scss'
import WelcomeSlider from '@/components/homePage/WelcomeSlider/WelcomeSlider'
import PopularOffers from '@/components/homePage/PopularOffers/PopularOffers'
import RoboticStations from '@/components/homePage/RoboticStations/RoboticStations'

export default function Home() {
  return (
    <main className={styles.main}>
      <WelcomeSlider />
      <PopularOffers />
      <RoboticStations />
      <div>
        <h2>Odkryj nowoczesne rozwiązania BAL Industry dla przemysłu</h2>
        <p>
          Dostarczamy spersonalizowane, branżowe rozwiązania automatyzacyjne.
          Sukcesywanie realizujemy udane projekty i budujemy globalne
          partnerstwa. Wspólnie podniesiemy efektywność i automatyzację Twojej
          firmy.
          <button>Dowiedz się więcej</button>
        </p>
      </div>
      <div>
        <h2>
          Portfolio produktów BAL Industry w zakresie robotyki i automatyzacji.
        </h2>
        <button>Pobierz katalog</button>
      </div>
      <div>Katalog/galeria</div>
      <div>Partnerzy</div>
      <div>Nasze produkty</div>
    </main>
  )
}
