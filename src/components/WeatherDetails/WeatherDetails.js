import React from 'react';
import s from './WeatherDetails.module.scss';

export default function WeatherDetails({ details, whatTheDay, cityName }) {
  const { pop, wind, main, clouds } = details;

  const changeTargetDay = idx => {
    switch (idx) {
      case 0:
        return 'Сегодняшний день';
      case 1:
        return 'Завтрашний день';
      case 2:
        return 'Послезавтра';
      case 3:
        return 'Через 2 дня';
      case 4:
        return 'Через 3 дня';
      default:
        return 'Сегодняшний день';
    }
  };

  return (
    <div className={s.detailsBox}>
      <h3 className={s.aboutTargetDay}>
        Подробности: <span>{cityName}</span>. {changeTargetDay(whatTheDay)}
      </h3>
      <p className={s.property}>
        Вероятность выпадения осадков: <span>{pop}%</span>
      </p>
      <p className={s.property}>
        Направление ветра: <span>{wind.deg} градус(ов)</span>
      </p>
      <p className={s.property}>
        Скорость ветра: <span>{wind.speed} метр/сек</span>
      </p>
      <p className={s.property}>
        Температура:{' '}
        <span>
          min {main.temp_min}°, max {main.temp_max}°
        </span>
      </p>
      <p className={s.property}>
        Давление: <span>{main.pressure}</span>
      </p>
      <p className={s.property}>
        Влажность: <span>{main.humidity}%</span>
      </p>
      <p className={s.property}>
        Облачность: <span>{clouds.all}%</span>
      </p>
    </div>
  );
}
