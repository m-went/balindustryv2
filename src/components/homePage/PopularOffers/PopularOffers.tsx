/* eslint-disable import/no-unassigned-import */
'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import styles from './PopularOffers.module.scss'
import photo from '../../../../public/products/twin_one_axis.png'
import Image from 'next/image'

export default function PopularOffers() {
  const slidesContent = [
    {
      img: photo,
      productName: 'Stanowisko Twin One-axis',
      productSecondLine: 'Robot Gofa 15000, UR5/UR12',
      lowestPrice: 'Najniższa cena z ostatnich 30 dni: 7,50 zł',
      actualPrice: '300$',
      lastPrice: '350$',
    },
    {
      img: photo,
      productName: 'Stanowisko Twin One-axis',
      productSecondLine: 'Robot Gofa 15000, UR5/UR12',
      lowestPrice: 'Najniższa cena z ostatnich 30 dni: 7,50 zł',
      actualPrice: '300$',
      lastPrice: '350$',
    },
    {
      img: photo,
      productName: 'Stanowisko Twin One-axis',
      productSecondLine: 'Robot Gofa 15000, UR5/UR12',
      lowestPrice: 'Najniższa cena z ostatnich 30 dni: 7,50 zł',
      actualPrice: '300$',
      lastPrice: '350$',
    },
  ]

  const slidesPagination = {
    clickable: true,
    renderBullet(index: any, className: string) {
      return (
        '<div class="' +
        className +
        ' ' +
        styles.paginationBullet +
        '"><span></span></div>'
      )
    },
  }

  return (
    <div>
      <h2>Popularne oferty</h2>
      <Swiper
        pagination={slidesPagination}
        modules={[Pagination]}
        loop={true}
        className="mySwiper"
      >
        {slidesContent.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={styles.slideContainer}>
              <Image src={slide.img} alt="Product photo" />
              <h3>{slide.productName}</h3>
              <p>{slide.productSecondLine}</p>
              <p>{slide.lowestPrice}</p>
              <div>
                {slide.actualPrice}{' '}
                <p
                  style={{
                    textDecorationLine: 'line-through',
                    textDecorationStyle: 'solid',
                  }}
                >
                  {slide.lastPrice}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
