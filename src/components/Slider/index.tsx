// Import Swiper React components
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useContinents } from '../../contexts/ContinentsContext';
import { Continent } from '../../types/Continent';
import { SliderItem } from './SliderItem';

// Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Navigation, Pagination]);

interface SliderProps {
  continents: Continent[];
  initialSlide: number;
}

export function Slider({ continents, initialSlide }: SliderProps) {
  const { handleSelectContinent } = useContinents();

  return (
    <Swiper
      navigation
      slidesPerView={1}
      pagination={{ clickable: true }}
      grabCursor
      style={{ flex: '1', width: '100%', height: '100%' }}
      onSlideChange={(swiper) => handleSelectContinent(swiper.activeIndex + 1)}
      initialSlide={initialSlide}
    >
      <>
        {continents.map((continent) => (
          <SwiperSlide key={continent.id}>
            <SliderItem
              id={continent.id}
              name={continent.name}
              about={continent.about}
              imageUrl={continent.imageUrl}
            />
          </SwiperSlide>
        ))}
      </>
    </Swiper>
  );
}
