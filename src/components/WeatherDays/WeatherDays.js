import React, { useState } from 'react';
import WeatherDetails from '../WeatherDetails/WeatherDetails';
import s from './WeatherDays.module.scss';

const WeatherDays = ({ allData }) => {
  const { list: data } = allData;

  const filteredWeatherData = data.filter((day, idx) => idx % 8 === 0 && day);

  const [visibleDetails, setVisibleDetails] = useState(filteredWeatherData[0]);
  const [idxDay, setIdxDay] = useState(0);

  const handleClickDay = dayIdx => {
    const changeDay = filteredWeatherData.filter((_, idx) => idx === dayIdx)[0];

    setVisibleDetails(changeDay);
    setIdxDay(dayIdx);
  };

  const dayCreate = (itemDay, idx, dayTitle) => {
    const icon = itemDay.weather.find(item => item.icon).icon;
    const urlIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    return (
      <div className={s.dayBox} key={idx} onClick={() => handleClickDay(idx)}>
        <h3 className={s.titleDay}>{dayTitle}</h3>
        <div className={s.iconBox}>
          <img src={urlIcon} alt="weather icon" className={s.imageIcon} />
        </div>
        <p className={s.temp}>{itemDay.main.temp}°</p>
      </div>
    );
  };

  return (
    <div>
      <h3 className={s.titleCity}>
        Погода для города <span>{allData.city.name}</span>
      </h3>

      <p className={s.about}>
        Нажмите на нужный день, для переключения подробностей ниже
      </p>

      <div className={s.daysWeatherBox}>
        {filteredWeatherData.map((itemDay, idx) => {
          switch (idx) {
            case 0:
              return dayCreate(itemDay, idx, 'Сегодня');
            case 1:
              return dayCreate(itemDay, idx, 'Завтра');
            case 2:
              return dayCreate(itemDay, idx, 'Послезавтра');
            case 3:
              return dayCreate(itemDay, idx, 'Через 2 дня');
            case 4:
              return dayCreate(itemDay, idx, 'Через 3 дня');
            default:
              return dayCreate(itemDay, idx, 'Сегодня');
          }
        })}
      </div>

      <WeatherDetails
        details={visibleDetails}
        whatTheDay={idxDay}
        cityName={allData.city.name}
      />
    </div>
  );
};

export default WeatherDays;
