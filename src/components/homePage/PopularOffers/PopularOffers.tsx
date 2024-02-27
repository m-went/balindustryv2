/* eslint-disable import/no-unassigned-import */
'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

export default function PopularOffers() {
  return (
    <div>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <img alt="Product photo" />
          <h3>Stanowisko Twin One-axis</h3>
          <p>Robot Gofa 15000, UR5/UR12</p>
          <p>Najniższa cena z ostatnich 30 dni: 7,50 zł</p>
          <div>
            300${' '}
            <p
              style={{
                textDecorationLine: 'line-through',
                textDecorationStyle: 'solid',
              }}
            >
              350$
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img alt="Product photo" />
          <h3>Stanowisko Twin One-axis</h3>
          <p>Robot Gofa 15000, UR5/UR12</p>
          <p>Najniższa cena z ostatnich 30 dni: 7,50 zł</p>
          <div>
            300${' '}
            <p
              style={{
                textDecorationLine: 'line-through',
                textDecorationStyle: 'solid',
              }}
            >
              350$
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img alt="Product photo" />
          <h3>Stanowisko Twin One-axis</h3>
          <p>Robot Gofa 15000, UR5/UR12</p>
          <p>Najniższa cena z ostatnich 30 dni: 7,50 zł</p>
          <div>
            300${' '}
            <p
              style={{
                textDecorationLine: 'line-through',
                textDecorationStyle: 'solid',
              }}
            >
              350$
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img alt="Product photo" />
          <h3>Stanowisko Twin One-axis</h3>
          <p>Robot Gofa 15000, UR5/UR12</p>
          <p>Najniższa cena z ostatnich 30 dni: 7,50 zł</p>
          <div>
            300${' '}
            <p
              style={{
                textDecorationLine: 'line-through',
                textDecorationStyle: 'solid',
              }}
            >
              350$
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
