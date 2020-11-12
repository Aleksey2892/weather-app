import React from 'react';
import s from './WeatherDetails.module.scss';

export default function WeatherDetails({ details }) {
  const wind = { ...details.wind };
  const main = { ...details.main };
  const clouds = { ...details.clouds };
  // const weather = { ...details.weather.icon };

  console.log(details);

  // console.log(details.whatTheDay);

  const changeAboutDay = idx => {
    if (idx === 0) return 'Сегодняшний день';

    if (idx === 1) return 'Завтрашний день';

    if (idx === 2) return 'Послезавтра';

    if (idx === 3) return 'Через 2 дня';

    if (idx === 4) return 'Через 3 дня';

    return 'Сегодняшний день';
  };

  const targetDay = changeAboutDay(details.whatTheDay);

  // const pop = details[0].pop;
  // const deg = details[0].wind.deg;
  // const speed = details[0].wind.speed;
  // const temp = details[0].main.temp;
  // const pressure = details[0].main.grnd_level;
  // const humidity = details[0].main.humidity;
  // const clouds = details[0].clouds.all;

  return (
    <div className={s.detailsBox}>
      <h3 className={s.aboutTargetDay}>Подробности. {targetDay}</h3>
      <p className={s.property}>
        Вероятность выпадения осадков: <span>{details.pop}%</span>
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
