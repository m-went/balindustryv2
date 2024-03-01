/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from 'next/image'
import abbLogo from '../../../../public/partners/ABB_logo.svg'
import esabLogo from '../../../../public/partners/Esab_logo.svg'
import froniusLogo from '../../../../public/partners/Fronius_logo.svg'
import siegmundLogo from '../../../../public/partners/Logo_siegmund.png'
import siemensLogo from '../../../../public/partners/Siemens_logo.svg'
import universalRobotsLogo from '../../../../public/partners/Universal_robots_logo.svg'
import styles from './Partners.module.scss'

export default function Partners() {
  const partners = [
    { name: 'ESAB', logo: esabLogo },
    { name: 'ABB', logo: abbLogo },
    { name: 'Fronius', logo: froniusLogo },
    { name: 'Siegmund', logo: siegmundLogo },
    { name: 'Siemens', logo: siemensLogo },
    { name: 'Universal Robots', logo: universalRobotsLogo },
  ]
  return (
    <section className={styles.partners}>
      <h2>NASI PARTNERZY</h2>
      <div>
        {partners.map((partner) => (
          <Image key={partner.name} src={partner.logo} alt={partner.name} />
        ))}
      </div>
    </section>
  )
}
